import { Locator, Page, expect } from "@playwright/test";
import { months } from "../../test-data/Dictionaries/Dictionaries.Data";

export class DictionariesPage {
    constructor(private page: Page) { }
    fIntegerSelect = this.page.locator('.Field_FINTEGER select');
    fSmallintSelect = this.page.locator('.Field_FSMALLINT select');
    staticComboboxSelect = this.page.locator('.Field__staticdictcombobox select');
    staticDropdownSelect = this.page.locator('.Field__staticdictdropdown select');
    // Dictionaries
    dictFInteger = this.page.locator('.Field_FINTEGER span').last();
    dictFSmallint = this.page.locator('.Field_FSMALLINT span').last();


    async VeryfyFideldsDictionaries(): Promise<void> {
        await expect(this.fIntegerSelect.locator('option[selected="selected"]')).toHaveText('(brak)');
        await expect(this.fSmallintSelect.locator('option[selected="selected"]')).toHaveText('(brak)');
        for (let index = 1; index < 13; index++) {
            await expect.soft(this.fIntegerSelect.locator(`option[value="${index}"]`)).toHaveText(months[index - 1]);
            await expect.soft(this.fSmallintSelect.locator(`option[value="${index}"]`)).toHaveText(months[index - 1]);
        }
    }

    async VeryfyParamsDictionaries(): Promise<void> {
        await expect(this.staticComboboxSelect.locator('option[value=""]')).toHaveText('(brak)');
        await expect(this.fSmallintSelect.locator('option[value=""]')).toHaveText('(brak)');
        for (let index = 1; index < 13; index++) {
            await expect.soft(this.staticComboboxSelect.locator(`option[value="${index}"]`)).toHaveText(months[index - 1]);
            await expect.soft(this.fSmallintSelect.locator(`option[value="${index}"]`)).toHaveText(months[index - 1]);
        }
    }

    async VeryfyTableRowsWithDictionaryDate(): Promise<void> {
        for (let index = 1; index < 13; index++) {
            await expect(this.page.locator(`tr:nth-child(${index}) td:nth-child(3) span`).first()).toHaveText(months[index - 1]);
            await expect(this.page.locator(`tr:nth-child(${index}) td:nth-child(4) span`).first()).toHaveText(months[index - 1]);
        }
    }
    private async SelectOption(dictionary: Locator, option: string): Promise<void> {
        await dictionary.click();
        await this.page.getByRole('option', { name: option }).click();
    }

    async VeryfyChangeOptionsWithTableRows(): Promise<void> {
        for (let index = 1; index < 13; index++) {
            await this.SelectOption(this.dictFInteger, months[index - 1]);
            await this.SelectOption(this.dictFSmallint, months[index - 1]);

            await expect(this.page.locator(`tr:nth-child(1) td:nth-child(3) span`).first()).toHaveText(months[index - 1]);
            await expect(this.page.locator(`tr:nth-child(1) td:nth-child(4) span`).first()).toHaveText(months[index - 1]);
        }
    }
}