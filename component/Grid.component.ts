import { Locator, Page } from "@playwright/test";

export class GridComponent {
    readonly grid: Locator;
    readonly editRecord: Locator;
    readonly rowSelections: Locator;
    readonly addNewRecord: Locator;
    readonly deleteCurrentRecord: Locator;

    constructor(private page: Page) {
        this.grid = this.page.getByText('GGrid');
        this.editRecord = this.page.locator('a').filter({ hasText: 'Edit record' });
        this.rowSelections = this.page.locator('a').filter({ hasText: 'Row selections' });
        this.addNewRecord = this.page.locator('a').filter({ hasText: 'Add new record' });
        this.deleteCurrentRecord = this.page.locator('a').filter({ hasText: 'Delete current record' });
    }
}
