import { Page, expect } from "@playwright/test";

export class PulpitPage {
    constructor(private page: Page) { }

    profileLabel = this.page.locator('#mainMenuTitle');

    async VeryfiProfileLabel(profileLabelText: string): Promise<void> {
        await expect.soft(this.profileLabel).toHaveText(profileLabelText);
        await this.page.goto('/');
        this.page.getByRole('link', { name: '' }).click();
    }
}