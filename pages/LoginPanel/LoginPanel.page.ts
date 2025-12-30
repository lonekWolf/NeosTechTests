import { Locator, Page, expect } from "@playwright/test";

export class LoginPanelPage {
    // Login form
    readonly login: Locator;
    readonly password: Locator;
    readonly department: Locator;
    readonly selectLanguage: Locator;
    readonly btnLogin: Locator;
    readonly labelLogin: Locator;
    readonly labelHaslo: Locator;

    constructor(private page: Page) {
        // Login form
        this.login = this.page.locator('#tbLogin');
        this.password = this.page.locator('#tbHaslo');
        this.department = this.page.locator('#pOddzial');
        this.selectLanguage = this.page.locator('#loginParams > p:nth-child(4) >span');
        this.btnLogin = this.page.locator('.LoginButton');
        this.labelLogin = this.page.locator('#labelLogin');
        this.labelHaslo = this.page.locator('#labelHaslo');
    }

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

    async VerifyTextLabels(labelLogin: string, labelHaslo: string, btnLogin: string): Promise<void> {
        await expect.soft(this.labelLogin).toContainText(labelLogin);
        await expect.soft(this.labelHaslo).toContainText(labelHaslo);
        await expect.soft(this.btnLogin).toContainText(btnLogin);
    }

}
