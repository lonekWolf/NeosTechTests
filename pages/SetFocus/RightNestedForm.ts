import { Locator, Page } from "@playwright/test";

export class RightNestedForm {
    readonly FieldButtons_Panel_ID = "ef54f8888c2544c99df78141bb8d3ac9cf44";
    readonly ParamButtons_Panel_ID = "12fc4cb3c2df47b892e9fd1bac344ef8cf44";
    readonly Fields_Panel_ID = "aa38da5ca6b340728e9e087ad190ac21cf44";
    readonly Params_Panel_ID = "a10012cfeb1e491c959a743bf02aea9ecf44";

    // Przycisk focusujący przycisk: Focus parameter calc
    readonly focusNestedParameterButton: Locator;
    // Przyciski focusujące aliasy
    readonly focusNestedAliasFieldButton: Locator;
    readonly focusNestedAliasParameterButton: Locator;
    // Przyciski focusujące pola modelu danych
    readonly focusNestedEditFieldButton: Locator;
    readonly focusNestedCheckboxFieldButton: Locator;
    readonly focusNestedComboboxFieldButton: Locator;
    readonly focusNestedCalcFieldButton: Locator;
    // Przyciski focusujące parametry
    readonly focusNestedEditParamButton: Locator;
    readonly focusNestedCheckboxParamButton: Locator;
    readonly focusNestedComboboxParamButton: Locator;
    readonly focusNestedCalcParamButton: Locator;
    // Pola modelu danych
    readonly nestedTextboxREF: Locator;
    readonly nestedLabelFSMALLINT: Locator;
    readonly nestedInputFSMALLINT: Locator;
    readonly nestedTextboxFINTEGER: Locator;
    readonly nestedFocusGetterFSTRING: Locator;
    readonly nestedDropdownSelectFSTRING: Locator;
    readonly nestedTextboxFSTRING: Locator;
    readonly nestedTextboxFNUMERIC: Locator;
    // Parametry
    readonly nestedTextboxEditParam: Locator;
    readonly nestedLabelCheckboxParam: Locator;
    readonly nestedInputCheckboxParam: Locator;
    readonly nestedFocusGetterComboboxParam: Locator;
    readonly nestedSelectComboboxParam: Locator;
    readonly nestedTextboxComboboxParam: Locator;
    readonly nestedTextboxCalcParam: Locator;

    constructor(private page: Page) {
        // Przycisk focusujący przycisk: Focus parameter calc
        this.focusNestedParameterButton = this.page.locator(`.SBUTTON.Action_FocusButton button`);
        // Przyciski focusujące aliasy
        this.focusNestedAliasFieldButton = this.page.locator(`.SBUTTON.Action_FocusEditFieldAlias button`);
        this.focusNestedAliasParameterButton = this.page.locator(`.SBUTTON.Action_FocusEditParamAlias button`);
        // Przyciski focusujące pola modelu danych
        this.focusNestedEditFieldButton = this.page.locator(`//*[@id='${this.FieldButtons_Panel_ID}']//*[contains(@class,'Action_FocusEditField' )]//button`);
        this.focusNestedCheckboxFieldButton = this.page.locator(`//*[@id='${this.FieldButtons_Panel_ID}']//*[contains(@class,'Action_FocusCheckboxField' )]//button`);
        this.focusNestedComboboxFieldButton = this.page.locator(`//*[@id='${this.FieldButtons_Panel_ID}']//*[contains(@class,'Action_FocusComboboxField' )]//button`);
        this.focusNestedCalcFieldButton = this.page.locator(`//*[@id='${this.FieldButtons_Panel_ID}']//*[contains(@class,'Action_FocusCalcField' )]//button`);
        // Przyciski focusujące parametry
        this.focusNestedEditParamButton = this.page.locator(`//*[@id='${this.ParamButtons_Panel_ID}']//*[contains(@class,'Action_FocusEditParam' )]//button`);
        this.focusNestedCheckboxParamButton = this.page.locator(`//*[@id='${this.ParamButtons_Panel_ID}']//*[contains(@class,'Action_FocusCheckboxParam' )]//button`);
        this.focusNestedComboboxParamButton = this.page.locator(`//*[@id='${this.ParamButtons_Panel_ID}']//*[contains(@class,'FocusComboboxParam' )]//button`);
        this.focusNestedCalcParamButton = this.page.locator(`//*[@id='${this.ParamButtons_Panel_ID}']//*[contains(@class,'Action_FocusCalcParam' )]//button`);
        // Pola modelu danych
        this.nestedTextboxREF = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_REF' )]//input`);
        this.nestedLabelFSMALLINT = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_FSMALLINT' )]//label`);
        this.nestedInputFSMALLINT = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_FSMALLINT' )]//input`);
        this.nestedTextboxFINTEGER = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_FINTEGER' )]//input`);
        this.nestedFocusGetterFSTRING = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_FSTRING' )]//*[contains(@class,'k-dropdown-wrap' )]`);
        this.nestedDropdownSelectFSTRING = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_FSTRING' )]//*[contains(@class,'k-select' )]`);
        this.nestedTextboxFSTRING = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_FSTRING' )]//input`);
        this.nestedTextboxFNUMERIC = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_FNUMERIC' )]//input`);
        // Parametry
        this.nestedTextboxEditParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'Field__p1' )]//input`);
        this.nestedLabelCheckboxParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'Field__p3' )]//label`);
        this.nestedInputCheckboxParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'Field__p3' )]//input`);
        this.nestedFocusGetterComboboxParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'Field__p4' )]//*[contains(@class,'k-dropdown-wrap')]`);
        this.nestedSelectComboboxParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'Field__p4' )]//*[contains(@class,'k-select')]`);
        this.nestedTextboxComboboxParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'Field__p4' )]//input`);
        this.nestedTextboxCalcParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'Field__p2' )]//input`);
    }
}

