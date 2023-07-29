import { Locator, Page, expect } from "@playwright/test";
import { daysOfTheWeek, dictionariesValues, months } from "../../test-data/Dictionaries/Dictionaries.Data";

export class DictionariesPage {
    constructor(private page: Page) { }
    fieldsInDictionary = new FieldsInDictionary(this.page);
    // Static Dictionaries 
    fIntegerSelect = this.page.locator('.Field_FINTEGER select');
    fSmallintSelect = this.page.locator('.Field_FSMALLINT select');
    staticComboboxSelect = this.page.locator('.Field__staticdictcombobox select');
    staticDropdownSelect = this.page.locator('.Field__staticdictdropdown select');
    dictFInteger = this.page.locator('.Field_FINTEGER span').last();
    dictFSmallint = this.page.locator('.Field_FSMALLINT span').last();
    // Table Dictionaries
    dictFBigintEditFields = this.page.locator('.Field_FBIGINT .innerButton').first();
    dictFIntegerDropdownFields = this.page.locator('.Field_FINTEGER span:nth-child(2)').first();
    dictFSmallintComboboxFields = this.page.locator('.Field_FSMALLINT .SACTIONCONTAINER > span > span > span').first();
    dictFBigintEditFieldsSortByRef = this.page.locator('.Field_FBIGINT .innerButton').last();
    dictFIntegerDropdownSortByRef = this.page.locator('.Field_FINTEGER span:nth-child(2)').last();
    dictFSmallintComboboxSortByRef = this.page.locator('.Field_FSMALLINT .SACTIONCONTAINER > span > span > span').last();
    dictParamEdit = this.page.locator('.Field__tabledictedit .innerButton').first();
    dictParamDropdown = this.page.locator('.Field__tabledictdropdown span:nth-child(2)').first();
    dictParamCombobox = this.page.locator('.Field__tabledictcombobox .SACTIONCONTAINER > span > span > span').first();
    dictParamEditFieldsSortByRef = this.page.locator('.Field__tabledictedit .innerButton').last();
    dictParamComboboxSortByRef = this.page.locator('.Field__tabledictcombobox .SACTIONCONTAINER > span > span > span').last();
    dictParamDropdownSortByRef = this.page.locator('.Field__tabledictdropdown span:nth-child(2)').last();
    // Filtered Dictionaries
    dictFilteredEdit = this.page.locator('.Field__filtereddictedit .innerButton');
    dictFilteredDropdown = this.page.locator('.Field__filtereddictdropdown .SACTIONCONTAINER span').first();
    dictFilteredCombobox = this.page.locator('.Field__filtereddictcombobox .SACTIONCONTAINER > span > span > span');

    async VeryfyFideldsDictionaries(): Promise<void> {
        await expect(this.fIntegerSelect.locator('option[selected="selected"]')).toHaveText('(brak)');
        await expect(this.fSmallintSelect.locator('option[selected="selected"]')).toHaveText('(brak)');
        for (let index = 1; index < 13; index++) {
            await expect.soft(this.fIntegerSelect.locator(`option[value="${index}"]`)).toHaveText(months[index - 1]);
            await expect.soft(this.fSmallintSelect.locator(`option[value="${index}"]`)).toHaveText(months[index - 1]);
        }
    }

    async VeryfyParamsDictionaries(): Promise<void> {
        await expect(this.staticComboboxSelect.locator('option[value=""]')).toHaveText('(brak)');
        await expect(this.fSmallintSelect.locator('option[value=""]')).toHaveText('(brak)');
        for (let index = 1; index < 13; index++) {
            await expect.soft(this.staticComboboxSelect.locator(`option[value="${index}"]`)).toHaveText(months[index - 1]);
            await expect.soft(this.fSmallintSelect.locator(`option[value="${index}"]`)).toHaveText(months[index - 1]);
        }
    }

    async VeryfyTableRowsWithDictionaryDate(): Promise<void> {
        for (let index = 1; index < 13; index++) {
            await expect(this.page.locator(`tr:nth-child(${index}) td:nth-child(3) span`).first()).toHaveText(months[index - 1]);
            await expect(this.page.locator(`tr:nth-child(${index}) td:nth-child(4) span`).first()).toHaveText(months[index - 1]);
        }
    }
    private async SelectOption(dictionary: Locator, option: string): Promise<void> {
        await dictionary.click();
        await this.page.getByRole('option', { name: option }).click();
    }

    async VeryfyChangeOptionsWithTableRows(): Promise<void> {
        for (let index = 1; index < 13; index++) {
            await this.SelectOption(this.dictFInteger, months[index - 1]);
            await this.SelectOption(this.dictFSmallint, months[index - 1]);

            await expect(this.page.locator(`tr:nth-child(1) td:nth-child(3) span`).first()).toHaveText(months[index - 1]);
            await expect(this.page.locator(`tr:nth-child(1) td:nth-child(4) span`).first()).toHaveText(months[index - 1]);
        }
    }

    private async VeryfySorting(dictionary: Locator): Promise<void> {
        await dictionary.click();

        await this.page.waitForTimeout(500);
        for (let index = 1; index < 8; index++) {
            await expect.soft(this.page.locator(`.k-state-border-up ul li:nth-child(${index})`).first()).toHaveText(daysOfTheWeek[index - 1], { timeout: 100 });
        }
    }

    async ClickRecordAndVeryfyDictionaryChanges(): Promise<void> {
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

    async VeryfyDefaultSorting(): Promise<void> {
        await this.fieldsInDictionary.VeryfySorting(this.dictFBigintEditFields);
        await this.fieldsInDictionary.VeryfySorting(this.dictParamEdit);
        await this.VeryfySorting(this.dictFSmallintComboboxFields); // wali błędem
        await this.VeryfySorting(this.dictFIntegerDropdownFields);
        await this.VeryfySorting(this.dictParamCombobox);// wali błędem
        await this.VeryfySorting(this.dictParamDropdown);
    }

    private async VeryfyComboboxOptions(dictionary: Locator, firstOption: string, secondOption: string): Promise<void> {
        await dictionary.click();
        await expect(this.page.locator('.k-state-border-up ul li').first()).toHaveText(firstOption);
        await expect(this.page.locator('.k-state-border-up ul li').last()).toHaveText(secondOption);
    }

    private async VeryfyDropdownOptions(dictionary: Locator, firstOption: string, secondOption: string): Promise<void> {
        await dictionary.click();
        await expect(this.page.locator('.k-state-border-up ul li:nth-child(2)')).toHaveText(firstOption);
        await expect(this.page.locator('.k-state-border-up ul li:nth-child(3)')).toHaveText(secondOption);
    }

    async VeryfyMethodFiltering(): Promise<void> {
        await this.fieldsInDictionary.VeryfyFilterng(this.dictFBigintEditFields, 'Sobota', 'Niedziela');
        await this.VeryfyDropdownOptions(this.dictFSmallintComboboxFields, 'Poniedziałek', 'Wtorek');
        await this.VeryfyComboboxOptions(this.dictFIntegerDropdownFields, 'Czwartek', 'Piątek');
        await this.fieldsInDictionary.VeryfyFilterng(this.dictFilteredEdit, 'Sobota', 'Niedziela');
        await this.VeryfyDropdownOptions(this.dictFilteredCombobox, 'Poniedziałek', 'Wtorek');
        await this.VeryfyComboboxOptions(this.dictFilteredDropdown, 'Czwartek', 'Piątek');
    }

    async VerifyFilteringChangeValues(): Promise<void> {
        await this.page.locator(`tr:nth-child(5)`).first().click();
        await expect.soft(this.page.locator(`.Field_FBIGINT .SACTIONCONTAINER input`)).toHaveText('Piątek');
        await expect.soft(this.page.locator(`.Field_FINTEGER .SACTIONCONTAINER span span span`).first()).toHaveText('Piątek');
        await expect.soft(this.page.locator(`.Field_FSMALLINT .SACTIONCONTAINER span span input`)).toHaveValue('5');
    }

    async VerifySortingByRef(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.VeryfySorting(this.dictParamComboboxSortByRef);
        await this.page.waitForTimeout(1000);
        await this.VeryfySorting(this.dictFSmallintComboboxSortByRef);
        await this.page.waitForTimeout(1000);
        await this.VeryfySorting(this.dictFIntegerDropdownSortByRef);
        await this.page.waitForTimeout(1000);
        await this.VeryfySorting(this.dictParamDropdownSortByRef);
        await this.fieldsInDictionary.VeryfySorting(this.dictFBigintEditFieldsSortByRef);
        await this.page.waitForTimeout(1000);
        await this.fieldsInDictionary.VeryfySorting(this.dictParamEditFieldsSortByRef);
    }
}

class FieldsInDictionary {
    constructor(private page: Page) { }
    btnSelect = this.page.locator(`//label[text()='Wybierz']//..`).first();
    btnCloseDictionary = this.page.locator(`.Action_CloseRecord button:nth-child(1)`).first();

    async VeryfySorting(dictionary: Locator): Promise<void> {
        await dictionary.click();
        await this.page.waitForTimeout(1000);
        for (let index = 1; index < 8; index++) {
            await expect.soft(this.page.locator(`.Object_DAYSOFTHEWEEK tr:nth-child(${index}) td:nth-child(2) span:nth-child(1)`).first()).toHaveText(String(index), { timeout: 1000 });
            await expect.soft(this.page.locator(`.Object_DAYSOFTHEWEEK tr:nth-child(${index}) td:nth-child(3) span:nth-child(1)`).first()).toHaveText(daysOfTheWeek[index - 1], { timeout: 1000 });
        }
        await this.btnCloseDictionary.click();
    }

    async VeryfyFilterng(dictionary: Locator, firstRow: string, secondRow: string): Promise<void> {
        await dictionary.click();
        await expect.soft(this.page.locator(`.Object_DAYSOFTHEWEEK tr:nth-child(1) td:nth-child(3) span:nth-child(1)`).first()).toHaveText(firstRow);
        await expect.soft(this.page.locator(`.Object_DAYSOFTHEWEEK tr:nth-child(2) td:nth-child(3) span:nth-child(1)`).first()).toHaveText(secondRow);
        await this.btnCloseDictionary.click();
    }
}