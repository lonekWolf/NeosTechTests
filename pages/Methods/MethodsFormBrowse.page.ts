import { Locator, Page, expect } from "@playwright/test";

export class MethodsFormBrowsePage {
    constructor(private page: Page) { }

    parametrRecalculation = this.page.locator(`//*[contains(@class,'Field__recalculate')]//input`);
    fInteger = this.page.locator(`//*[contains(@class,'Field_FINTEGER')]//input`);
    fNumeric = this.page.locator(`//*[contains(@class,'Field_FNUMERIC')]//input`).first();
    fString = this.page.locator(`//*[contains(@class,'Field_FSTRING')]//*[contains(@class,'k-input')]`);
    parameterEdit = this.page.locator(`//*[contains(@class,'Field__p1')]//input`);
    parameterCalc = this.page.locator(`//*[contains(@class,'Field__p2')]//input`).first();
    parameterDropdown = this.page.locator(`//*[contains(@class,'Field__p3')]//*[contains(@class,'k-input')]`);
    fBigInt = this.page.locator(`//*[contains(@class,'Field_FBIGINT')]//input`);
    fFloat = this.page.locator(`//*[contains(@class,'Field_FFLOAT')]//input`);
    fSmallInt = this.page.locator(`//*[contains(@class,'Field_FSMALLINT')]//*[contains(@class,'k-input')]`);
    parameterRecalculationEdit = this.page.locator(`//*[contains(@class,'Field__p4')]//input`);
    parameterRecalculationCalc = this.page.locator(`//*[contains(@class,'Field__p5')]//input`).first();;
    parameterRecalculationDropdown = this.page.locator(`//*[contains(@class,'Field__p6')]//*[contains(@class,'k-input')]`);

    async VeryfyTextInElement(locator: Locator, expectedText: string): Promise<void> {
        await expect.soft(locator).toHaveText(expectedText);
    }

    async VeryfyValuetInElement(locator: Locator, expectedText: string): Promise<void> {
        await expect.soft(locator).toHaveValue(expectedText);
    }
    async VeryfyTextInElementNotEqual(locator: Locator, expectedText: string): Promise<void> {
        await expect.soft(locator).not.toHaveText(expectedText);
    }
    async VeryfyValuetInElementNotEqual(locator: Locator, expectedText: string): Promise<void> {
        await expect.soft(locator).not.toHaveValue(expectedText);
    }

    async RecalculationParams(recalParametrValue: string): Promise<void> {
        await this.parametrRecalculation.fill(recalParametrValue);
        await this.fInteger.click();
    }
}