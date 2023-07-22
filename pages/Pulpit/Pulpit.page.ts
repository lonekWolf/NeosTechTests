import { Page, expect } from "@playwright/test";

export class PulpitPage {
    constructor(private page: Page) { }

    profileLabel = this.page.locator('#mainMenuTitle');
    tabName = this.page.locator('div > .formTabContainer');

    async VeryfiProfileLabel(profileLabelText: string): Promise<void> {
        await expect.soft(this.profileLabel).toHaveText(profileLabelText);
        await this.page.goto('/');
        await this.page.getByRole('link', { name: '' }).click();
    }

    async VeryfiTabName(tabName: string): Promise<void> {
        await expect.soft(this.tabName).toContainText(tabName);
    }
}