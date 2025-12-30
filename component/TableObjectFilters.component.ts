import { Locator, Page } from "@playwright/test";

export class TableObjectFiltersComponent {
    readonly tableObjectFilters: Locator;
    readonly checkboxFilter: Locator;
    readonly clearObjectMethodFilter: Locator;
    readonly clearObjectConstFilter: Locator;
    readonly gridFilterFullTable: Locator;
    readonly gridFilterTableWithHiddenFields: Locator;
    readonly objectWithConstFilterConstFilter: Locator;
    readonly objectWithConstFilterClearForm: Locator;
    readonly objectWithMethodFilterMethodFilter: Locator;
    readonly objectWithMethodFilterClearForm: Locator;

    constructor(private page: Page) {
        this.tableObjectFilters = this.page.locator('a').filter({ hasText: 'Table Object Filters' });
        this.checkboxFilter = this.page.locator('a').filter({ hasText: 'Checkbox filter' });
        this.clearObjectMethodFilter = this.page.locator('a').filter({ hasText: 'Clear object - method filter' });
        this.clearObjectConstFilter = this.page.locator('a').filter({ hasText: 'Clear object - const filter' });
        this.gridFilterFullTable = this.page.locator('a').filter({ hasText: 'Grid Filter - Full Table' });
        this.gridFilterTableWithHiddenFields = this.page.locator('a').filter({ hasText: 'Grid Filter - Table with hidden fields' });
        this.objectWithConstFilterConstFilter = this.page.locator('a').filter({ hasText: 'Object with const filter - const filter' });
        this.objectWithConstFilterClearForm = this.page.locator('a').filter({ hasText: 'Object with const filter - clear form' });
        this.objectWithMethodFilterMethodFilter = this.page.locator('a').filter({ hasText: 'Object with method filter - method filter' });
        this.objectWithMethodFilterClearForm = this.page.locator('a').filter({ hasText: 'Object with method filter - clear form' });
    }
}
