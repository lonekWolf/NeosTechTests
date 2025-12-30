import { Locator, Page, expect } from "@playwright/test";

export class SetFocusMainFormPage {
    //Przycisk focusujący przycisk: Focus parameter calc
    readonly focusParameterButton: Locator;
    // Przyciski focusujące aliasy
    readonly focusAliasFieldButton: Locator;
    readonly focusAliasParameterButton: Locator;
    // Przyciski focusujące pola modelu danych
    readonly focusEditFieldButton: Locator;
    readonly focusCheckboxFieldButton: Locator;
    readonly focusComboboxFieldButton: Locator;
    readonly focusCalcFieldButton: Locator;
    // Przyciski focusujące parametry
    readonly focusEditParamButton: Locator;
    readonly focusCheckboxParamButton: Locator;
    readonly focusComboboxParamButton: Locator;
    readonly focusCalcParamButton: Locator;
    // Pola modelu danych
    readonly textboxREF: Locator;
    readonly labelFSMALLINT: Locator;
    readonly inputFSMALLINT: Locator;
    readonly textboxFINTEGER: Locator;
    readonly dropdownInputFSTRING: Locator;
    readonly dropdownSelectFSTRING: Locator;
    readonly textboxFSTRING: Locator;
    readonly textboxFNUMERIC: Locator;
    readonly focusReceiverFNUMERIC: Locator;
    readonly textboxEditParam: Locator;
    readonly labelCheckboxParam: Locator;
    readonly inputCheckboxParam: Locator;
    readonly inputComboboxParam: Locator;
    readonly selectComboboxParam: Locator;
    readonly textboxComboboxParam: Locator;
    readonly textboxCalcParam: Locator;
    readonly focusReceiverCalcParam: Locator;

    constructor(private page: Page) {
        //Przycisk focusujący przycisk: Focus parameter calc
        this.focusParameterButton = this.page.locator('.SBUTTON.Action_FocusButton button');
        // Przyciski focusujące aliasy
        this.focusAliasFieldButton = this.page.locator('.SBUTTON.Action_FocusEditFieldAlias button');
        this.focusAliasParameterButton = this.page.locator('.SBUTTON.Action_FocusEditParamAlias button');
        // Przyciski focusujące pola modelu danych
        this.focusEditFieldButton = this.page.locator('.SBUTTON.Action_FocusEditField button');
        this.focusCheckboxFieldButton = this.page.locator('.SBUTTON.Action_FocusCheckboxField button');
        this.focusComboboxFieldButton = this.page.locator('.SBUTTON.Action_FocusComboboxField button');
        this.focusCalcFieldButton = this.page.locator('.SBUTTON.Action_FocusCalcField button');
        // Przyciski focusujące parametry
        this.focusEditParamButton = this.page.locator('.SBUTTON.Action_FocusEditParam button');
        this.focusCheckboxParamButton = this.page.locator('.SBUTTON.Action_FocusCheckboxParam button');
        this.focusComboboxParamButton = this.page.locator('.SBUTTON.Action_FocusComboboxParam button');
        this.focusCalcParamButton = this.page.locator('.SBUTTON.Action_FocusCalcParam button');
        // Pola modelu danych
        this.textboxREF = this.page.locator('.SFIELD.Field_REF input');
        this.labelFSMALLINT = this.page.locator('.SFIELD.Field_FSMALLINT label');
        this.inputFSMALLINT = this.page.locator('.SFIELD.Field_FSMALLINT input');
        this.textboxFINTEGER = this.page.locator('.SFIELD.Field_FINTEGER input');
        this.dropdownInputFSTRING = this.page.locator('.SFIELD.Field_FSTRING .k-dropdown-wrap input');
        this.dropdownSelectFSTRING = this.page.locator('.SFIELD.Field_FSTRING .k-select');
        this.textboxFSTRING = this.page.locator('.SFIELD.Field_FSTRING input');
        this.textboxFNUMERIC = this.page.locator('.SFIELD.Field_FNUMERIC input');
        this.focusReceiverFNUMERIC = this.page.locator(`.SFIELD.Field_FNUMERIC [data-role='numerictextbox']`);
        this.textboxEditParam = this.page.locator('.SFIELD.Field__p1 input');
        this.labelCheckboxParam = this.page.locator('.SFIELD.Field__p3 label');
        this.inputCheckboxParam = this.page.locator('.SFIELD.Field__p3 input');
        this.inputComboboxParam = this.page.locator('.SFIELD.Field__p4 .k-dropdown-wrap input');
        this.selectComboboxParam = this.page.locator('.SFIELD.Field__p4 .k-select');
        this.textboxComboboxParam = this.page.locator('.SFIELD.Field__p4 input');
        this.textboxCalcParam = this.page.locator('.SFIELD.Field__p2 input');
        this.focusReceiverCalcParam = this.page.locator(`.SFIELD.Field__p2 [data-role='numerictextbox']`);
    }

    async ClickButtonAndVerifyFocus(buttonToClick: Locator, elementWithFocus: Locator): Promise<void> {
        await buttonToClick.click();
        await expect(elementWithFocus).toBeFocused();
    }

    async VerifyFocus(elementWithFocus: Locator): Promise<void> {
        await expect(elementWithFocus).toBeFocused();
    }
}