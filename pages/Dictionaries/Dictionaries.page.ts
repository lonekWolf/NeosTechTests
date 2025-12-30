import { Locator, Page, expect } from "@playwright/test";
import { daysOfTheWeek, months } from "../../test-data/Dictionaries/Dictionaries.Data";
import { FieldsInDictionary } from './FieldsInDictionary';

export class DictionariesPage {
    readonly fieldsInDictionary: FieldsInDictionary;
    // Static Dictionaries 
    readonly fIntegerSelect: Locator;
    readonly fSmallintSelect: Locator;
    readonly staticComboboxSelect: Locator;
    readonly staticDropdownSelect: Locator;
    readonly dictFInteger: Locator;
    readonly dictFSmallint: Locator;
    // Table Dictionaries
    readonly dictFBigintEditFields: Locator;
    readonly dictFIntegerDropdownFields: Locator;
    readonly dictFSmallintComboboxFields: Locator;
    readonly dictFBigintEditFieldsSortByRef: Locator;
    readonly dictFIntegerDropdownSortByRef: Locator;
    readonly dictFSmallintComboboxSortByRef: Locator;
    readonly dictParamEdit: Locator;
    readonly dictParamDropdown: Locator;
    readonly dictParamCombobox: Locator;
    readonly dictParamEditFieldsSortByRef: Locator;
    readonly dictParamComboboxSortByRef: Locator;
    readonly dictParamDropdownSortByRef: Locator;
    // Filtered Dictionaries
    readonly dictFilteredEdit: Locator;
    readonly dictFilteredDropdown: Locator;
    readonly dictFilteredCombobox: Locator;

    constructor(private page: Page) {
        this.fieldsInDictionary = new FieldsInDictionary(this.page);
        // Static Dictionaries 
        this.fIntegerSelect = this.page.locator('.Field_FINTEGER select');
        this.fSmallintSelect = this.page.locator('.Field_FSMALLINT select');
        this.staticComboboxSelect = this.page.locator('.Field__staticdictcombobox select');
        this.staticDropdownSelect = this.page.locator('.Field__staticdictdropdown select');
        this.dictFInteger = this.page.locator('.Field_FINTEGER span').last();
        this.dictFSmallint = this.page.locator('.Field_FSMALLINT span').last();
        // Table Dictionaries
        this.dictFBigintEditFields = this.page.locator('.Field_FBIGINT .innerButton').first();
        this.dictFIntegerDropdownFields = this.page.locator('.Field_FINTEGER span:nth-child(2)').first();
        this.dictFSmallintComboboxFields = this.page.locator('.Field_FSMALLINT .SACTIONCONTAINER > span > span > span').first();
        this.dictFBigintEditFieldsSortByRef = this.page.locator('.Field_FBIGINT .innerButton').last();
        this.dictFIntegerDropdownSortByRef = this.page.locator('.Field_FINTEGER span:nth-child(2)').last();
        this.dictFSmallintComboboxSortByRef = this.page.locator('.Field_FSMALLINT .SACTIONCONTAINER > span > span > span').last();
        this.dictParamEdit = this.page.locator('.Field__tabledictedit .innerButton').first();
        this.dictParamDropdown = this.page.locator('.Field__tabledictdropdown span:nth-child(2)').first();
        this.dictParamCombobox = this.page.locator('.Field__tabledictcombobox .SACTIONCONTAINER > span > span > span').first();
        this.dictParamEditFieldsSortByRef = this.page.locator('.Field__tabledictedit .innerButton').last();
        this.dictParamComboboxSortByRef = this.page.locator('.Field__tabledictcombobox .SACTIONCONTAINER > span > span > span').last();
        this.dictParamDropdownSortByRef = this.page.locator('.Field__tabledictdropdown span:nth-child(2)').last();
        // Filtered Dictionaries
        this.dictFilteredEdit = this.page.locator('.Field__filtereddictedit .innerButton');
        this.dictFilteredDropdown = this.page.locator('.Field__filtereddictdropdown .SACTIONCONTAINER span').first();
        this.dictFilteredCombobox = this.page.locator('.Field__filtereddictcombobox .SACTIONCONTAINER > span > span > span');
    }

    async VerifyFieldsDictionaries(): Promise<void> {
        await expect(this.fIntegerSelect.locator('option[selected="selected"]')).toHaveText('(brak)');
        await expect(this.fSmallintSelect.locator('option[selected="selected"]')).toHaveText('(brak)');
        for (let index = 1; index < 13; index++) {
            await expect.soft(this.fIntegerSelect.locator(`option[value="${index}"]`)).toHaveText(months[index - 1]);
            await expect.soft(this.fSmallintSelect.locator(`option[value="${index}"]`)).toHaveText(months[index - 1]);
        }
    }

    async VerifyParamsDictionaries(): Promise<void> {
        await expect(this.staticComboboxSelect.locator('option[value=""]')).toHaveText('(brak)');
        await expect(this.fSmallintSelect.locator('option[value=""]')).toHaveText('(brak)');
        for (let index = 1; index < 13; index++) {
            await expect.soft(this.staticComboboxSelect.locator(`option[value="${index}"]`)).toHaveText(months[index - 1]);
            await expect.soft(this.fSmallintSelect.locator(`option[value="${index}"]`)).toHaveText(months[index - 1]);
        }
    }

    async VerifyTableRowsWithDictionaryDate(): Promise<void> {
        for (let index = 1; index < 13; index++) {
            await expect(this.page.locator(`tr:nth-child(${index}) td:nth-child(3) span`).first()).toHaveText(months[index - 1]);
            await expect(this.page.locator(`tr:nth-child(${index}) td:nth-child(4) span`).first()).toHaveText(months[index - 1]);
        }
    }
    private async SelectOption(dictionary: Locator, option: string): Promise<void> {
        await dictionary.click();
        await this.page.getByRole('option', { name: option }).click();
    }

    async VerifyChangeOptionsWithTableRows(): Promise<void> {
        for (let index = 1; index < 13; index++) {
            await this.SelectOption(this.dictFInteger, months[index - 1]);
            await this.SelectOption(this.dictFSmallint, months[index - 1]);

            await expect(this.page.locator(`tr:nth-child(1) td:nth-child(3) span`).first()).toHaveText(months[index - 1]);
            await expect(this.page.locator(`tr:nth-child(1) td:nth-child(4) span`).first()).toHaveText(months[index - 1]);
        }
    }

    private async VerifySorting(dictionary: Locator): Promise<void> {
        await dictionary.click();
        // Wait for dropdown menu to be visible
        const dropdownMenu = this.page.locator('.k-state-border-up ul');
        await dropdownMenu.waitFor({ state: 'visible' });
        for (let index = 1; index < 8; index++) {
            await expect.soft(this.page.locator(`.k-state-border-up ul li:nth-child(${index})`).first()).toHaveText(daysOfTheWeek[index - 1], { timeout: 100 });
        }
    }

    async ClickRecordAndVerifyDictionaryChanges(): Promise<void> {
        for (let index = 1; index < 8; index++) {
            await this.page.locator(`tr:nth-child(${index})`).first().click();
            await expect.soft(this.page.locator(`.Field_FBIGINT .SACTIONCONTAINER input`).first()).toHaveText(daysOfTheWeek[index - 1]);
            await expect.soft(this.page.locator(`.Field_FINTEGER .SACTIONCONTAINER span span span`).first()).toHaveText(daysOfTheWeek[index - 1]);
            await expect.soft(this.page.locator(`.Field_FSMALLINT .SACTIONCONTAINER span span input`).first()).toHaveValue(daysOfTheWeek[index - 1]);
            await expect.soft(this.page.locator(`.Field_FBIGINT .SACTIONCONTAINER input`).last()).toHaveText(daysOfTheWeek[index - 1]);
            await expect.soft(this.page.locator(`.Field_FINTEGER .SACTIONCONTAINER span span span`).nth(3)).toHaveText(daysOfTheWeek[index - 1]);
            await expect.soft(this.page.locator(`.Field_FSMALLINT .SACTIONCONTAINER span span input`).last()).toHaveValue(daysOfTheWeek[index - 1]);
        }
    }

    async VerifyDefaultSorting(): Promise<void> {
        await this.fieldsInDictionary.VerifySorting(this.dictFBigintEditFields);
        await this.fieldsInDictionary.VerifySorting(this.dictParamEdit);
        await this.VerifySorting(this.dictFSmallintComboboxFields); // wali błędem
        await this.VerifySorting(this.dictFIntegerDropdownFields);
        await this.VerifySorting(this.dictParamCombobox);// wali błędem
        await this.VerifySorting(this.dictParamDropdown);
    }

    private async VerifyComboboxOptions(dictionary: Locator, firstOption: string, secondOption: string): Promise<void> {
        await dictionary.click();
        await expect(this.page.locator('.k-state-border-up ul li').first()).toHaveText(firstOption);
        await expect(this.page.locator('.k-state-border-up ul li').last()).toHaveText(secondOption);
    }

    private async VerifyDropdownOptions(dictionary: Locator, firstOption: string, secondOption: string): Promise<void> {
        await dictionary.click();
        await expect(this.page.locator('.k-state-border-up ul li:nth-child(2)')).toHaveText(firstOption);
        await expect(this.page.locator('.k-state-border-up ul li:nth-child(3)')).toHaveText(secondOption);
    }

    async VerifyMethodFiltering(): Promise<void> {
        await this.fieldsInDictionary.VerifyFiltering(this.dictFBigintEditFields, 'Sobota', 'Niedziela');
        await this.VerifyDropdownOptions(this.dictFSmallintComboboxFields, 'Poniedziałek', 'Wtorek');
        await this.VerifyComboboxOptions(this.dictFIntegerDropdownFields, 'Czwartek', 'Piątek');
        await this.fieldsInDictionary.VerifyFiltering(this.dictFilteredEdit, 'Sobota', 'Niedziela');
        await this.VerifyDropdownOptions(this.dictFilteredCombobox, 'Poniedziałek', 'Wtorek');
        await this.VerifyComboboxOptions(this.dictFilteredDropdown, 'Czwartek', 'Piątek');
    }

    async VerifyFilteringChangeValues(): Promise<void> {
        await this.page.locator(`tr:nth-child(5)`).first().click();
        await expect.soft(this.page.locator(`.Field_FBIGINT .SACTIONCONTAINER input`)).toHaveText('Piątek');
        await expect.soft(this.page.locator(`.Field_FINTEGER .SACTIONCONTAINER span span span`).first()).toHaveText('Piątek');
        await expect.soft(this.page.locator(`.Field_FSMALLINT .SACTIONCONTAINER span span input`)).toHaveValue('5');
    }

    async VerifySortingByRef(): Promise<void> {
        // Wait for dictionaries to be ready before verifying sorting
        await this.dictParamComboboxSortByRef.waitFor({ state: 'visible' });
        await this.VerifySorting(this.dictParamComboboxSortByRef);
        await this.dictFSmallintComboboxSortByRef.waitFor({ state: 'visible' });
        await this.VerifySorting(this.dictFSmallintComboboxSortByRef);
        await this.dictFIntegerDropdownSortByRef.waitFor({ state: 'visible' });
        await this.VerifySorting(this.dictFIntegerDropdownSortByRef);
        await this.dictParamDropdownSortByRef.waitFor({ state: 'visible' });
        await this.VerifySorting(this.dictParamDropdownSortByRef);
        await this.dictFBigintEditFieldsSortByRef.waitFor({ state: 'visible' });
        await this.fieldsInDictionary.VerifySorting(this.dictFBigintEditFieldsSortByRef);
        await this.dictParamEditFieldsSortByRef.waitFor({ state: 'visible' });
        await this.fieldsInDictionary.VerifySorting(this.dictParamEditFieldsSortByRef);
    }
}