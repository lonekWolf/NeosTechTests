import { Locator, Page } from "@playwright/test";

export class LeftCenterPanel {
    // Metoda na edytowalność
    readonly idPanel = '838074a184204d57b18baa14e91fde7a';
    readonly buttonChangeEditable: Locator;
    readonly fInteger: Locator;
    readonly fNumeric: Locator;
    readonly fString: Locator;
    readonly parameter1: Locator;
    readonly parameter2: Locator;
    readonly parameter3: Locator;
    readonly buttonDoNothing: Locator;

    constructor(private page: Page) {
        this.buttonChangeEditable = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Action_EditableSwitch')]//button`);
        this.fInteger = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FINTEGER')]//input`);
        this.fNumeric = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FNUMERIC')]//input`).first();
        this.fString = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FSTRING')]//*[contains(@class,'k-dropdown-wrap')]`);
        this.parameter1 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p1')]//input`);
        this.parameter2 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p2')]//input`).first();
        this.parameter3 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p3')]//*[contains(@class,'k-dropdown-wrap')]`);
        this.buttonDoNothing = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Action_DoNothing7')]//button`);
    }
}