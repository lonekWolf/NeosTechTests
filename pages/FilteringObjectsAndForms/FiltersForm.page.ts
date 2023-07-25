import { Locator, Page, expect } from "@playwright/test";

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

    private async ValidationInput(FRefMaxValue: number, validateInput: Locator): Promise<void> {
        const value = await validateInput.evaluate(e => (e as HTMLInputElement).value);
        await expect(Number(value)).toBeLessThanOrEqual(FRefMaxValue);
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
            await this.ValidationInput(maxFIntegerValue, this.fInteger);
        }
    }

    async VeryfyFRefAndFstringInGrid(fString: string, fRefMaxValue: number): Promise<void> {
        for (let rowNumber = 1; rowNumber < 4; rowNumber++) {
            await this.page.locator(`tbody > tr:nth-child(${rowNumber}) > td:nth-child(2)`).first().click();
            await this.ValidationInputFString(fString);
            await this.ValidationInput(fRefMaxValue, this.fRef);
        }
    }

    // async VeryfyFIntegerInGrid(fIntegerMaxValue: number): Promise<void> {
    //     for (let rowNumber = 1; rowNumber < 6; rowNumber++) {
    //         await this.page.locator(`tbody > tr:nth-child(${rowNumber}) > td:nth-child(2)`).first().click();
    //         await this.ValidationInput(fIntegerMaxValue, this.fInteger);
    //     }
    // }

    async VeryfyRow(fIntegerMaxValue: number, rowsInGrid: number): Promise<void> {
        for (let rowNumber = 1; rowNumber < rowsInGrid + 1; rowNumber++) {
            await this.page.locator(`tbody > tr:nth-child(${rowNumber}) > td:nth-child(2)`).first().click();
            await this.ValidationInput(fIntegerMaxValue, this.fInteger);
        }
    }


}