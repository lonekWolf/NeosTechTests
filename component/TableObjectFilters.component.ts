export class TableObjectFiltersComponent {
    constructor(private page) { }
    tableObjectFilters = this.page.locator('a').filter({ hasText: 'Table Object Filters' });
    checkboxFilter = this.page.locator('a').filter({ hasText: 'Checkbox filter' });
    clearObjectMmethodFilter = this.page.locator('a').filter({ hasText: 'Clear object - method filter' });
    clearObjectConstFilter = this.page.locator('a').filter({ hasText: 'Clear object - const filter' });
    gridFilterFullTable = this.page.locator('a').filter({ hasText: 'Grid Filter - Full Table' });
    gridFilterTableWithHiddenFields = this.page.locator('a').filter({ hasText: 'Grid Filter - Table with hidden fields' });
    objectWithConstFilterConstFilter = this.page.locator('a').filter({ hasText: 'Object with const filter - const filter' });
    objectWithConstFilterClearForm = this.page.locator('a').filter({ hasText: 'Object with const filter - clear form' });
    objectWithMethodFilterMethodFilter = this.page.locator('a').filter({ hasText: 'Object with method filter - method filter' });
    objectWithMethodFilterClearForm = this.page.locator('a').filter({ hasText: 'Object with method filter - clear form' });
}