import { test } from '@playwright/test';
import { LoginPanelPage } from 'pages/LoginPanel/LoginPanel.page';
import { LoginData } from 'test-data/Login/Login.Data';
import { MenuNavigatorComponent } from 'component/MenuNavigator.component';
import { FiltersFormPage } from 'pages/FilteringObjectsAndForms/FiltersForm.page';

test.describe('Filtering Objects Based On Table', () => {
    let menuNavigatorComponent: MenuNavigatorComponent;
    let filtersFormPage: FiltersFormPage;

    test.beforeEach(async ({ page }) => {
        // Arrange
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(LoginData.user, LoginData.password);
        menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.ClickMenuAndTechTestAction();
        await menuNavigatorComponent.techTestComponent.tableObjectFiltersComponent.tableObjectFilters.click();
        filtersFormPage = new FiltersFormPage(page);
    });

    test('Checkbox Filter Test', async () => {
        // Arrange - navigation is done in beforeEach
        const FStringBeforeTest = 'AAAA';
        const FStringAfterTest = 'BBBB';
        const rowInGrid = 5;
        // Act
        await menuNavigatorComponent.navigateToCheckboxFilter();
        await filtersFormPage.VerifyFStringInGrid(FStringBeforeTest, rowInGrid);
        await filtersFormPage.CheckChangeStringFilter();
        // Assert
        await filtersFormPage.VerifyFStringInGrid(FStringAfterTest, rowInGrid);
    });

    test('Clear Object - Const Filter', async () => {
        // Arrange - navigation is done in beforeEach
        const FStringAfterTest = 'AAAA';
        const rowInGrid = 5;
        // Act
        await menuNavigatorComponent.navigateToClearObjectConstFilter();
        // Assert
        await filtersFormPage.VerifyFStringInGrid(FStringAfterTest, rowInGrid);
    });

    test('Clear Object - Method Filter', async () => {
        // Arrange - navigation is done in beforeEach
        const FStringAfterTest = 'BBBB';
        const rowInGrid = 5;
        // Act
        await menuNavigatorComponent.navigateToClearObjectMethodFilter();
        // Assert
        await filtersFormPage.VerifyFStringInGrid(FStringAfterTest, rowInGrid);
    });

    test('Object with const filter - clear form', async () => {
        // Arrange - navigation is done in beforeEach
        const fIntegerMaxValue = 5;
        const rowInGrid = 5;
        // Act
        await menuNavigatorComponent.navigateToObjectWithConstFilterClearForm();
        // Assert
        await filtersFormPage.VerifyInputFIntegerAndRows(fIntegerMaxValue, rowInGrid);
    });

    test('Object with const filter - const filter', async () => {
        // Arrange - navigation is done in beforeEach
        const FStringAfterTest = 'AAAA';
        const fIntegerMaxValue = 5;
        // Act
        await menuNavigatorComponent.navigateToObjectWithConstFilterConstFilter();
        // Assert
        await filtersFormPage.VerifyFIntegerAndFStringInGrid(FStringAfterTest, fIntegerMaxValue);
    });

    test('Object with method filter - clear form', async () => {
        // Arrange - navigation is done in beforeEach
        const rowInGrid = 8;
        const fIntegerMaxValue = 8;
        // Act
        await menuNavigatorComponent.navigateToObjectWithMethodFilterClearForm();
        // Assert
        await filtersFormPage.VerifyInputFIntegerAndRows(fIntegerMaxValue, rowInGrid);
    });

    test('Object with method filter - method form', async () => {
        // Arrange - navigation is done in beforeEach
        const FStringAfterTest = 'BBBB';
        const fRefMaxValue = 8;
        // Act
        await menuNavigatorComponent.navigateToObjectWithMethodFilterMethodFilter();
        // Assert
        await filtersFormPage.VerifyFRefAndFStringInGrid(FStringAfterTest, fRefMaxValue);
    });
});