import { Locator, Page, expect } from "@playwright/test";

export class SetFocusMainFormPage {
    constructor(private page: Page) { }

    //Przycisk focusujący przycisk: Focus parameter calc
    focusParameterButton = this.page.locator('.SBUTTON.Action_FocusButton button');
    // Przyciski focusujące aliasy
    focusAliasFieldButton = this.page.locator('.SBUTTON.Action_FocusEditFieldAlias button');
    focusAliasParameterButton = this.page.locator('.SBUTTON.Action_FocusEditParamAlias button');
    // Przyciski focusujące pola meodelu danych
    focusEditFieldButton = this.page.locator('.SBUTTON.Action_FocusEditField button');
    focusCheckboxFieldButton = this.page.locator('.SBUTTON.Action_FocusCheckboxField button');
    focusComboboxFieldButton = this.page.locator('.SBUTTON.Action_FocusComboboxField button');
    focusCalcFieldButton = this.page.locator('.SBUTTON.Action_FocusCalcField button');
    // Przyciski focusujące parametry
    focusEditParamButton = this.page.locator('.SBUTTON.Action_FocusEditParam button');
    focusCheckboxParamButton = this.page.locator('.SBUTTON.Action_FocusCheckboxParam button');
    focusComboboxParamButton = this.page.locator('.SBUTTON.Action_FocusComboboxParam button');
    focusCalcParamButton = this.page.locator('.SBUTTON.Action_FocusCalcParam button');
    // Pola modelu danych
    textboxREF = this.page.locator('.SFIELD.Field_REF input');
    labelFSMALLINT = this.page.locator('.SFIELD.Field_FSMALLINT label');
    inputFSMALLINT = this.page.locator('.SFIELD.Field_FSMALLINT input');
    textboxFINTEGER = this.page.locator('.SFIELD.Field_FINTEGER input');
    dropdownInputFSTRING = this.page.locator('.SFIELD.Field_FSTRING .k-dropdown-wrap input');
    dropdownSelectFSTRING = this.page.locator('.SFIELD.Field_FSTRING .k-select');
    textboxFSTRING = this.page.locator('.SFIELD.Field_FSTRING input');
    textboxFNUMERIC = this.page.locator('.SFIELD.Field_FNUMERIC input');
    focusReceiverFNUMERIC = this.page.locator(`.SFIELD.Field_FNUMERIC [data-role='numerictextbox']`);
    textboxEditParam = this.page.locator('.SFIELD.Field__p1 input');
    labelCheckboxParam = this.page.locator('.SFIELD.Field__p3 label');
    inputCheckboxParam = this.page.locator('.SFIELD.Field__p3 input');
    inputComboboxParam = this.page.locator('.SFIELD.Field__p4 .k-dropdown-wrap input');
    selectComboboxParam = this.page.locator('.SFIELD.Field__p4 .k-select');
    textboxComboboxParam = this.page.locator('.SFIELD.Field__p4 input');
    textboxCalcParam = this.page.locator('.SFIELD.Field__p2 input');
    focusReceiverCalcParam = this.page.locator(`.SFIELD.Field__p2 [data-role='numerictextbox']`);

    async ClickButtonAndVeryfyFocus(butttonToClick: Locator, elementWithFocus: Locator): Promise<void> {
        await butttonToClick.click();
        await expect(elementWithFocus).toBeFocused();
    }

    async VeryfyFocus(elementWithFocus: Locator): Promise<void> {
        await expect(elementWithFocus).toBeFocused();
    }
}