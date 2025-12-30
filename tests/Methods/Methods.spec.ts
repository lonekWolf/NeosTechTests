import { test } from '@playwright/test';
import { LoginPanelPage } from 'pages/LoginPanel/LoginPanel.page';
import { LoginData } from 'test-data/Login/Login.Data';
import { MenuNavigatorComponent } from 'component/MenuNavigator.component';
import { MethodsFormBrowsePage } from 'pages/Methods/MethodsFormBrowse.page';
import { MethodsFormEditPage } from 'pages/Methods/MethodsFormEdit.page';
import { methodsInitData, methodsRecalBrowseData, methodsRecalEditData } from 'test-data/Methods/Methods.Data';

test.describe('Methods initialization', () => {
    let menuNavigatorComponent: MenuNavigatorComponent;

    test.beforeEach(async ({ page }) => {
        // Arrange
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(LoginData.user, LoginData.password);
        menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.ClickMenuAndTechTestAction();
        await menuNavigatorComponent.techTestComponent.methodsComponent.methods.click();
    });

    test('Browse test', async ({ page }) => {
        // Arrange - navigation is done in beforeEach
        const fInteger = methodsInitData.fInteger;
        const fNumeric = methodsInitData.fNumeric;
        const fString = methodsInitData.fString;
        const parameterEdit = methodsInitData.parameterEdit;
        const parameterCalc = methodsInitData.parameterCalc;
        const parameterDropdown = methodsInitData.parameterDropdown;
        // Act
        await menuNavigatorComponent.techTestComponent.methodsComponent.initRecalcBrowse.click();
        // Assert
        const methodsFormBrowsePage = new MethodsFormBrowsePage(page);
        await methodsFormBrowsePage.VerifyTextInElementNotEqual(methodsFormBrowsePage.fInteger, fInteger);
        await methodsFormBrowsePage.VerifyValueInElementNotEqual(methodsFormBrowsePage.fNumeric, fNumeric);
        await methodsFormBrowsePage.VerifyTextInElementNotEqual(methodsFormBrowsePage.fString, fString);
        await methodsFormBrowsePage.VerifyTextInElement(methodsFormBrowsePage.parameterEdit, parameterEdit);
        await methodsFormBrowsePage.VerifyValueInElement(methodsFormBrowsePage.parameterCalc, parameterCalc);
        await methodsFormBrowsePage.VerifyTextInElement(methodsFormBrowsePage.parameterDropdown, parameterDropdown);
    });

    test('Edit test', async ({ page }) => {
        // Arrange - navigation is done in beforeEach
        const fInteger = methodsInitData.fInteger;
        const fNumeric = methodsInitData.fNumeric;
        const fString = methodsInitData.fString;
        const parameterEdit = methodsInitData.parameterEdit;
        const parameterCalc = methodsInitData.parameterCalc;
        const parameterDropdown = methodsInitData.parameterDropdown;
        // Act
        await menuNavigatorComponent.techTestComponent.methodsComponent.initRecalcEdit.click();
        // Assert
        const methodsFormEditPage = new MethodsFormEditPage(page);
        await methodsFormEditPage.VerifyTextInElement(methodsFormEditPage.fInteger, fInteger);
        await methodsFormEditPage.VerifyValueInElement(methodsFormEditPage.fNumeric, fNumeric);
        await methodsFormEditPage.VerifyTextInElement(methodsFormEditPage.fString, fString);
        await methodsFormEditPage.VerifyTextInElement(methodsFormEditPage.parameterEdit, parameterEdit);
        await methodsFormEditPage.VerifyValueInElement(methodsFormEditPage.parameterCalc, parameterCalc);
        await methodsFormEditPage.VerifyTextInElement(methodsFormEditPage.parameterDropdown, parameterDropdown);
    });
});

test.describe('Methods recalculation', () => {
    let menuNavigatorComponent: MenuNavigatorComponent;

    test.beforeEach(async ({ page }) => {
        // Arrange
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(LoginData.user, LoginData.password);
        menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.ClickMenuAndTechTestAction();
        await menuNavigatorComponent.techTestComponent.methodsComponent.methods.click();
    });

    test('Browse test', async ({ page }) => {
        // Arrange - navigation is done in beforeEach
        const recalcParameterValue = methodsRecalBrowseData.recalcParameterValue;
        const recalculatedEdit = methodsRecalBrowseData.recalculatedEdit;
        const recalculatedCalc = methodsRecalBrowseData.recalculatedCalc;
        const recalculatedDropdown = methodsRecalBrowseData.recalculatedDropdown;
        const fInteger = methodsRecalBrowseData.fInteger;
        const fNumeric = methodsRecalBrowseData.fNumeric;
        const fString = methodsRecalBrowseData.fString;
        // Act
        await menuNavigatorComponent.techTestComponent.methodsComponent.initRecalcBrowse.click();
        const methodsFormBrowsePage = new MethodsFormBrowsePage(page);
        await methodsFormBrowsePage.RecalculationParams(recalcParameterValue);
        // Assert
        await methodsFormBrowsePage.VerifyTextInElement(methodsFormBrowsePage.parameterRecalculationEdit, recalculatedEdit);
        await methodsFormBrowsePage.VerifyValueInElement(methodsFormBrowsePage.parameterRecalculationCalc, recalculatedCalc);
        await methodsFormBrowsePage.VerifyTextInElement(methodsFormBrowsePage.parameterRecalculationDropdown, recalculatedDropdown);
        await methodsFormBrowsePage.VerifyTextInElementNotEqual(methodsFormBrowsePage.fInteger, fInteger);
        await methodsFormBrowsePage.VerifyTextInElementNotEqual(methodsFormBrowsePage.fNumeric, fNumeric);
        await methodsFormBrowsePage.VerifyTextInElementNotEqual(methodsFormBrowsePage.fString, fString);
    });

    test('Edit test', async ({ page }) => {
        // Arrange - navigation is done in beforeEach
        const recalcParameterValue = methodsRecalEditData.recalcParameterValue;
        const fBigInt = methodsRecalEditData.fBigInt;
        const fFloat = methodsRecalEditData.fFloat;
        const fSmallInt = methodsRecalEditData.fSmallInt;
        const parameterRecalculationEdit = methodsRecalEditData.parameterRecalculationEdit;
        const parameterRecalculationCalc = methodsRecalEditData.parameterRecalculationCalc;
        const parameterRecalculationDropdown = methodsRecalEditData.parameterRecalculationDropdown;
        const fInteger = methodsInitData.fInteger;
        const fNumeric = methodsInitData.fNumeric;
        const fString = methodsInitData.fString;
        const parameterEdit = methodsInitData.parameterEdit;
        const parameterCalc = methodsInitData.parameterCalc;
        const parameterDropdown = methodsInitData.parameterDropdown;
        // Act
        await menuNavigatorComponent.techTestComponent.methodsComponent.initRecalcEdit.click();
        await menuNavigatorComponent.techTestComponent.methodsComponent.initRecalcEdit.click();
        const methodsFormEditPage = new MethodsFormEditPage(page);
        await methodsFormEditPage.RecalculationParams(recalcParameterValue);
        // Assert
        await methodsFormEditPage.VerifyTextInElement(methodsFormEditPage.fBigInt, fBigInt);
        await methodsFormEditPage.VerifyValueInElement(methodsFormEditPage.fFloat, fFloat);
        await methodsFormEditPage.VerifyTextInElement(methodsFormEditPage.fSmallInt, fSmallInt);
        await methodsFormEditPage.VerifyTextInElement(methodsFormEditPage.parameterRecalculationEdit, parameterRecalculationEdit);
        await methodsFormEditPage.VerifyValueInElement(methodsFormEditPage.parameterRecalculationCalc, parameterRecalculationCalc);
        await methodsFormEditPage.VerifyTextInElement(methodsFormEditPage.parameterRecalculationDropdown, parameterRecalculationDropdown);
        await methodsFormEditPage.VerifyTextInElement(methodsFormEditPage.fInteger, fInteger);
        await methodsFormEditPage.VerifyValueInElement(methodsFormEditPage.fNumeric, fNumeric);
        await methodsFormEditPage.VerifyTextInElement(methodsFormEditPage.fString, fString);
        await methodsFormEditPage.VerifyTextInElement(methodsFormEditPage.parameterEdit, parameterEdit);
        await methodsFormEditPage.VerifyValueInElement(methodsFormEditPage.parameterCalc, parameterCalc);
        await methodsFormEditPage.VerifyTextInElement(methodsFormEditPage.parameterDropdown, parameterDropdown);
    });
});