export class MethodsComponent {
    constructor(private page) {
        const methods = this.page.getByText('MMethods');
        methods.click();
    }
    InitRecalcBrowse = this.page.locator('a').filter({ hasText: 'Methods init/recalc - browse' });
    InitRecalcEdit = this.page.locator('a').filter({ hasText: 'Methods init/recalc - edit' });
}