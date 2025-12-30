import { test } from '@playwright/test';
import { LoginPanelPage } from 'pages/LoginPanel/LoginPanel.page';
import { LoginData } from 'test-data/Login/Login.Data';
import { MenuNavigatorComponent } from 'component/MenuNavigator.component';
import { FiltersFormPage } from 'pages/FilteringObjectsAndForms/FiltersForm.page';


test.describe('Filtering Objects Based On Query', () => {
    let menuNavigatorComponent: MenuNavigatorComponent;
    let filtersFormPage: FiltersFormPage;

    test.beforeEach(async ({ page }) => {
        // Arrange
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(LoginData.user, LoginData.password);
        menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.ClickMenuAndTechTestAction();
        await menuNavigatorComponent.techTestComponent.queryObjectsFiltersComponent.queryObjectsFilters.click();
        filtersFormPage = new FiltersFormPage(page);
    });

    test('Query data object - clean form', async () => {
        // Arrange - navigation is done in beforeEach
        const rowInGrid = 8;
        const fIntegerMaxValue = 8;
        // Act
        await menuNavigatorComponent.navigateToQueryWithDataFilterCleanForm();
        // Assert
        await filtersFormPage.VerifyInputFIntegerAndRows(fIntegerMaxValue, rowInGrid);
    });

    test('Query data object - const filter', async () => {
        // Arrange - navigation is done in beforeEach
        const FStringAfterTest = 'AAAA';
        const fIntegerMaxValue = 8;
        // Act
        await menuNavigatorComponent.navigateToQueryWithDataFilterConstFilter();
        // Assert
        await filtersFormPage.VerifyFIntegerAndFStringInGrid(FStringAfterTest, fIntegerMaxValue);
    });

    test('Query data object - method filter', async () => {
        // Arrange - navigation is done in beforeEach
        const FStringAfterTest = 'BBBB';
        const fIntegerMaxValue = 8;
        // Act
        await menuNavigatorComponent.navigateToQueryWithDataFilterMethodFilter();
        // Assert
        await filtersFormPage.VerifyFIntegerAndFStringInGrid(FStringAfterTest, fIntegerMaxValue);
    });

    test('Query method object - clean form', async () => {
        // Arrange - navigation is done in beforeEach
        const fIntegerMaxValue = 7;
        const rowInGrid = 7;
        // Act
        await menuNavigatorComponent.navigateToQueryWithMethodCleanForm();
        // Assert
        await filtersFormPage.VerifyInputFIntegerAndRows(fIntegerMaxValue, rowInGrid);
    });

    test('Query method object - const filter', async () => {
        // Arrange - navigation is done in beforeEach
        const FStringAfterTest = 'AAAA';
        const fIntegerMaxValue = 7;
        // Act
        await menuNavigatorComponent.navigateToQueryWithMethodConstFilter();
        // Assert
        await filtersFormPage.VerifyFIntegerAndFStringInGrid(FStringAfterTest, fIntegerMaxValue);
    });

    test('Query method object - method filter', async () => {
        // Arrange - navigation is done in beforeEach
        const FStringAfterTest = 'BBBB';
        const fIntegerMaxValue = 7;
        // Act
        await menuNavigatorComponent.navigateToQueryWithMethodMethodFilter();
        // Assert
        await filtersFormPage.VerifyFIntegerAndFStringInGrid(FStringAfterTest, fIntegerMaxValue);
    });

    test('Query object - clean form', async () => {
        // Arrange - navigation is done in beforeEach
        const fIntegerMaxValue = 8;
        // Act
        await menuNavigatorComponent.navigateToQueryObjectCleanForm();
        // Assert
        await filtersFormPage.VerifyInputFIntegerAndRows(fIntegerMaxValue, fIntegerMaxValue);
    });

    test('Query object - const filter', async () => {
        // Arrange - navigation is done in beforeEach
        const fIntegerMaxValue = 8;
        const FStringAfterTest = 'AAAA';
        // Act
        await menuNavigatorComponent.navigateToQueryObjectConstFilter();
        // Assert
        await filtersFormPage.VerifyFIntegerAndFStringInGrid(FStringAfterTest, fIntegerMaxValue);
    });

    test('Query object - method filter', async () => {
        // Arrange - navigation is done in beforeEach
        const FStringAfterTest = 'BBBB';
        const fRefMaxValue = 8;
        // Act
        await menuNavigatorComponent.navigateToQueryObjectMethodFilter();
        // Assert
        await filtersFormPage.VerifyFRefAndFStringInGrid(FStringAfterTest, fRefMaxValue);
    });
});