import { Locator, Page } from "@playwright/test";

export class RightPanel {
    // Edytowalność na nie
    readonly idPanel = '05bfbb71124744d0b0cb35812ae39c69';
    readonly fInteger: Locator;
    readonly fNumeric: Locator;
    readonly parameter1: Locator;
    readonly parameter2: Locator;

    constructor(private page: Page) {
        this.fInteger = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FINTEGER')]//input`);
        this.fNumeric = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FNUMERIC')]//input`).first();;
        this.parameter1 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'SFIELD Field__p1edit')]//input`);
        this.parameter2 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p2calc')]//input`).first();
    }
}