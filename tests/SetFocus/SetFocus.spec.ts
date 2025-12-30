import { test } from '@playwright/test';
import { LoginPanelPage } from 'pages/LoginPanel/LoginPanel.page';
import { LoginData } from 'test-data/Login/Login.Data';
import { MenuNavigatorComponent } from 'component/MenuNavigator.component';
import { SetFocusMainFormPage } from 'pages/SetFocus/SetFocusMainForm.page';
import { SetFocusNestedFormPage } from 'pages/SetFocus/SetFocusNestedForm.page';

test.describe('SetFocus', () => {
    let menuNavigatorComponent: MenuNavigatorComponent;

    test.beforeEach(async ({ page }) => {
        // Arrange
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(LoginData.user, LoginData.password);
        menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.ClickMenuAndTechTestAction();
        await menuNavigatorComponent.techTestComponent.setFocusComponent.setFocus.click();
    });

    test('Dialog edit form test', async ({ page }) => {
        // Arrange - navigation is done in beforeEach
        // Act
        await menuNavigatorComponent.techTestComponent.setFocusComponent.dialogoweEdit.click();
        const setFocusMainFormPage = new SetFocusMainFormPage(page);
        // Assert - Sprawdzamy focus na przycisku
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusParameterButton, setFocusMainFormPage.focusCalcParamButton);
        // Assert - Sprawdzamy focus na aliasach
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusAliasFieldButton, setFocusMainFormPage.textboxFINTEGER);
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusAliasParameterButton, setFocusMainFormPage.textboxEditParam);
        // Assert - Sprawdzamy focus pól modelu danych
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusEditFieldButton, setFocusMainFormPage.textboxFINTEGER);
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusCheckboxFieldButton, setFocusMainFormPage.inputFSMALLINT);
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusComboboxFieldButton, setFocusMainFormPage.dropdownInputFSTRING);
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusCalcFieldButton, setFocusMainFormPage.focusReceiverFNUMERIC);
        // Assert - Sprawdzamy focus pól parametrów
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusEditParamButton, setFocusMainFormPage.textboxEditParam);
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusCheckboxParamButton, setFocusMainFormPage.inputCheckboxParam);
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusComboboxParamButton, setFocusMainFormPage.inputComboboxParam);
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusCalcParamButton, setFocusMainFormPage.focusReceiverCalcParam);
    });

    test('Focus button after opened form', async ({ page }) => {
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.setFocusComponent.focusButton.click();

        const setFocusMainFormPage = new SetFocusMainFormPage(page);
        // Sprawdzamy czy setfocus ustawił się prawidłowo
        await setFocusMainFormPage.VerifyFocus(setFocusMainFormPage.focusCalcParamButton);
    });

    test('Focus on edit field after open browse form', async ({ page }) => {
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.setFocusComponent.focusField.click();

        const setFocusMainFormPage = new SetFocusMainFormPage(page);
        // Sprawdzamy czy setfocus ustawił się prawidłowo
        await setFocusMainFormPage.VerifyFocus(setFocusMainFormPage.textboxFINTEGER);
    });

    test('Focus on edit field after open edit form', async ({ page }) => {
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.setFocusComponent.focusFieldEdit.click();

        const setFocusMainFormPage = new SetFocusMainFormPage(page);
        // Sprawdzamy czy setfocus ustawił się prawidłowo
        await setFocusMainFormPage.VerifyFocus(setFocusMainFormPage.textboxFINTEGER);
    });

    test('Focus on edit parameter after open browse form', async ({ page }) => {
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.setFocusComponent.focusParameter.click();

        const setFocusMainFormPage = new SetFocusMainFormPage(page);
        // Sprawdzamy czy setfocus ustawił się prawidłowo
        await setFocusMainFormPage.VerifyFocus(setFocusMainFormPage.textboxEditParam);
    });

    test('Focus on edit parameter after open edit form', async ({ page }) => {
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.setFocusComponent.focusParameterEdit.click();

        const setFocusMainFormPage = new SetFocusMainFormPage(page);
        // Sprawdzamy czy setfocus ustawił się prawidłowo
        await setFocusMainFormPage.VerifyFocus(setFocusMainFormPage.textboxEditParam);
    });

    test('MDI edit form test', async ({ page }) => {
        // Arrange - navigation is done in beforeEach
        // Act
        await menuNavigatorComponent.techTestComponent.setFocusComponent.glowneOkno.click();
        const setFocusMainFormPage = new SetFocusMainFormPage(page);
        // Assert - Sprawdzamy focus na przycisku
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusParameterButton, setFocusMainFormPage.focusCalcParamButton);
        // Assert - Sprawdzamy focus na aliasach
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusAliasFieldButton, setFocusMainFormPage.textboxFINTEGER);
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusAliasParameterButton, setFocusMainFormPage.textboxEditParam);
        // Assert - Sprawdzamy focus pól modelu danych
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusEditFieldButton, setFocusMainFormPage.textboxFINTEGER);
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusCheckboxFieldButton, setFocusMainFormPage.inputFSMALLINT);
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusComboboxFieldButton, setFocusMainFormPage.dropdownInputFSTRING);
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusCalcFieldButton, setFocusMainFormPage.focusReceiverFNUMERIC);
        // Assert - Sprawdzamy focus pól parametrów
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusEditParamButton, setFocusMainFormPage.textboxEditParam);
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusCheckboxParamButton, setFocusMainFormPage.inputCheckboxParam);
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusComboboxParamButton, setFocusMainFormPage.inputComboboxParam);
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusCalcParamButton, setFocusMainFormPage.focusReceiverCalcParam);
    });

    test('Main form test', async ({ page }) => {
        // Arrange - navigation is done in beforeEach
        // Act
        await menuNavigatorComponent.techTestComponent.setFocusComponent.mdiEdit.click();
        const setFocusMainFormPage = new SetFocusMainFormPage(page);
        // Assert - Sprawdzamy focus na przycisku
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusParameterButton, setFocusMainFormPage.focusCalcParamButton);
        // Assert - Sprawdzamy focus na aliasach
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusAliasFieldButton, setFocusMainFormPage.textboxFINTEGER);
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusAliasParameterButton, setFocusMainFormPage.textboxEditParam);
        // Assert - Sprawdzamy focus pól modelu danych
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusEditFieldButton, setFocusMainFormPage.textboxFINTEGER);
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusCheckboxFieldButton, setFocusMainFormPage.inputFSMALLINT);
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusComboboxFieldButton, setFocusMainFormPage.dropdownInputFSTRING);
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusCalcFieldButton, setFocusMainFormPage.focusReceiverFNUMERIC);
        // Assert - Sprawdzamy focus pól parametrów
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusEditParamButton, setFocusMainFormPage.textboxEditParam);
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusCheckboxParamButton, setFocusMainFormPage.inputCheckboxParam);
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusComboboxParamButton, setFocusMainFormPage.inputComboboxParam);
        await setFocusMainFormPage.ClickButtonAndVerifyFocus(setFocusMainFormPage.focusCalcParamButton, setFocusMainFormPage.focusReceiverCalcParam);
    });

    test('Nested form test', async ({ page }) => {
        // Arrange - navigation is done in beforeEach
        // Act
        await menuNavigatorComponent.techTestComponent.setFocusComponent.zagniezdzonaForma.click();
        const setFocusNestedForm = new SetFocusNestedFormPage(page);
        // Assert - Sprawdzamy focus lewej formy browse
        // Assert - Sprawdzamy focus na unikalnym buttonie
        await setFocusNestedForm.ClickButtonAndVerifyFocus(setFocusNestedForm.leftForm.focusUniqueButton, setFocusNestedForm.leftForm.focusEditButton);
        // Assert - Sprawdzamy focus na aliasach lewej formy
        await setFocusNestedForm.ClickButtonAndVerifyFocus(setFocusNestedForm.leftForm.focusAliasFieldButton, setFocusNestedForm.leftForm.focusReceiverFNUMERIC);
        await setFocusNestedForm.ClickButtonAndVerifyFocus(setFocusNestedForm.leftForm.focusAliasParameterButton, setFocusNestedForm.leftForm.focusReceiverCalcParam);
        // Assert - Przycisk focusujący przycisk: Focus edit field
        await setFocusNestedForm.ClickButtonAndVerifyFocus(setFocusNestedForm.leftForm.focusEditButton, setFocusNestedForm.leftForm.focusEditFieldButton);
        // Assert - Sprawdzamy focus prawej zagnieżdżonej formy browse
        // Assert - Sprawdzamy focus na unikalnym buttonie
        await setFocusNestedForm.ClickButtonAndVerifyFocus(setFocusNestedForm.rightForm.focusNestedParameterButton, setFocusNestedForm.rightForm.focusNestedCalcParamButton);
        // Assert - Sprawdzamy focus na aliasach prawej formy
        await setFocusNestedForm.ClickButtonAndVerifyFocus(setFocusNestedForm.rightForm.focusNestedAliasFieldButton, setFocusNestedForm.rightForm.nestedTextboxFINTEGER);
        await setFocusNestedForm.ClickButtonAndVerifyFocus(setFocusNestedForm.rightForm.focusNestedAliasParameterButton, setFocusNestedForm.rightForm.nestedTextboxEditParam);
        await setFocusNestedForm.ClickButtonAndVerifyFocus(setFocusNestedForm.rightForm.focusNestedEditFieldButton, setFocusNestedForm.rightForm.nestedTextboxFINTEGER);
    });
});