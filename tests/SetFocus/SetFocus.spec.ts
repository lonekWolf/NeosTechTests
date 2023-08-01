import { test } from '@playwright/test';
import { LoginPanelPage } from '../../pages/LoginPanel/LoginPanel.page';
import { loginData } from '../../test-data/Login/Login.Data';
import { MenuNavigatorComponent } from '../../component/MenuNavigator.component';
import { SetFocusMainFormPage } from '../../pages/SetFocus/SetFocusMainForm.page';
import { SetFocusNestedFormPage } from '../../pages/SetFocus/SetFocusNestedForm.page';

test.describe('SetFocus', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(loginData.user, loginData.password);
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.ClickMenuAndTechTestAction();
        await menuNavigatorComponent.techTestComponent.setFocusComponent.setFocus.click();
    });

    test('Dialog edit form test', async ({ page }) => {
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.setFocusComponent.dialogoweEdit.click();

        const setFocusMainFormPage = new SetFocusMainFormPage(page);
        // Sprawdzamy focus na przycisku
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusParameterButton, setFocusMainFormPage.focusCalcParamButton);

        // Sprawdzamy focus na aliasach
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusAliasFieldButton, setFocusMainFormPage.textboxFINTEGER);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusAliasParameterButton, setFocusMainFormPage.textboxEditParam);

        // Sprawdzamy focus pól modelu danych
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusEditFieldButton, setFocusMainFormPage.textboxFINTEGER);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusCheckboxFieldButton, setFocusMainFormPage.inputFSMALLINT);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusComboboxFieldButton, setFocusMainFormPage.dropdownInputFSTRING);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusCalcFieldButton, setFocusMainFormPage.focusReceiverFNUMERIC);
        // Sprawdzamy focus pól parametrów
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusEditParamButton, setFocusMainFormPage.textboxEditParam);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusCheckboxParamButton, setFocusMainFormPage.inputCheckboxParam);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusComboboxParamButton, setFocusMainFormPage.inputComboboxParam);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusCalcParamButton, setFocusMainFormPage.focusReceiverCalcParam);
    });

    test('Focus button after opened form', async ({ page }) => {
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.setFocusComponent.focusButton.click();

        const setFocusMainFormPage = new SetFocusMainFormPage(page);
        // Sprawdzamy czy setfocus ustawił się prawidłowo
        await setFocusMainFormPage.VeryfyFocus(setFocusMainFormPage.focusCalcParamButton);
    });

    test('Focus on edit field after open browse form', async ({ page }) => {
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.setFocusComponent.focusField.click();

        const setFocusMainFormPage = new SetFocusMainFormPage(page);
        // Sprawdzamy czy setfocus ustawił się prawidłowo
        await setFocusMainFormPage.VeryfyFocus(setFocusMainFormPage.textboxFINTEGER);
    });

    test('Focus on edit field after open edit form', async ({ page }) => {
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.setFocusComponent.focusFieldEdit.click();

        const setFocusMainFormPage = new SetFocusMainFormPage(page);
        // Sprawdzamy czy setfocus ustawił się prawidłowo
        await setFocusMainFormPage.VeryfyFocus(setFocusMainFormPage.textboxFINTEGER);
    });

    test('Focus on edit parameter after open browse form', async ({ page }) => {
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.setFocusComponent.focusParameter.click();

        const setFocusMainFormPage = new SetFocusMainFormPage(page);
        // Sprawdzamy czy setfocus ustawił się prawidłowo
        await setFocusMainFormPage.VeryfyFocus(setFocusMainFormPage.textboxEditParam);
    });

    test('Focus on edit parameter after open edit form', async ({ page }) => {
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.setFocusComponent.focusParameterEdit.click();

        const setFocusMainFormPage = new SetFocusMainFormPage(page);
        // Sprawdzamy czy setfocus ustawił się prawidłowo
        await setFocusMainFormPage.VeryfyFocus(setFocusMainFormPage.textboxEditParam);
    });

    test('MDI edit form test', async ({ page }) => {
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.setFocusComponent.glowneOkno.click();

        const setFocusMainFormPage = new SetFocusMainFormPage(page);

        //  Sprawdzamy focus na przycisku
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusParameterButton, setFocusMainFormPage.focusCalcParamButton);

        //  Sprawdzamy focus na aliasach
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusAliasFieldButton, setFocusMainFormPage.textboxFINTEGER);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusAliasParameterButton, setFocusMainFormPage.textboxEditParam);

        //  Sprawdzamy focus pól modelu danych
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusEditFieldButton, setFocusMainFormPage.textboxFINTEGER);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusCheckboxFieldButton, setFocusMainFormPage.inputFSMALLINT);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusComboboxFieldButton, setFocusMainFormPage.dropdownInputFSTRING);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusCalcFieldButton, setFocusMainFormPage.focusReceiverFNUMERIC);

        //  Sprawdzamy focus pól parametrów
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusEditParamButton, setFocusMainFormPage.textboxEditParam);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusCheckboxParamButton, setFocusMainFormPage.inputCheckboxParam);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusComboboxParamButton, setFocusMainFormPage.inputComboboxParam);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusCalcParamButton, setFocusMainFormPage.focusReceiverCalcParam);
    });

    test('Main form test', async ({ page }) => {
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.setFocusComponent.mdiEdit.click();

        const setFocusMainFormPage = new SetFocusMainFormPage(page);

        //  Sprawdzamy focus na przycisku
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusParameterButton, setFocusMainFormPage.focusCalcParamButton);

        //  Sprawdzamy focus na aliasach
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusAliasFieldButton, setFocusMainFormPage.textboxFINTEGER);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusAliasParameterButton, setFocusMainFormPage.textboxEditParam);

        //  Sprawdzamy focus pól modelu danych
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusEditFieldButton, setFocusMainFormPage.textboxFINTEGER);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusCheckboxFieldButton, setFocusMainFormPage.inputFSMALLINT);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusComboboxFieldButton, setFocusMainFormPage.dropdownInputFSTRING);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusCalcFieldButton, setFocusMainFormPage.focusReceiverFNUMERIC);

        //  Sprawdzamy focus pól parametrów
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusEditParamButton, setFocusMainFormPage.textboxEditParam);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusCheckboxParamButton, setFocusMainFormPage.inputCheckboxParam);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusComboboxParamButton, setFocusMainFormPage.inputComboboxParam);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusCalcParamButton, setFocusMainFormPage.focusReceiverCalcParam);
    });

    test('Nested form test', async ({ page }) => {
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.setFocusComponent.zagniezdzonaForma.click();

        const setFocusNestedForm = new SetFocusNestedFormPage(page);

        //  Sprawdzamy focus lewej formy browse							
        //  Sprawdzamy focus na unikalnym buttonie
        await setFocusNestedForm.ClickButtonAndVeryfyFocus(setFocusNestedForm.leftForm.focusUniqueButton, setFocusNestedForm.leftForm.focusEditButton);
        //  Sprawdzamy focus na aliasach lewej formy
        await setFocusNestedForm.ClickButtonAndVeryfyFocus(setFocusNestedForm.leftForm.focusAliasFieldButton, setFocusNestedForm.leftForm.focusReceiverFNUMERIC);
        await setFocusNestedForm.ClickButtonAndVeryfyFocus(setFocusNestedForm.leftForm.focusAliasParameterButton, setFocusNestedForm.leftForm.focusReceiverCalcParam);
        //  Przycisk focusujący przycisk: Focus edit field
        await setFocusNestedForm.ClickButtonAndVeryfyFocus(setFocusNestedForm.leftForm.focusEditButton, setFocusNestedForm.leftForm.focusEditFieldButton);

        /* Nie działa
        await setFocusNestedForm.ClickButtonAndVeryfyFocus(setFocusNestedForm.leftForm.focusEditFieldButton, setFocusNestedForm.leftForm.textboxFINTEGER);
        await setFocusNestedForm.ClickButtonAndVeryfyFocus(setFocusNestedForm.leftForm.focusCheckboxFieldButton, setFocusNestedForm.leftForm.labelFSMALLINT); 
        await setFocusNestedForm.ClickButtonAndVeryfyFocus(setFocusNestedForm.leftForm.focusCalcFieldButton, setFocusNestedForm.leftForm.nestedTextboxFNUMERIC);
        await setFocusNestedForm.ClickButtonAndVeryfyFocus(setFocusNestedForm.leftForm.focusComboboxFieldButton, setFocusNestedForm.leftForm.nestedTextboxFNUMERIC);*/

        //  Sprawdzamy focus prawej zagnieżdżonej formy browse
        //  Sprawdzamy focus na unikalnym buttonie
        await setFocusNestedForm.ClickButtonAndVeryfyFocus(setFocusNestedForm.rightForm.focusNestedParameterButton, setFocusNestedForm.rightForm.focusNestedCalcParamButton);
        //  Sprawdzamy focus na aliasach prawej formy						
        await setFocusNestedForm.ClickButtonAndVeryfyFocus(setFocusNestedForm.rightForm.focusNestedAliasFieldButton, setFocusNestedForm.rightForm.nestedTextboxFINTEGER);
        await setFocusNestedForm.ClickButtonAndVeryfyFocus(setFocusNestedForm.rightForm.focusNestedAliasParameterButton, setFocusNestedForm.rightForm.nestedTextboxEditParam);
        await setFocusNestedForm.ClickButtonAndVeryfyFocus(setFocusNestedForm.rightForm.focusNestedEditFieldButton, setFocusNestedForm.rightForm.nestedTextboxFINTEGER);

        /* Nie działa 
        await setFocusNestedForm.ClickButtonAndVeryfyFocus(setFocusNestedForm.rightForm.focusNestedCheckboxFieldButton, setFocusNestedForm.rightForm.nestedLabelFSMALLINT);
        await setFocusNestedForm.ClickButtonAndVeryfyFocus(setFocusNestedForm.rightForm.focusNestedComboboxFieldButton, setFocusNestedForm.rightForm.nestedDropdownSelectFSTRING);
        await setFocusNestedForm.ClickButtonAndVeryfyFocus(setFocusNestedForm.rightForm.focusNestedCalcParamButton, setFocusNestedForm.rightForm.nestedTextboxFNUMERIC);*/
    });
});