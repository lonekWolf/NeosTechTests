import { Locator, Page, expect } from "@playwright/test";

export class MethodsFormEditPage {
    readonly parameterRecalculate: Locator;
    readonly fInteger: Locator;
    readonly fNumeric: Locator;
    readonly fString: Locator;
    readonly fBigInt: Locator;
    readonly fFloat: Locator;
    readonly fSmallInt: Locator;
    readonly parameterEdit: Locator;
    readonly parameterCalc: Locator;
    readonly parameterDropdown: Locator;
    readonly parameterRecalculationEdit: Locator;
    readonly parameterRecalculationCalc: Locator;
    readonly parameterRecalculationDropdown: Locator;

    constructor(private page: Page) {
        this.parameterRecalculate = this.page.locator(`//*[contains(@class,'Field__recalculate')]//input`);
        this.fInteger = this.page.locator(`//*[contains(@class,'Field_FINTEGER')]//input`);
        this.fNumeric = this.page.locator(`//*[contains(@class,'Field_FNUMERIC')]//input`).first();
        this.fString = this.page.locator(`//*[contains(@class,'Field_FSTRING')]//*[contains(@class,'k-input')]`);
        this.fBigInt = this.page.locator(`//*[contains(@class,'Field_FBIGINT')]//input`);
        this.fFloat = this.page.locator(`//*[contains(@class,'Field_FFLOAT')]//input`).first();
        this.fSmallInt = this.page.locator(`//*[contains(@class,'Field_FSMALLINT')]//*[contains(@class,'k-input')]`);
        this.parameterEdit = this.page.locator(`//*[contains(@class,'Field__p1')]//input`).first();
        this.parameterCalc = this.page.locator(`//*[contains(@class,'Field__p2')]//input`).first();
        this.parameterDropdown = this.page.locator(`//*[contains(@class,'Field__p3')]//*[contains(@class,'k-input')]`);
        this.parameterRecalculationEdit = this.page.locator(`//*[contains(@class,'Field__p4')]//input`);
        this.parameterRecalculationCalc = this.page.locator(`//*[contains(@class,'Field__p5')]//input`).first();
        this.parameterRecalculationDropdown = this.page.locator(`//*[contains(@class,'Field__p6')]//*[contains(@class,'k-input')]`);
    }

    async VerifyTextInElement(locator: Locator, expectedText: string): Promise<void> {
        await expect.soft(locator).toHaveText(expectedText);
    }

    async VerifyValueInElement(locator: Locator, expectedText: string): Promise<void> {
        await expect.soft(locator).toHaveValue(expectedText);
    }
    async VerifyTextInElementNotEqual(locator: Locator, expectedText: string): Promise<void> {
        await expect.soft(locator).not.toHaveText(expectedText);
    }
    async VerifyValueInElementNotEqual(locator: Locator, expectedText: string): Promise<void> {
        await expect.soft(locator).not.toHaveValue(expectedText);
    }

    async RecalculationParams(recalcParameterValue: string): Promise<void> {
        await this.parameterRecalculate.fill(recalcParameterValue);
        await this.fInteger.click();
    }
}