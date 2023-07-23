export class DictionariesComponent {
    constructor(private page) { }
    filteredDictionaries = this.page.locator('a').filter({ hasText: 'Filtered Dictionaries' });
    staticDictionaries = this.page.locator('a').filter({ hasText: 'Static Dictionaries' });
    tableDictionaries = this.page.locator('a').filter({ hasText: 'Table Dictionaries' });
}