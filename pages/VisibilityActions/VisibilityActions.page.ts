import { Locator, Page, expect } from "@playwright/test";

export class VisibilityActions {
    constructor(private page: Page) { }

    returnedValueFromAction = this.page.locator('.SACTIONCONTAINER input').first();
    paramForVisibilityMetod = this.page.locator('.SACTIONCONTAINER input').last();
    btnVisibilityOnYes = this.page.locator(`//*[contains(text(),'Widoczność na tak')]`);
    btnVisibilityOnNo = this.page.locator(`//*[contains(text(),'Widoczność na nie')]`);
    btnVisibilityWhileBrowsing = this.page.locator(`//*[contains(text(),'Widoczność podczas przeglądania')]`);
    btnVisibilityWhileEditing = this.page.locator(`//*[contains(text(),'Widoczność podczas edycji')]`);
    btnVisibilityMetod = this.page.locator(`//*[contains(text(),'Metoda na widoczność')]`);

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