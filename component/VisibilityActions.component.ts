import { Locator, Page } from "@playwright/test";

export class VisibilityActionsComponent {
    readonly visibilityElements: Locator;
    readonly visibilityActions: Locator;
    readonly visibilityActionsEmptyField: Locator;

    constructor(private page: Page) {
        this.visibilityElements = this.page.getByText('Widoczność elementów');
        this.visibilityActions = this.page.locator('a').filter({ hasText: /^Widoczność akcji$/ });
        this.visibilityActionsEmptyField = this.page.locator('a').filter({ hasText: /^Widoczność akcji - pusta dziedzina$/ });
    }
}
