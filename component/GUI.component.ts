export class GUIComponent {
    constructor(private page) { }
    gui = this.page.getByText('GGUI Tests')
    testZakladek = this.page.locator('a').filter({ hasText: 'Test Zakładek' });
    testWidocznościTrybEditOrazPustaDefinicja = this.page.locator('a').filter({ hasText: 'Test Widoczności - tryb EDIT oraz pusta definicja' });
    testEdytowalnościTrybBrowse = this.page.locator('a').filter({ hasText: 'Test Edytowalności - tryb BROWSE' });
    testEdytowalnościTrybEditOrazPustaDefinicja = this.page.locator('a').filter({ hasText: 'Test Edytowalności - tryb EDIT oraz pusta definicja' });
    testWidocznościTrybBrowse = this.page.locator('a').filter({ hasText: 'Test Widoczności - tryb BROWSE' });
    testMetodGui = this.page.locator('a').filter({ hasText: 'Test Metod GUI' });
}