import { Locator, Page } from "@playwright/test";

export class GUIComponent {
    readonly gui: Locator;
    readonly testZakladek: Locator;
    readonly testWidocznościTrybEditOrazPustaDefinicja: Locator;
    readonly testEdytowalnościTrybBrowse: Locator;
    readonly testEdytowalnościTrybEditOrazPustaDefinicja: Locator;
    readonly testWidocznościTrybBrowse: Locator;
    readonly testMetodGui: Locator;

    constructor(private page: Page) {
        this.gui = this.page.getByText('GGUI Tests');
        this.testZakladek = this.page.locator('a').filter({ hasText: 'Test Zakładek' });
        this.testWidocznościTrybEditOrazPustaDefinicja = this.page.locator('a').filter({ hasText: 'Test Widoczności - tryb EDIT oraz pusta definicja' });
        this.testEdytowalnościTrybBrowse = this.page.locator('a').filter({ hasText: 'Test Edytowalności - tryb BROWSE' });
        this.testEdytowalnościTrybEditOrazPustaDefinicja = this.page.locator('a').filter({ hasText: 'Test Edytowalności - tryb EDIT oraz pusta definicja' });
        this.testWidocznościTrybBrowse = this.page.locator('a').filter({ hasText: 'Test Widoczności - tryb BROWSE' });
        this.testMetodGui = this.page.locator('a').filter({ hasText: 'Test Metod GUI' });
    }
}
