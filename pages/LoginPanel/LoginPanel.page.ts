import { Page, expect } from "@playwright/test";

export class LoginPanelPage {
    constructor(private page: Page) { }
    // Login form
    login = this.page.locator('#tbLogin');
    password = this.page.locator('#tbHaslo');
    department = this.page.locator('#pOddzial');
    selectLanguage = this.page.locator('#loginParams > p:nth-child(4) >span');
    btnLogin = this.page.locator('.LoginButton');
    labelLogin = this.page.locator('#labelLogin');
    labelHaslo = this.page.locator('#labelHaslo');

    async CorrectLogin(login: string, password: string): Promise<void> {
        await this.login.fill(login);
        await this.password.fill(password);
        await this.login.click();
        // Wait for login button to be enabled and ready
        await this.btnLogin.waitFor({ state: 'visible' });
        await this.btnLogin.click();
    }

    async VerifyIncorrectLogin(alertMessage: string): Promise<void> {
        await this.page.once('dialog', dialog => {
            console.log(dialog.message());
            const dialogMessage = dialog.message();
            console.log(`Dialog message: ${dialogMessage}, expected value: ${alertMessage}`);
            expect(dialogMessage.includes(alertMessage)).toBeTruthy();
            dialog.accept();
        });
    }
    async ChangeLanguageTo(selectLanguage: string) {
        await this.selectLanguage.click();
        await this.page.getByRole('option', { name: selectLanguage }).click();
    }

    async VeryfyTextLabels(labelLogin: string, labelHaslo: string, btnLogin: string): Promise<void> {
        await expect.soft(this.labelLogin).toContainText(labelLogin);
        await expect.soft(this.labelHaslo).toContainText(labelHaslo);
        await expect.soft(this.btnLogin).toContainText(btnLogin);
    }

}
