import { Locator, Page } from "@playwright/test";

export class ViewSettingComponent {
    readonly viewSetting: Locator;
    readonly viewSettingForm: Locator;

    constructor(private page: Page) {
        this.viewSetting = this.page.getByText('UUstawienia widoków');
        this.viewSettingForm = this.page.locator('a').filter({ hasText: /^Ustawienia widoków$/ });
    }
}
