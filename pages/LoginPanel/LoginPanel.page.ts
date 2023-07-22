import { Page } from "@playwright/test";

export class LoginPanelPage {
    constructor(private page: Page) { }
    // Login form
    login = this.page.locator('#tbLogin');
    password = this.page.locator('#tbHaslo');
    department = this.page.locator('#pOddzial');
    selectLanguage = this.page.locator('#loginParams > p:nth-child(4) >span');
    btnLogin = this.page.locator('.LoginButton');

    async CorrectLogin(login: string, password: string, department: string, selectLanguage: string): Promise<void> {
        await this.login.fill(login);
        await this.password.fill(password);
        await this.department.click();
        await this.page.getByRole('option', { name: department }).click();
        await this.login.click();
        await this.selectLanguage.click();
        await this.page.getByRole('option', { name: selectLanguage }).click();
        await this.btnLogin.click();
    }

}
