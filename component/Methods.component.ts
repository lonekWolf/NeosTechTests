import { Locator, Page } from "@playwright/test";

export class MethodsComponent {
    readonly methods: Locator;
    readonly initRecalcBrowse: Locator;
    readonly initRecalcEdit: Locator;

    constructor(private page: Page) {
        this.methods = this.page.getByText('MMethods');
        this.initRecalcBrowse = this.page.locator('a').filter({ hasText: 'Methods init/recalc - browse' });
        this.initRecalcEdit = this.page.locator('a').filter({ hasText: 'Methods init/recalc - edit' });
    }
}
