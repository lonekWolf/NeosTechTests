export class visibilityActions {
    constructor(private page) { }
    visibilityElements = this.page.getByText('Widoczność elementów');
    visibilityActions = this.page.locator('a').filter({ hasText: /^Widoczność akcji$/ });
    visibilityActionsEmptyField = this.page.locator('a').filter({ hasText: /^Widoczność akcji - pusta dziedzina$/ });
}