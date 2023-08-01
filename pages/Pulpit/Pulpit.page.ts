import { Page, expect } from "@playwright/test";

export class PulpitPage {
    constructor(private page: Page) { }

    profileLabel = this.page.locator('#mainMenuTitle');
    tabName = this.page.locator('div > .formTabContainer');
    menu = this.page.locator('#user-menu-right');
    menuOptionLogout = this.page.locator('ul#user-menu li:nth-child(3)');
    menuOptionChangePassword = this.page.locator('ul#user-menu li:nth-child(4)');
    menuOptionMobileDevice = this.page.locator('ul#user-menu li:nth-child(6)');
    menuOptionDesktopDevice = this.page.locator('ul#user-menu li:nth-child(7)');
    menuOptionRefreshDatabaseConnection = this.page.locator('ul#user-menu li:nth-child(9)');

    async OpenMenuOption(): Promise<void> {
        await this.menu.click();
    }

    async VerifyMenuLabels(labelOptionLogout: string, labelOptionChangePassword: string, labelOptionMobileDevice: string, labelOptionDesktopDevice: string, labelOptionRefresh: string): Promise<void> {
        await expect.soft(this.menuOptionLogout).toHaveText(labelOptionLogout);
        await expect.soft(this.menuOptionChangePassword).toHaveText(labelOptionChangePassword);
        await expect.soft(this.menuOptionMobileDevice).toHaveText(labelOptionMobileDevice);
        await expect.soft(this.menuOptionDesktopDevice).toHaveText(labelOptionDesktopDevice);
        await expect.soft(this.menuOptionRefreshDatabaseConnection).toHaveText(labelOptionRefresh);
    }

    async VeryfiTabName(tabName: string): Promise<void> {
        await expect.soft(this.tabName).toContainText(tabName);
    }
}