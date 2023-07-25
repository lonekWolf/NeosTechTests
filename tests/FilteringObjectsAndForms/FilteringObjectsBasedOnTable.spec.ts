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

    test('Filters - Checkbox Filter Test', async ({ page }) => {
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

    test('Clear Object - Const Filter', async ({ page }) => {
        // Arrange
        const FStringAfterTest = 'AAAA';
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFilters.clearObjectConstFilter.click();

        // Assert
        const filtersFormPage = new FiltersFormPage(page);
        await filtersFormPage.VeryfyFStringGridAfterTest(FStringAfterTest);
    });

    test('Clear Object - Method Filter', async ({ page }) => {
        // Arrange
        const FStringAfterTest = 'BBBB';
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFilters.clearObjectMmethodFilter.click();

        // Assert
        const filtersFormPage = new FiltersFormPage(page);
        await filtersFormPage.VeryfyFStringGridAfterTest(FStringAfterTest);
    });

    test.only('Object with const filter - clear form', async ({ page }) => {
        // Arrange
        const fIntegerMaxValue = 5;
        const rowInGrid = 5;
        // Act      
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFilters.objectWithConstFilterClearForm.click()

        // Assert
        const filtersFormPage = new FiltersFormPage(page);
        await filtersFormPage.VeryfyRow(fIntegerMaxValue, rowInGrid);
    });

    test('Object with const filter - const filter', async ({ page }) => {
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

    test('Object with method filter - clear form', async ({ page }) => {
        // Arrange
        // const FStringAfterTest = 'BBBB';
        const rowInGrid = 8;
        const fIntegerMaxValue = 8;
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFilters.objectWithMethodFilterClearForm.click()

        // Assert
        const filtersFormPage = new FiltersFormPage(page);
        await filtersFormPage.VeryfyRow(fIntegerMaxValue, rowInGrid);
    });


    test('Object with method filter - method form', async ({ page }) => {
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