import { test } from '@playwright/test';
import { LoginPanelPage } from '../../pages/LoginPanel/LoginPanel.page';
import { PulpitPage } from '../../pages/Pulpit/Pulpit.page';
import { loginData } from '../../test-data/Login/Login.Data';
import { MenuNavigatorComponent } from '../../component/MenuNavigator.component';
import { SetFocusMainFormPage } from '../../pages/SetFocus/SetFocusMainForm.page';

test.describe('SetFocus', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(loginData.user, loginData.password, loginData.department, loginData.language);
        const pulpitPage = new PulpitPage(page);
        await pulpitPage.VeryfiProfileLabel(loginData.profileLabelText);
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.techTest.click();
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
        // Act  SetFocus - Dialogowe Edit
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

        //Sprawdzamy focus na przycisku
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusParameterButton, setFocusMainFormPage.focusCalcParamButton);

        //Sprawdzamy focus na aliasach
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusAliasFieldButton, setFocusMainFormPage.textboxFINTEGER);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusAliasParameterButton, setFocusMainFormPage.textboxEditParam);

        //Sprawdzamy focus pól modelu danych
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusEditFieldButton, setFocusMainFormPage.textboxFINTEGER);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusCheckboxFieldButton, setFocusMainFormPage.inputFSMALLINT);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusComboboxFieldButton, setFocusMainFormPage.dropdownInputFSTRING);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusCalcFieldButton, setFocusMainFormPage.focusReceiverFNUMERIC);

        //Sprawdzamy focus pól parametrów
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusEditParamButton, setFocusMainFormPage.textboxEditParam);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusCheckboxParamButton, setFocusMainFormPage.inputCheckboxParam);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusComboboxParamButton, setFocusMainFormPage.inputComboboxParam);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusCalcParamButton, setFocusMainFormPage.focusReceiverCalcParam);
    });

    test('Main form test', async ({ page }) => {
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.setFocusComponent.mdiEdit.click();

        const setFocusMainFormPage = new SetFocusMainFormPage(page);

        //Sprawdzamy focus na przycisku
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusParameterButton, setFocusMainFormPage.focusCalcParamButton);

        //Sprawdzamy focus na aliasach
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusAliasFieldButton, setFocusMainFormPage.textboxFINTEGER);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusAliasParameterButton, setFocusMainFormPage.textboxEditParam);

        //Sprawdzamy focus pól modelu danych
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusEditFieldButton, setFocusMainFormPage.textboxFINTEGER);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusCheckboxFieldButton, setFocusMainFormPage.inputFSMALLINT);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusComboboxFieldButton, setFocusMainFormPage.dropdownInputFSTRING);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusCalcFieldButton, setFocusMainFormPage.focusReceiverFNUMERIC);

        //Sprawdzamy focus pól parametrów
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusEditParamButton, setFocusMainFormPage.textboxEditParam);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusCheckboxParamButton, setFocusMainFormPage.inputCheckboxParam);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusComboboxParamButton, setFocusMainFormPage.inputComboboxParam);
        await setFocusMainFormPage.ClickButtonAndVeryfyFocus(setFocusMainFormPage.focusCalcParamButton, setFocusMainFormPage.focusReceiverCalcParam);
    });

    // test.only('Nested form test', async ({ page }) => {
    //     const menuNavigatorComponent = new MenuNavigatorComponent(page);
    //     await menuNavigatorComponent.techTestComponent.setFocus.zagniezdzonaForma.click();

    //     const setFocusMainFormPage = new SetFocusMainFormPage(page);

    // });
});