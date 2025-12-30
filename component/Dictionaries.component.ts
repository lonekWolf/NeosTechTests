import { Locator, Page } from "@playwright/test";

export class DictionariesComponent {
    readonly dictionaries: Locator;
    readonly filteredDictionaries: Locator;
    readonly staticDictionaries: Locator;
    readonly tableDictionaries: Locator;

    constructor(private page: Page) {
        this.dictionaries = this.page.getByText('DDictionaries Tests');
        this.filteredDictionaries = this.page.locator('a').filter({ hasText: 'Filtered Dictionaries' });
        this.staticDictionaries = this.page.locator('a').filter({ hasText: 'Static Dictionaries' });
        this.tableDictionaries = this.page.locator('a').filter({ hasText: 'Table Dictionaries' });
    }
}
