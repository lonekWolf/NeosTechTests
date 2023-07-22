export class GridComponent {
    constructor(private page) {
        const grid = this.page.getByText('GGrid');
        grid.click();
    }
    editRecord = this.page.locator('a').filter({ hasText: 'Edit record' });
    rowSelectionspage = this.page.locator('a').filter({ hasText: 'Row selections' });
    addNewRecord = this.page.locator('a').filter({ hasText: 'Add new record' });
    deleteCurrentRecord = this.page.locator('a').filter({ hasText: 'Delete current record' });
}