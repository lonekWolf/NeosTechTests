import { Locator, Page } from "@playwright/test";

export class RightCenterPanel {
    // Metoda na etykietę
    readonly idPanel = "b8178abdb81247d9a287acef299bb6d4";
    readonly labelSuffix: Locator;
    readonly fInteger: Locator;
    readonly fNumeric: Locator;
    readonly fString: Locator;
    readonly parameter1: Locator;
    readonly parameter2: Locator;
    readonly parameter3: Locator;
    readonly buttonDoNothing: Locator;

    constructor(private page: Page) {
        this.labelSuffix = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__labelsuffix')]//input`);
        this.fInteger = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FINTEGER')]//label`);
        this.fNumeric = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FNUMERIC')]//label`);
        this.fString = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FSTRING')]//label`);
        this.parameter1 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p1')]//label`);
        this.parameter2 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p2')]//label`);
        this.parameter3 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p3')]//label`);
        this.buttonDoNothing = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Action_DoNothing9')]//label`);
    }
}