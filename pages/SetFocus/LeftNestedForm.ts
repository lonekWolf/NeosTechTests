import { Locator, Page } from "@playwright/test";

export class LeftNestedForm {
    readonly FieldButtons_Panel_ID = '03a688a69fa94d728c59a01ca47ad2cf';
    readonly Fields_Panel_ID = '311e14fddf2545b7975ece0ed9607022';
    readonly Params_Panel_ID = 'c471cc519567410c8cb9428a3bde0c96';

    // Przycisk focusujący przycisk: Focus field button
    readonly focusUniqueButton: Locator;
    // Przycisk focusujący przycisk: Focus edit field
    readonly focusEditButton: Locator;
    // Przyciski focusujące aliasy
    readonly focusAliasFieldButton: Locator;
    readonly focusAliasParameterButton: Locator;
    // Przyciski focusujące pola modelu danych
    readonly focusEditFieldButton: Locator;
    readonly focusCheckboxFieldButton: Locator;
    readonly focusCalcFieldButton: Locator;
    readonly focusComboboxFieldButton: Locator;
    // Przyciski focusujące pola modelu danych
    readonly textboxFINTEGER: Locator;
    readonly labelFSMALLINT: Locator;
    readonly inputFSMALLINT: Locator;
    readonly focusGetterFSTRING: Locator;
    readonly dropdownSelectFSTRING: Locator;
    readonly textboxFSTRING: Locator;
    readonly nestedTextboxFNUMERIC: Locator;
    readonly focusReceiverFNUMERIC: Locator;
    // Parametry
    readonly textboxEditParam: Locator;
    readonly labelCheckboxParam: Locator;
    readonly inputCheckboxParam: Locator;
    readonly focusGetterComboboxParam: Locator;
    readonly selectComboboxParam: Locator;
    readonly textboxComboboxParam: Locator;
    readonly textboxCalcParam: Locator;
    readonly focusReceiverCalcParam: Locator;

    constructor(private page: Page) {
        // Przycisk focusujący przycisk: Focus field button
        this.focusUniqueButton = this.page.locator(`.SBUTTON.Action_FocusUniqueButton button`);
        // Przycisk focusujący przycisk: Focus edit field
        this.focusEditButton = this.page.locator(`.SBUTTON.Action_FocusFieldButton button`);
        // Przyciski focusujące aliasy
        this.focusAliasFieldButton = this.page.locator(`.SBUTTON.Action_FocusCalcFieldAlias button`);
        this.focusAliasParameterButton = this.page.locator(`.SBUTTON.Action_FocusCalcParamAlias button`);
        // Przyciski focusujące pola modelu danych
        this.focusEditFieldButton = this.page.locator("//*[@id='03a688a69fa94d728c59a01ca47ad2cf']//*[contains(@class,'Action_FocusEditField')]//button");
        this.focusCheckboxFieldButton = this.page.locator("//*[@id='03a688a69fa94d728c59a01ca47ad2cf']//*[contains(@class,'Action_FocusCheckboxField' )]//button");
        this.focusCalcFieldButton = this.page.locator("//*[@id='03a688a69fa94d728c59a01ca47ad2cf']//*[contains(@class,'Action_FocusCalcField' )]//button");
        this.focusComboboxFieldButton = this.page.locator("//*[@id='03a688a69fa94d728c59a01ca47ad2cf']//*[contains(@class,'Action_FocusComboboxField' )]//button");
        // Przyciski focusujące pola modelu danych
        this.textboxFINTEGER = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_FINTEGER' )]//input`);
        this.labelFSMALLINT = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_FSMALLINT' )]//label`);
        this.inputFSMALLINT = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_FSMALLINT' )]//input`);
        this.focusGetterFSTRING = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_FSTRING' )]//*[contains(@class,'k-dropdown-wrap' )]`);
        this.dropdownSelectFSTRING = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_FSTRING' )]//*[contains(@class,'k-select' )]`);
        this.textboxFSTRING = this.page.locator(`//*[@id='${this.Fields_Panel_ID} ']//*[contains(@class,'Field_FSTRING' )]//input`);
        this.nestedTextboxFNUMERIC = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_FNUMERIC' )]//input`);
        this.focusReceiverFNUMERIC = this.page.locator(`//*[@id='${this.Fields_Panel_ID}']//*[contains(@class,'Field_FNUMERIC' )]//*[@data-role='numerictextbox']`);
        // Parametry
        this.textboxEditParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'Field__p1' )]//input`);
        this.labelCheckboxParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'Field__p3' )]//label`);
        this.inputCheckboxParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'Field__p3' )]//input`);
        this.focusGetterComboboxParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'Field__p4' )]//*[contains(@class,'k-dropdown-wrap')]`);
        this.selectComboboxParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'Field__p4' )]//*[contains(@class,'k-select')]`);
        this.textboxComboboxParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'k-input')]`);
        this.textboxCalcParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'Field__p2' )]//input`);
        this.focusReceiverCalcParam = this.page.locator(`//*[@id='${this.Params_Panel_ID}']//*[contains(@class,'Field__p2' )]//*[@data-role='numerictextbox']`);
    }
}

