import { Locator, Page, expect } from "@playwright/test";

export class FiltersFormPage {
    //Checkboxs
    readonly changeStringFilter: Locator;

    //Validation inputs
    readonly fRef: Locator;
    readonly fString: Locator;
    readonly fInteger: Locator;

    constructor(private page: Page) {
        //Checkboxs
        this.changeStringFilter = this.page.locator('.SFIELD.Field__stringfilter > label').first();
        //Validation inputs
        this.fRef = this.page.locator('.Field_REF > div > input');
        this.fString = this.page.locator('.Field_FSTRING > div > input');
        this.fInteger = this.page.locator('.Field_FINTEGER > div > input');
    }

    private async ValidationInputFString(fString: string): Promise<void> {
        await expect(this.fString).toHaveValue(fString);
    }

    private async ValidationInput(FRefMaxValue: number, validateInput: Locator): Promise<void> {
        const value = await validateInput.evaluate(e => (e as HTMLInputElement).value);
        await expect(Number(value)).toBeLessThanOrEqual(FRefMaxValue);
    }

    async VerifyFStringInGrid(fString: string, rowsInGrid: number): Promise<void> {
        for (let rowNumber = 1; rowNumber < rowsInGrid + 1; rowNumber++) {
            await this.page.locator(`tbody > tr:nth-child(${rowNumber}) > td:nth-child(2)`).first().click();
            await this.ValidationInputFString(fString);
        }
    }

    async CheckChangeStringFilter(): Promise<void> {
        this.changeStringFilter.check();
    }

    async VerifyFIntegerAndFStringInGrid(fString: string, maxFIntegerValue: number): Promise<void> {
        for (let rowNumber = 1; rowNumber < 4; rowNumber++) {
            await this.page.locator(`tbody > tr:nth-child(${rowNumber}) > td:nth-child(2)`).first().click();
            await this.ValidationInputFString(fString);
            await this.ValidationInput(maxFIntegerValue, this.fInteger);
        }
    }

    async VerifyFRefAndFStringInGrid(fString: string, fRefMaxValue: number): Promise<void> {
        for (let rowNumber = 1; rowNumber < 4; rowNumber++) {
            await this.page.locator(`tbody > tr:nth-child(${rowNumber}) > td:nth-child(2)`).first().click();
            await this.ValidationInputFString(fString);
            await this.ValidationInput(fRefMaxValue, this.fRef);
        }
    }

    async VerifyInputFIntegerAndRows(fIntegerMaxValue: number, rowsInGrid: number): Promise<void> {
        for (let rowNumber = 1; rowNumber < rowsInGrid + 1; rowNumber++) {
            await this.page.locator(`tbody > tr:nth-child(${rowNumber}) > td:nth-child(2)`).first().click();
            await this.ValidationInput(fIntegerMaxValue, this.fInteger);
        }
    }

}