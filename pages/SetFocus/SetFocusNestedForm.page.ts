import { Locator, Page, expect } from "@playwright/test";

export class SetFocusNestedFormPage {
    constructor(private page: Page) { }

    leftForm = new LeftNestedForm(this.page);
    rightForm = new RightNestedForm(this.page);

    async ClickButtonAndVeryfyFocus(butttonToClick: Locator, elementWithFocus: Locator): Promise<void> {
        await butttonToClick.click();
        await expect.soft(elementWithFocus).toBeFocused();
    }
}

class LeftNestedForm {
    constructor(private page: Page) { }
    readonly FieldButtons_Panel_ID = '03a688a69fa94d728c59a01ca47ad2cf';
    readonly Fields_Panel_ID = '311e14fddf2545b7975ece0ed9607022';
    readonly Params_Panel_ID = 'c471cc519567410c8cb9428a3bde0c96';

    // Przycisk focusujący przycisk: Focus field button
    focusUniqueButton = this.page.locator(`.SBUTTON.Action_FocusUniqueButton button`);
    // Przycisk focusujący przycisk: Focus edit field
    focusEditButton = this.page.locator(`.SBUTTON.Action_FocusFieldButton button`);
    // Przyciski focusujące aliasy
    focusAliasFieldButton = this.page.locator(`.SBUTTON.Action_FocusCalcFieldAlias button`);
    focusAliasParameterButton = this.page.locator(`.SBUTTON.Action_FocusCalcParamAlias button`);
    // Przyciski focusujące pola modelu danych
    focusEditFieldButton = this.page.locator("//*[@id='03a688a69fa94d728c59a01ca47ad2cf']//*[contains(@class,'Action_FocusEditField')]//button");
    focusCheckboxFieldButton = this.page.locator("//*[@id='03a688a69fa94d728c59a01ca47ad2cf']//*[contains(@class,'Action_FocusCheckboxField' )]//button");
    focusCalcFieldButton = this.page.locator("//*[@id='03a688a69fa94d728c59a01ca47ad2cf']//*[contains(@class,'Action_FocusCalcField' )]//button");
    focusComboboxFieldButton = this.page.locator("//*[@id='03a688a69fa94d728c59a01ca47ad2cf']//*[contains(@class,'Action_FocusComboboxField' )]//button");
    // Przyciski focusujące pola modelu danych
    textboxFINTEGER = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_FINTEGER' )]//input`);
    labelFSMALLINT = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_FSMALLINT' )]//label`);
    inputFSMALLINT = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_FSMALLINT' )]//input`);
    focusGetterFSTRING = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_FSTRING' )]//*[contains(@class,'k-dropdown-wrap' )]`);
    dropdownSelectFSTRING = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_FSTRING' )]//*[contains(@class,'k-select' )]`);
    textboxFSTRING = this.page.locator(`//*[@id='${this.Fields_Panel_ID} ']//*[contains(@class,'Field_FSTRING' )]//input`);
    nestedTextboxFNUMERIC = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_FNUMERIC' )]//input`);
    focusReceiverFNUMERIC = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_FNUMERIC' )]//*[@data-role='numerictextbox']`);
    // Parametry
    textboxEditParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'Field__p1' )]//input`);
    labelCheckboxParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'Field__p3' )]//label`);
    inputCheckboxParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'Field__p3' )]//input`);
    focusGetterComboboxParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'Field__p4' )]//*[contains(@class,'k-dropdown-wrap')]`);
    selectComboboxParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'Field__p4' )]//*[contains(@class,'k-select')]`);
    textboxComboboxParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'k-input')]`);
    textboxCalcParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'Field__p2' )]//input`);
    focusReceiverCalcParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'Field__p2' )]//*[@data-role='numerictextbox']`);
}

class RightNestedForm {
    constructor(private page: Page) { }
    readonly FieldButtons_Panel_ID = "ef54f8888c2544c99df78141bb8d3ac9cf44";
    readonly ParamButtons_Panel_ID = "12fc4cb3c2df47b892e9fd1bac344ef8cf44";
    readonly Fields_Panel_ID = "aa38da5ca6b340728e9e087ad190ac21cf44";
    readonly Params_Panel_ID = "a10012cfeb1e491c959a743bf02aea9ecf44";

    // Przycisk focusujący przycisk: Focus parameter calc
    focusNestedParameterButton = this.page.locator(`.SBUTTON.Action_FocusButton button`);
    // Przyciski focusujące aliasy
    focusNestedAliasFieldButton = this.page.locator(`.SBUTTON.Action_FocusEditFieldAlias button`);
    focusNestedAliasParameterButton = this.page.locator(`.SBUTTON.Action_FocusEditParamAlias button`);
    // Przyciski focusujące pola modelu danych
    focusNestedEditFieldButton = this.page.locator(`//*[@id='${this.FieldButtons_Panel_ID}']//*[contains(@class,'Action_FocusEditField' )]//button`);
    focusNestedCheckboxFieldButton = this.page.locator(`//*[@id='${this.FieldButtons_Panel_ID}']//*[contains(@class,'Action_FocusCheckboxField' )]//button`);
    focusNestedComboboxFieldButton = this.page.locator(`//*[@id='${this.FieldButtons_Panel_ID}']//*[contains(@class,'Action_FocusComboboxField' )]//button`);
    focusNestedCalcFieldButton = this.page.locator(`//*[@id='${this.FieldButtons_Panel_ID}']//*[contains(@class,'Action_FocusCalcField' )]//button`);
    // Przyciski focusujące parametry
    focusNestedEditParamButton = this.page.locator(`//*[@id='${this.ParamButtons_Panel_ID}']//*[contains(@class,'Action_FocusEditParam' )]//button`);
    focusNestedCheckboxParamButton = this.page.locator(`//*[@id='${this.ParamButtons_Panel_ID}']//*[contains(@class,'Action_FocusCheckboxParam' )]//button`);
    focusNestedComboboxParamButton = this.page.locator(`//*[@id='${this.ParamButtons_Panel_ID}']//*[contains(@class,'FocusComboboxParam' )]//button`);
    focusNestedCalcParamButton = this.page.locator(`//*[@id='${this.ParamButtons_Panel_ID}']//*[contains(@class,'Action_FocusCalcParam' )]//button`);
    // Pola modelu danych
    nestedTextboxREF = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_REF' )]//input`);
    nestedLabelFSMALLINT = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_FSMALLINT' )]//label`);
    nestedInputFSMALLINT = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_FSMALLINT' )]//input`);
    nestedTextboxFINTEGER = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_FINTEGER' )]//input`);
    nestedFocusGetterFSTRING = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_FSTRING' )]//*[contains(@class,'k-dropdown-wrap' )]`);
    nestedDropdownSelectFSTRING = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_FSTRING' )]//*[contains(@class,'k-select' )]`);
    nestedTextboxFSTRING = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_FSTRING' )]//input`);
    nestedTextboxFNUMERIC = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_FNUMERIC' )]//input`);
    // Parametry
    nestedTextboxEditParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'Field__p1' )]//input`);
    nestedLabelCheckboxParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'Field__p3' )]//label`);
    nestedInputCheckboxParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'Field__p3' )]//input`);
    nestedFocusGetterComboboxParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'Field__p4' )]//*[contains(@class,'k-dropdown-wrap')]`);
    nestedSelectComboboxParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'Field__p4' )]//*[contains(@class,'k-select')]`);
    nestedTextboxComboboxParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'Field__p4' )]//input`);
    nestedTextboxCalcParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'Field__p2' )]//input`);
}