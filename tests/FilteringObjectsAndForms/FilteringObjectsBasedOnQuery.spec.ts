import { test } from '@playwright/test';
import { LoginPanelPage } from '../../pages/LoginPanel/LoginPanel.page';
import { PulpitPage } from '../../pages/Pulpit/Pulpit.page';
import { loginData } from '../../test-data/Login/Login.Data';
import { MenuNavigatorComponent } from '../../component/MenuNavigator.component';
import { FiltersFormPage } from '../../pages/FilteringObjectsAndForms/FiltersForm.Page';

test.describe('Filtering Objects Based On Query', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(loginData.user, loginData.password, loginData.department, loginData.language);
        const pulpitPage = new PulpitPage(page);
        await pulpitPage.VeryfiProfileLabel(loginData.profileLabelText);
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.techTest.click();
        await menuNavigatorComponent.techTestComponent.queryObjectsFilters.queryObjectsFilters.click();
    });

    test('Query data object - clean form', async ({ page }) => {
        // Arrange
        const rowInGrid = 8;
        const fIntegerMaxValue = 8;

        // Act       
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.queryObjectsFilters.queryWithDataFilterCleanForm.click();

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
        await menuNavigatorComponent.techTestComponent.queryObjectsFilters.queryWithDataFilterConstFilter.click();

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
        await menuNavigatorComponent.techTestComponent.queryObjectsFilters.queryWithDataFilterMethodFilter.click();

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
        await menuNavigatorComponent.techTestComponent.queryObjectsFilters.queryWithMethodCleanForm.click();

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
        await menuNavigatorComponent.techTestComponent.queryObjectsFilters.queryWithMethodConstFilter.click();

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
        await menuNavigatorComponent.techTestComponent.queryObjectsFilters.queryWithMethodMethodFilter.click();

        // Assert   Sprawdzamy SetDBQuery FINTEGER < 7 oraz form const filter FSTRING = BBBB
        const filtersFormPage = new FiltersFormPage(page);
        await filtersFormPage.VeryfyFIntegerAndFstringInGrid(FStringAfterTest, fIntegerMaxValue);
    });

    test('Query object - clean form', async ({ page }) => {
        // Arrange
        const fIntegerMaxValue = 8;

        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.queryObjectsFilters.queryObjectCleanForm.click();

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
        await menuNavigatorComponent.techTestComponent.queryObjectsFilters.queryObjectConstFilter.click();

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
        await menuNavigatorComponent.techTestComponent.queryObjectsFilters.queryObjectMethodFilter.click();

        // Assert   Sprawdzamy filtr w WHERE FINTEGER < 8 oraz method filter FSTRING = BBBB
        const filtersFormPage = new FiltersFormPage(page);
        await filtersFormPage.VeryfyFRefAndFstringInGrid(FStringAfterTest, fRefMaxValue);
    });
});