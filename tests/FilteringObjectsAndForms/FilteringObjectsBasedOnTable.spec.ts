import { test, expect } from '@playwright/test';
import { LoginPanelPage } from '../../pages/LoginPanel/LoginPanel.page';
import { PulpitPage } from '../../pages/Pulpit/Pulpit.page';
import { loginData } from '../../test-data/Login/Login.Data';
import { MenuNavigatorComponent } from '../../component/MenuNavigator.component';
import { FiltersFormPage } from '../../pages/FilteringObjectsAndForms/FiltersForm.Page';

test.describe('Filtering Objects Based On Table', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(loginData.user, loginData.password, loginData.department, loginData.language);
        const pulpitPage = new PulpitPage(page);
        await pulpitPage.VeryfiProfileLabel(loginData.profileLabelText);
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.techTest.click();
        await menuNavigatorComponent.techTestComponent.tableObjectFilters.tableObjectFilters.click();
    });

    test('Filtering test on the form using a parameter', async ({ page }) => {
        // Arrange
        const FStringBeforeTest = 'AAAA';
        const FStringAfterTest = 'BBBB';
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFilters.checkboxFilter.click();

        const filtersFormPage = new FiltersFormPage(page);
        await filtersFormPage.VeryfyFStringGridBeforeTest(FStringBeforeTest);
        await filtersFormPage.CheckChaneStringFilter();
        // Assert
        await filtersFormPage.VeryfyFStringGridAfterTest(FStringAfterTest);
    });

    test('Clear Object Method Filter', async ({ page }) => {
        // Arrange
        const FStringAfterTest = 'BBBB';
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFilters.clearObjectMmethodFilter.click();

        // Assert
        const filtersFormPage = new FiltersFormPage(page);
        await filtersFormPage.VeryfyFStringGridAfterTest(FStringAfterTest);
    });

    test('Clear Object Const Filter', async ({ page }) => {
        // Arrange
        const FStringAfterTest = 'AAAA';
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFilters.clearObjectConstFilter.click();

        // Assert
        const filtersFormPage = new FiltersFormPage(page);
        await filtersFormPage.VeryfyFStringGridAfterTest(FStringAfterTest);
    });
    test('Const Object Const Filter', async ({ page }) => {
        // Arrange
        const FStringAfterTest = 'AAAA';
        const fIntegerMaxValue = 5;
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFilters.objectWithConstFilterConstFilter.click()

        // Assert
        const filtersFormPage = new FiltersFormPage(page);
        await filtersFormPage.VeryfyFIntegerAndFstringInGrid(FStringAfterTest, fIntegerMaxValue);
    });

    test.only('ConstObjectClearForm', async ({ page }) => {
        // Arrange
        const fInteger = 5;
        // Act      
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFilters.objectWithConstFilterClearForm.click()

        // Assert
        const filtersFormPage = new FiltersFormPage(page);
        await filtersFormPage.VeryfyFIntegerInGrid(fInteger);
    });

    test('Method Object Method Filter', async ({ page }) => {
        // Arrange
        const FStringAfterTest = 'BBBB';
        const fRefMaxValue = 8;
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFilters.objectWithMethodFilterMethodFilter.click()

        // Assert
        const filtersFormPage = new FiltersFormPage(page);
        await filtersFormPage.VeryfyFRefAndFstringInGrid(FStringAfterTest, fRefMaxValue);
    });
});