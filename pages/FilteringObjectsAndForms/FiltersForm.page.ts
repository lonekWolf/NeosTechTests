import { Page, expect } from "@playwright/test";

export class FiltersFormPage {
    constructor(private page: Page) { }
    //Checkboxs
    private changeStringFilter = this.page.locator('.SFIELD.Field__stringfilter > label').first();

    //Validation inputs
    private fRef = this.page.locator('.Field_REF > div > input');
    private fString = this.page.locator('.Field_FSTRING > div > input');
    private fInteger = this.page.locator('.Field_FINTEGER > div > input');


    private async ValidationInputFString(fString: string): Promise<void> {
        await expect(this.fString).toHaveValue(fString);
    }

    private async ValidationInputFRef(FRefMaxValue: number): Promise<void> {
        const valueFRef = await this.fRef.evaluate(e => (e as HTMLInputElement).value);
        await expect(Number(valueFRef)).toBeLessThanOrEqual(FRefMaxValue);
    }

    private async ValidationInputFInteger(FIntegerMaxValue: number): Promise<void> {
        const valueFInteger = await this.fInteger.evaluate(e => (e as HTMLInputElement).value);
        await expect(Number(valueFInteger)).toBeLessThanOrEqual(FIntegerMaxValue);
    }

    async VeryfyFStringGridBeforeTest(fString: string): Promise<void> {
        for (let rowNumber = 1; rowNumber < 6; rowNumber++) {
            await this.page.locator(`tbody > tr:nth-child(${rowNumber}) > td:nth-child(2)`).first().click();
            await this.ValidationInputFString(fString);
        }
    }

    async CheckChaneStringFilter(): Promise<void> {
        this.changeStringFilter.check();
    }

    async VeryfyFStringGridAfterTest(fString: string): Promise<void> {
        for (let rowNumber = 1; rowNumber < 6; rowNumber++) {
            await this.page.locator(`tbody > tr:nth-child(${rowNumber}) > td:nth-child(2)`).first().click();
            await this.ValidationInputFString(fString);
        }
    }

    async VeryfyFIntegerAndFstringInGrid(fString: string, maxFIntegerValue: number): Promise<void> {
        for (let rowNumber = 1; rowNumber < 4; rowNumber++) {
            await this.page.locator(`tbody > tr:nth-child(${rowNumber}) > td:nth-child(2)`).first().click();
            await this.ValidationInputFString(fString);
            await this.ValidationInputFInteger(maxFIntegerValue);
        }
    }

    async VeryfyFRefAndFstringInGrid(fString: string, fRefMaxValue: number): Promise<void> {
        for (let rowNumber = 1; rowNumber < 4; rowNumber++) {
            await this.page.locator(`tbody > tr:nth-child(${rowNumber}) > td:nth-child(2)`).first().click();
            await this.ValidationInputFString(fString);
            await this.ValidationInputFRef(fRefMaxValue);
        }
    }

    async VeryfyFIntegerInGrid(fIntegerMaxValue: number): Promise<void> {
        for (let rowNumber = 1; rowNumber < 6; rowNumber++) {
            await this.page.locator(`tbody > tr:nth-child(${rowNumber}) > td:nth-child(2)`).first().click();
            await this.ValidationInputFInteger(fIntegerMaxValue);
        }
    }


}