export class GridComponent {
    constructor(private page) {
        try {
            this.WaitAndClickGridButton();
        } catch
        {
            console.log('Retry click navigator element');
            this.WaitAndClickGridButton();
        }
    }
    grid = this.page.getByText('GGrid');
    editRecord = this.page.locator('a').filter({ hasText: 'Edit record' });
    rowSelectionspage = this.page.locator('a').filter({ hasText: 'Row selections' });
    addNewRecord = this.page.locator('a').filter({ hasText: 'Add new record' });
    deleteCurrentRecord = this.page.locator('a').filter({ hasText: 'Delete current record' });

    private async WaitAndClickGridButton(): Promise<void> {
        await this.grid.click();
    }
}