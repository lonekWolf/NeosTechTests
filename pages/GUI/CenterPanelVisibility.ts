import { Locator, Page } from "@playwright/test";

export class CenterPanel {
    readonly idPanel = '20efd287d8ad49218dbcf316ef01fbc6';
    readonly fInteger: Locator;
    readonly fNumeric: Locator;
    readonly fString: Locator;
    readonly parameter1: Locator;
    readonly parameter2: Locator;
    readonly parameter3: Locator;
    readonly buttonDoNothing: Locator;

    constructor(private page: Page) {
        this.fInteger = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FINTEGER')]`);
        this.fNumeric = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FNUMERIC')]`);
        this.fString = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FSTRING')]`);
        this.parameter1 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p1')]`);
        this.parameter2 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p2')]`);
        this.parameter3 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p3')]`);
        this.buttonDoNothing = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Action_DoNothing')]`);
    }
}