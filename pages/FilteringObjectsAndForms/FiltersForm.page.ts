import { Page, expect } from "@playwright/test";

export class FiltersFormPage {
    constructor(private page: Page) { }
    //Checkboxs
    private changeStringFilter = this.page.locator('.SFIELD.Field__stringfilter > label').first();

    //Validation inputs
    private fRef = this.page.locator('.Field_REF > div > input');
    private fString = this.page.locator('.Field_FSTRING > div > input');
    private fInteger = this.page.locator('.Field_FINTEGER > div > input');


    private async ValidationInputs(fString: string): Promise<void> {
        await expect(this.fString).toHaveValue(fString);
    }

    async VeryfyGridBeforeTest(fString: string): Promise<void> {
        for (let rowNumber = 1; rowNumber < 6; rowNumber++) {
            this.page.locator(`tbody > tr:nth-child(${rowNumber}) > td:nth-child(2)`).first().click();
            await this.ValidationInputs(fString);
        }
    }

    async CheckChaneStringFilter(): Promise<void> {
        this.changeStringFilter.check();
    }

    async VeryfyGridAfterTest(fString: string): Promise<void> {
        for (let rowNumber = 1; rowNumber < 6; rowNumber++) {
            this.page.locator(`tbody > tr:nth-child(${rowNumber}) > td:nth-child(2)`).first().click();
            await this.ValidationInputs(fString);
        }
    }
}