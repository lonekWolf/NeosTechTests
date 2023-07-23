export class MethodsComponent {
    constructor(private page) { }
    InitRecalcBrowse = this.page.locator('a').filter({ hasText: 'Methods init/recalc - browse' });
    InitRecalcEdit = this.page.locator('a').filter({ hasText: 'Methods init/recalc - edit' });
}