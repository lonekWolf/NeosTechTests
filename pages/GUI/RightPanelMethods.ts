import { Locator, Page } from "@playwright/test";

export class RightPanel {
    // Metoda na walidację
    readonly idPanel = "10057390c81d41028f8f66821d84ff23";
    readonly fBigInt: Locator;
    readonly fFloat: Locator;
    readonly fSmallInt: Locator;
    readonly parameter4: Locator;
    readonly parameter5: Locator;
    readonly parameter6: Locator;

    constructor(private page: Page) {
        this.fBigInt = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FBIGINT')]//input`);
        this.fFloat = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FFLOAT')]//*[contains(@class,'k-numeric-wrap')]`);
        this.fSmallInt = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FSMALLINT')]//*[contains(@class,'k-dropdown-wrap')]`);
        this.parameter4 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p4')]//input`);
        this.parameter5 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p5')]//*[contains(@class,'k-numeric-wrap')]`);
        this.parameter6 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p6')]//*[contains(@class,'k-dropdown-wrap')]`);
    }
}