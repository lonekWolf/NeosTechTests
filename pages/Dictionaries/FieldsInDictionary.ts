import { Locator, Page, expect } from "@playwright/test";
import { daysOfTheWeek } from "../../test-data/Dictionaries/Dictionaries.Data";

export class FieldsInDictionary {
    readonly btnSelect: Locator;
    readonly btnCloseDictionary: Locator;

    constructor(private page: Page) {
        this.btnSelect = this.page.locator(`//label[text()='Wybierz']//..`).first();
        this.btnCloseDictionary = this.page.locator(`.Action_CloseRecord button:nth-child(1)`).first();
    }

    async VerifySorting(dictionary: Locator): Promise<void> {
        await dictionary.click();
        // Wait for dictionary table to be visible and loaded
        const dictionaryTable = this.page.locator('.Object_DAYSOFTHEWEEK');
        await dictionaryTable.waitFor({ state: 'visible' });
        // Wait for first row to be visible to ensure table is loaded
        await this.page.locator('.Object_DAYSOFTHEWEEK tr:nth-child(1)').waitFor({ state: 'visible' });
        for (let index = 1; index < 8; index++) {
            await expect.soft(this.page.locator(`.Object_DAYSOFTHEWEEK tr:nth-child(${index}) td:nth-child(2) span:nth-child(1)`).first()).toHaveText(String(index), { timeout: 1000 });
            await expect.soft(this.page.locator(`.Object_DAYSOFTHEWEEK tr:nth-child(${index}) td:nth-child(3) span:nth-child(1)`).first()).toHaveText(daysOfTheWeek[index - 1], { timeout: 1000 });
        }
        await this.btnCloseDictionary.click();
    }

    async VerifyFiltering(dictionary: Locator, firstRow: string, secondRow: string): Promise<void> {
        await dictionary.click();
        await expect.soft(this.page.locator(`.Object_DAYSOFTHEWEEK tr:nth-child(1) td:nth-child(3) span:nth-child(1)`).first()).toHaveText(firstRow);
        await expect.soft(this.page.locator(`.Object_DAYSOFTHEWEEK tr:nth-child(2) td:nth-child(3) span:nth-child(1)`).first()).toHaveText(secondRow);
        await this.btnCloseDictionary.click();
    }
}