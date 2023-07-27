import { Locator, expect } from "@playwright/test";

export class MethodsComponent {
    constructor(private page) { }
    methods = this.page.getByText('MMethods');
    initRecalcBrowse = this.page.locator('a').filter({ hasText: 'Methods init/recalc - browse' });
    initRecalcEdit = this.page.locator('a').filter({ hasText: 'Methods init/recalc - edit' });
}