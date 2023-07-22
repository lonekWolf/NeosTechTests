export class DictionariesComponent {
    constructor(private page) {
        const dictionaries = this.page.getByText('DDictionaries Tests');
        dictionaries.click();
    }
    filteredDictionaries = this.page.locator('a').filter({ hasText: 'Filtered Dictionaries' });
    staticDictionaries = this.page.locator('a').filter({ hasText: 'Static Dictionaries' });
    tableDictionaries = this.page.locator('a').filter({ hasText: 'Table Dictionaries' });
}