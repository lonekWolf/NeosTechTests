import { test } from '@playwright/test';
import { LoginPanelPage } from 'pages/LoginPanel/LoginPanel.page';
import { LoginData } from 'test-data/Login/Login.Data';
import { MenuNavigatorComponent } from 'component/MenuNavigator.component';
import { FiltersFormPage } from 'pages/FilteringObjectsAndForms/FiltersForm.page';


test.describe('Filtering Objects Based On Query', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(LoginData.user, LoginData.password);
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.ClickMenuAndTechTestAction();
        await menuNavigatorComponent.techTestComponent.queryObjectsFiltersComponent.queryObjectsFilters.click();
    });

    test('Query data object - clean form', async ({ page }) => {
        // Arrange
        const rowInGrid = 8;
        const fIntegerMaxValue = 8;

        // Act       
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.queryObjectsFiltersComponent.queryWithDataFilterCleanForm.click();

        // Assert   Sprawdzamy DBfilter FINTEGER < 8
        const filtersFormPage = new FiltersFormPage(page);
        await filtersFormPage.VeryfyInputFIntegerAndRows(fIntegerMaxValue, rowInGrid);
    });

    test('Query data object - const filter', async ({ page }) => {
        // Arrange
        const FStringAfterTest = 'AAAA';
        const fIntegerMaxValue = 8;

        // Act       
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.queryObjectsFiltersComponent.queryWithDataFilterConstFilter.click();

        // Assert   Sprawdzamy DBfilter FINTEGER < 8 oraz form const filter FSTRING = AAAA
        const filtersFormPage = new FiltersFormPage(page);
        await filtersFormPage.VeryfyFIntegerAndFstringInGrid(FStringAfterTest, fIntegerMaxValue);
    });

    test('Query data object - method filter', async ({ page }) => {
        // Arrange
        const FStringAfterTest = 'BBBB';
        const fIntegerMaxValue = 8;

        // Act       
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.queryObjectsFiltersComponent.queryWithDataFilterMethodFilter.click();

        // Assert   Sprawdzamy DBfilter FINTEGER < 8 oraz form const filter FSTRING = BBBB
        const filtersFormPage = new FiltersFormPage(page);
        await filtersFormPage.VeryfyFIntegerAndFstringInGrid(FStringAfterTest, fIntegerMaxValue);
    });

    test('Query method object - clean form', async ({ page }) => {
        // Arrange
        const fIntegerMaxValue = 7;
        const rowInGrid = 7;
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.queryObjectsFiltersComponent.queryWithMethodCleanForm.click();

        // Assert   Sprawdzamy SetDBQuery FINTEGER < 7
        const filtersFormPage = new FiltersFormPage(page);
        await filtersFormPage.VeryfyInputFIntegerAndRows(fIntegerMaxValue, rowInGrid);
    });

    test('Query method object - const filter', async ({ page }) => {
        // Arrange
        const FStringAfterTest = 'AAAA';
        const fIntegerMaxValue = 7;

        // Act       Query with method - const filter
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.queryObjectsFiltersComponent.queryWithMethodConstFilter.click();

        // Assert   Sprawdzamy SetDBQuery FINTEGER < 7 oraz form const filter FSTRING = AAAA
        const filtersFormPage = new FiltersFormPage(page);
        await filtersFormPage.VeryfyFIntegerAndFstringInGrid(FStringAfterTest, fIntegerMaxValue);
    });

    test('Query method object - method filter', async ({ page }) => {
        // Arrange
        const FStringAfterTest = 'BBBB';
        const fIntegerMaxValue = 7;

        // Act      
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.queryObjectsFiltersComponent.queryWithMethodMethodFilter.click();

        // Assert   Sprawdzamy SetDBQuery FINTEGER < 7 oraz form const filter FSTRING = BBBB
        const filtersFormPage = new FiltersFormPage(page);
        await filtersFormPage.VeryfyFIntegerAndFstringInGrid(FStringAfterTest, fIntegerMaxValue);
    });

    test('Query object - clean form', async ({ page }) => {
        // Arrange
        const fIntegerMaxValue = 8;

        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.queryObjectsFiltersComponent.queryObjectCleanForm.click();

        // Assert   Sprawdzamy filtr w WHERE FINTEGER < 8
        const filtersFormPage = new FiltersFormPage(page);
        await filtersFormPage.VeryfyInputFIntegerAndRows(fIntegerMaxValue, fIntegerMaxValue);
    });

    test('Query object - const filter', async ({ page }) => {
        // Arrange
        const fIntegerMaxValue = 8;
        const FStringAfterTest = 'AAAA';

        //Act 
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.queryObjectsFiltersComponent.queryObjectConstFilter.click();

        // Assert   Sprawdzamy filtr w WHERE FINTEGER < 8 oraz const filter FSTRING = AAAA
        const filtersFormPage = new FiltersFormPage(page);
        await filtersFormPage.VeryfyFIntegerAndFstringInGrid(FStringAfterTest, fIntegerMaxValue);
    });

    test('Query object - method filter', async ({ page }) => {
        // Arrange
        const FStringAfterTest = 'BBBB';
        const fRefMaxValue = 8;

        // Act     
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.queryObjectsFiltersComponent.queryObjectMethodFilter.click();

        // Assert   Sprawdzamy filtr w WHERE FINTEGER < 8 oraz method filter FSTRING = BBBB
        const filtersFormPage = new FiltersFormPage(page);
        await filtersFormPage.VeryfyFRefAndFstringInGrid(FStringAfterTest, fRefMaxValue);
    });
});