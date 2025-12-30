import { Locator, Page, expect } from "@playwright/test";

export class PulpitPage {
    readonly profileLabel: Locator;
    readonly tabName: Locator;
    readonly menu: Locator;
    readonly menuOptionLogout: Locator;
    readonly menuOptionChangePassword: Locator;
    readonly menuOptionMobileDevice: Locator;
    readonly menuOptionDesktopDevice: Locator;
    readonly menuOptionRefreshDatabaseConnection: Locator;

    constructor(private page: Page) {
        this.profileLabel = this.page.locator('#mainMenuTitle');
        this.tabName = this.page.locator('div > .formTabContainer');
        this.menu = this.page.locator('#user-menu-right');
        this.menuOptionLogout = this.page.locator('ul#user-menu li:nth-child(3)');
        this.menuOptionChangePassword = this.page.locator('ul#user-menu li:nth-child(4)');
        this.menuOptionMobileDevice = this.page.locator('ul#user-menu li:nth-child(6)');
        this.menuOptionDesktopDevice = this.page.locator('ul#user-menu li:nth-child(7)');
        this.menuOptionRefreshDatabaseConnection = this.page.locator('ul#user-menu li:nth-child(9)');
    }

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

    async VerifyTabName(tabName: string): Promise<void> {
        await expect.soft(this.tabName).toContainText(tabName);
    }
}