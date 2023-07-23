export class GridComponent {
    constructor(private page) { }
    grid = this.page.getByText('GGrid');
    editRecord = this.page.locator('a').filter({ hasText: 'Edit record' });
    rowSelections = this.page.locator('a').filter({ hasText: 'Row selections' });
    addNewRecord = this.page.locator('a').filter({ hasText: 'Add new record' });
    deleteCurrentRecord = this.page.locator('a').filter({ hasText: 'Delete current record' });
}