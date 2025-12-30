import { Locator, Page } from "@playwright/test";

export class QueryObjectsFiltersComponent {
    readonly queryObjectsFilters: Locator;
    readonly queryObjectCleanForm: Locator;
    readonly queryObjectMethodFilter: Locator;
    readonly queryObjectConstFilter: Locator;
    readonly queryWithDataFilterCleanForm: Locator;
    readonly queryWithDataFilterMethodFilter: Locator;
    readonly queryWithDataFilterConstFilter: Locator;
    readonly queryWithMethodCleanForm: Locator;
    readonly queryWithMethodConstFilter: Locator;
    readonly queryWithMethodMethodFilter: Locator;

    constructor(private page: Page) {
        this.queryObjectsFilters = this.page.locator('a').filter({ hasText: 'Query Objects Filters' });
        this.queryObjectCleanForm = this.page.locator('a').filter({ hasText: 'Query object - clean form' });
        this.queryObjectMethodFilter = this.page.locator('a').filter({ hasText: 'Query object - method filter' });
        this.queryObjectConstFilter = this.page.locator('a').filter({ hasText: 'Query object - const filter' });
        this.queryWithDataFilterCleanForm = this.page.locator('a').filter({ hasText: 'Query with data filter - clean form' });
        this.queryWithDataFilterMethodFilter = this.page.locator('a').filter({ hasText: 'Query with data filter - method filter' });
        this.queryWithDataFilterConstFilter = this.page.locator('a').filter({ hasText: 'Query with data filter - const filter' });
        this.queryWithMethodCleanForm = this.page.locator('a').filter({ hasText: 'Query with method - clean form' });
        this.queryWithMethodConstFilter = this.page.locator('a').filter({ hasText: 'Query with method - const filter' });
        this.queryWithMethodMethodFilter = this.page.locator('a').filter({ hasText: 'Query with method - method filter' });
    }
}
