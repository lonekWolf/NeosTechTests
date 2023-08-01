import { test } from '@playwright/test';
import { LoginPanelPage } from '../../pages/LoginPanel/LoginPanel.page';
import { loginData } from '../../test-data/Login/Login.Data';
import { MenuNavigatorComponent } from '../../component/MenuNavigator.component';
import { MethodsFormBrowsePage } from '../../pages/Methods/MethodsFormBrowse.page';
import { MethodsFormEditPage } from '../../pages/Methods/MethodsFormEdit.page';
import { methodsInitData, methodsRecalBrowseData, methodsRecalEditData } from '../../test-data/Methods/Methods.Data';

test.describe('Methods initialization', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(loginData.user, loginData.password);
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.ClickMenuAndTechTestAction();
        await menuNavigatorComponent.techTestComponent.methodsComponent.methods.click();
    });

    test('Browse test', async ({ page }) => {
        // Arrange
        const fInteger = methodsInitData.fInteger;
        const FNumeric = methodsInitData.FNumeric;
        const fString = methodsInitData.fString;
        const parametrEdit = methodsInitData.parametrEdit;
        const parametrCalc = methodsInitData.parametrCalc;
        const parametrDropdown = methodsInitData.parametrDropdown;
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.methodsComponent.initRecalcBrowse.click();
        // Assert
        const methodsFormBrowsePage = new MethodsFormBrowsePage(page);
        await methodsFormBrowsePage.VeryfyTextInElementNotEqual(methodsFormBrowsePage.fInteger, fInteger);
        await methodsFormBrowsePage.VeryfyValuetInElementNotEqual(methodsFormBrowsePage.fNumeric, FNumeric);
        await methodsFormBrowsePage.VeryfyTextInElementNotEqual(methodsFormBrowsePage.fString, fString);
        await methodsFormBrowsePage.VeryfyTextInElement(methodsFormBrowsePage.parameterEdit, parametrEdit);
        await methodsFormBrowsePage.VeryfyValuetInElement(methodsFormBrowsePage.parameterCalc, parametrCalc);
        await methodsFormBrowsePage.VeryfyTextInElement(methodsFormBrowsePage.parameterDropdown, parametrDropdown);
    });

    test('Edit test', async ({ page }) => {
        // Arrange
        const fInteger = methodsInitData.fInteger;
        const FNumeric = methodsInitData.FNumeric;
        const fString = methodsInitData.fString;
        const parametrEdit = methodsInitData.parametrEdit;
        const parametrCalc = methodsInitData.parametrCalc;
        const parametrDropdown = methodsInitData.parametrDropdown;
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.methodsComponent.initRecalcEdit.click();
        // Assert
        const methodsFormEditPage = new MethodsFormEditPage(page);
        await methodsFormEditPage.VeryfyTextInElement(methodsFormEditPage.fInteger, fInteger);
        await methodsFormEditPage.VeryfyValuetInElement(methodsFormEditPage.fNumeric, FNumeric);
        await methodsFormEditPage.VeryfyTextInElement(methodsFormEditPage.fString, fString);
        await methodsFormEditPage.VeryfyTextInElement(methodsFormEditPage.parameterEdit, parametrEdit);
        await methodsFormEditPage.VeryfyValuetInElement(methodsFormEditPage.parameterCalc, parametrCalc);
        await methodsFormEditPage.VeryfyTextInElement(methodsFormEditPage.parameterDropdown, parametrDropdown);
    });
});

test.describe('Methods recalculation', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(loginData.user, loginData.password);
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.ClickMenuAndTechTestAction();
        await menuNavigatorComponent.techTestComponent.methodsComponent.methods.click();
    });

    test('Browse test', async ({ page }) => {
        // Arrange
        const recalParametrValue = methodsRecalBrowseData.recalParametrValue;
        const recalatedEdit = methodsRecalBrowseData.recalatedEdit;
        const recalatedCalc = methodsRecalBrowseData.recalatedCalc;
        const recalatedDropdown = methodsRecalBrowseData.recalatedDropdown;
        const fInteger = methodsRecalBrowseData.fInteger;
        const FNumeric = methodsRecalBrowseData.FNumeric;
        const fString = methodsRecalBrowseData.fString;
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.methodsComponent.initRecalcBrowse.click();

        const methodsFormBrowsePage = new MethodsFormBrowsePage(page);
        await methodsFormBrowsePage.RecalculationParams(recalParametrValue);
        // Assert
        await methodsFormBrowsePage.VeryfyTextInElement(methodsFormBrowsePage.parameterRecalculationEdit, recalatedEdit);
        await methodsFormBrowsePage.VeryfyValuetInElement(methodsFormBrowsePage.parameterRecalculationCalc, recalatedCalc);
        await methodsFormBrowsePage.VeryfyTextInElement(methodsFormBrowsePage.parameterRecalculationDropdown, recalatedDropdown);
        await methodsFormBrowsePage.VeryfyTextInElementNotEqual(methodsFormBrowsePage.fInteger, fInteger);
        await methodsFormBrowsePage.VeryfyTextInElementNotEqual(methodsFormBrowsePage.fNumeric, FNumeric);
        await methodsFormBrowsePage.VeryfyTextInElementNotEqual(methodsFormBrowsePage.fString, fString);
    });

    test('Edit test', async ({ page }) => {
        // Arrange
        const recalParametrValue = methodsRecalEditData.recalParametrValue;
        const fBigInt = methodsRecalEditData.fBigInt;
        const fFloat = methodsRecalEditData.fFloat;
        const FSmallInt = methodsRecalEditData.FSmallInt;
        const parameterRecalculationEdit = methodsRecalEditData.parameterRecalculationEdit;
        const parameterRecalculationCalc = methodsRecalEditData.parameterRecalculationCalc;
        const parameterRecalculationDropdown = methodsRecalEditData.parameterRecalculationDropdown;
        const fInteger = methodsInitData.fInteger;
        const FNumeric = methodsInitData.FNumeric;
        const fString = methodsInitData.fString;
        const parametrEdit = methodsInitData.parametrEdit;
        const parametrCalc = methodsInitData.parametrCalc;
        const parametrDropdown = methodsInitData.parametrDropdown;
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.methodsComponent.initRecalcEdit.click();
        const methodsFormEditPage = new MethodsFormEditPage(page);
        await methodsFormEditPage.RecalculationParams(recalParametrValue)
        // Assert
        await methodsFormEditPage.VeryfyTextInElement(methodsFormEditPage.fBigInt, fBigInt);
        await methodsFormEditPage.VeryfyValuetInElement(methodsFormEditPage.fFloat, fFloat);
        await methodsFormEditPage.VeryfyTextInElement(methodsFormEditPage.fSmallInt, FSmallInt);
        await methodsFormEditPage.VeryfyTextInElement(methodsFormEditPage.parameterRecalculationEdit, parameterRecalculationEdit);
        await methodsFormEditPage.VeryfyValuetInElement(methodsFormEditPage.parameterRecalculationCalc, parameterRecalculationCalc);
        await methodsFormEditPage.VeryfyTextInElement(methodsFormEditPage.parameterRecalculationDropdown, parameterRecalculationDropdown);
        await methodsFormEditPage.VeryfyTextInElement(methodsFormEditPage.fInteger, fInteger);
        await methodsFormEditPage.VeryfyValuetInElement(methodsFormEditPage.fNumeric, FNumeric);
        await methodsFormEditPage.VeryfyTextInElement(methodsFormEditPage.fString, fString);
        await methodsFormEditPage.VeryfyTextInElement(methodsFormEditPage.parameterEdit, parametrEdit);
        await methodsFormEditPage.VeryfyValuetInElement(methodsFormEditPage.parameterCalc, parametrCalc);
        await methodsFormEditPage.VeryfyTextInElement(methodsFormEditPage.parameterDropdown, parametrDropdown);
    });
});