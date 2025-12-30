import { Locator, Page } from "@playwright/test";

export class CenterPanel {
    // Metoda na ikonę
    readonly idPanel = "15476e5129f445569243cb5bcb91d194";
    readonly iconSwitch: Locator;
    readonly fInteger: Locator;
    readonly fNumeric: Locator;
    readonly fString: Locator;
    readonly parameter1: Locator;
    readonly parameter2: Locator;
    readonly parameter3: Locator;
    readonly buttonDoNothing: Locator;

    constructor(private page: Page) {
        this.iconSwitch = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__iconswitch')]//input`);
        this.fInteger = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FINTEGER')]/label/span`);
        this.fNumeric = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FNUMERIC')]/label/span`);
        this.fString = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FSTRING')]/label/span`);
        this.parameter1 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p1')]/label/span`);
        this.parameter2 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p2')]/label/span`);
        this.parameter3 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p3')]/label/span`);
        this.buttonDoNothing = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Action_DoNothing8')]//span`);
    }
}