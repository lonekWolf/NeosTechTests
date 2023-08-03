export class viewSettingComponent {
    constructor(private page) { }
    viewSetting = this.page.getByText('UUstawienia widoków');
    viewSettingForm = this.page.locator('a').filter({ hasText: /^Ustawienia widoków$/ });
}