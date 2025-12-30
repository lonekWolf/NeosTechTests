import { Locator, Page, expect } from "@playwright/test";

export class VisibilityActions {
    readonly returnedValueFromAction: Locator;
    readonly paramForVisibilityMetod: Locator;
    readonly btnVisibilityOnYes: Locator;
    readonly btnVisibilityOnNo: Locator;
    readonly btnVisibilityWhileBrowsing: Locator;
    readonly btnVisibilityWhileEditing: Locator;
    readonly btnVisibilityMetod: Locator;

    constructor(private page: Page) {
        this.returnedValueFromAction = this.page.locator('.SACTIONCONTAINER input').first();
        this.paramForVisibilityMetod = this.page.locator('.SACTIONCONTAINER input').last();
        this.btnVisibilityOnYes = this.page.locator(`//*[contains(text(),'Widoczność na tak')]`);
        this.btnVisibilityOnNo = this.page.locator(`//*[contains(text(),'Widoczność na nie')]`);
        this.btnVisibilityWhileBrowsing = this.page.locator(`//*[contains(text(),'Widoczność podczas przeglądania')]`);
        this.btnVisibilityWhileEditing = this.page.locator(`//*[contains(text(),'Widoczność podczas edycji')]`);
        this.btnVisibilityMetod = this.page.locator(`//*[contains(text(),'Metoda na widoczność')]`);
    }

    async ClickBtnVisibilityOnYes(): Promise<void> {
        await this.btnVisibilityOnYes.click();
    }

    async ClickBtnVisibilityWhileBrowsing(): Promise<void> {
        await this.btnVisibilityWhileBrowsing.click();
    }

    async ClickBtnVisibilityMethod(): Promise<void> {
        await expect(this.btnVisibilityMetod).not.toBe({});
        await this.paramForVisibilityMetod.fill('Pokaz mi btn metody na widoczność');
        await this.paramForVisibilityMetod.blur();
        await this.btnVisibilityMetod.click();
    }
    async VerifyBtnVisibilityOnYes(): Promise<void> {
        await expect(this.returnedValueFromAction).toHaveText('Widoczność na tak');
    }

    async VerifyBtnVisibilityWhileBrowsing(): Promise<void> {
        await expect(this.returnedValueFromAction).toHaveText('Widoczność podczas przeglądania');
    }

    async VerifyBtnVisibilityOnNoDoesntExist(): Promise<void> {
        await expect(this.btnVisibilityOnNo).not.toBe({});
    }

    async VerifyBtnVisibilityMethod(): Promise<void> {
        await expect(this.returnedValueFromAction).toHaveText('Metoda na widoczność');
    }
}