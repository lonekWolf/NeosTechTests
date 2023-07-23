export class QueryObjectsFiltersComponent {
    constructor(private page) { }
    queryObjectCleanForm = this.page.locator('a').filter({ hasText: 'Query object - clean form' });
    queryObjectMethodFilter = this.page.locator('a').filter({ hasText: 'Query object - method filter' });
    queryObjectConstFilter = this.page.locator('a').filter({ hasText: 'Query object - const filter' });
    queryWithDataFilterCleanForm = this.page.locator('a').filter({ hasText: 'Query with data filter - clean form' });
    queryWithDataFilterMethodFilter = this.page.locator('a').filter({ hasText: 'Query with data filter - method filter' });
    queryWithDataFilterConstFilter = this.page.locator('a').filter({ hasText: 'Query with data filter - const filter' });
    queryWithMethodCleanForm = this.page.locator('a').filter({ hasText: 'Query with method - clean form' });
    queryWithMethodConstFilter = this.page.locator('a').filter({ hasText: 'Query with method - const filter' });
    queryWithMethodMethodFilter = this.page.locator('a').filter({ hasText: 'Query with method - method filter' });
}