import { test } from '@playwright/test';
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
        await menuNavigatorComponent.techTestComponent.tableObjectFiltersComponent.tableObjectFilters.click();
    });

    test('Checkbox Filter Test', async ({ page }) => {
        // Arrange
        const FStringBeforeTest = 'AAAA';
        const FStringAfterTest = 'BBBB';
        const rowInGrid = 5;

        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFiltersComponent.checkboxFilter.click();
        const filtersFormPage = new FiltersFormPage(page);
        await filtersFormPage.VeryfyFStringinGrid(FStringBeforeTest, rowInGrid);
        await filtersFormPage.CheckChaneStringFilter();
        // Assert
        await filtersFormPage.VeryfyFStringinGrid(FStringAfterTest, rowInGrid);
    });

    test('Clear Object - Const Filter', async ({ page }) => {
        // Arrange
        const FStringAfterTest = 'AAAA';
        const rowInGrid = 5;
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFiltersComponent.clearObjectConstFilter.click();

        // Assert   Sprawdzamy czy const filtr na formie działa (FSTRING = 'AAAA')
        const filtersFormPage = new FiltersFormPage(page);
        await filtersFormPage.VeryfyFStringinGrid(FStringAfterTest, rowInGrid);
    });

    test('Clear Object - Method Filter', async ({ page }) => {
        // Arrange
        const FStringAfterTest = 'BBBB';
        const rowInGrid = 5;
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFiltersComponent.clearObjectMmethodFilter.click();

        // Assert   Sprawdzamy czy metoda na filtrację SQL jest ważniejsza od const filtra (FSTRING = 'BBBB')
        const filtersFormPage = new FiltersFormPage(page);
        await filtersFormPage.VeryfyFStringinGrid(FStringAfterTest, rowInGrid);
    });

    test('Object with const filter - clear form', async ({ page }) => {
        // Arrange
        const fIntegerMaxValue = 5;
        const rowInGrid = 5;
        // Act      
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFiltersComponent.objectWithConstFilterClearForm.click();

        // Assert   Sprawdzamy czy const filter na obiekcie działa (FINTEGER < 5)
        const filtersFormPage = new FiltersFormPage(page);
        await filtersFormPage.VeryfyInputFIntegerAndRows(fIntegerMaxValue, rowInGrid);
    });

    test('Object with const filter - const filter', async ({ page }) => {
        // Arrange
        const FStringAfterTest = 'AAAA';
        const fIntegerMaxValue = 5;
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFiltersComponent.objectWithConstFilterConstFilter.click();

        // Assert   Sprawdzamy czy const filter na formie działa (FSTRING = 'AAAA') oraz czy const filter na obiekcie działa (FINTEGER < 5)
        const filtersFormPage = new FiltersFormPage(page);
        await filtersFormPage.VeryfyFIntegerAndFstringInGrid(FStringAfterTest, fIntegerMaxValue);
    });

    test('Object with method filter - clear form', async ({ page }) => {
        // Arrange
        const rowInGrid = 8;
        const fIntegerMaxValue = 8;
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFiltersComponent.objectWithMethodFilterClearForm.click();

        // Assert   Sprawdzamy method filter na obiekcie działa (FINTEGER < 8)
        const filtersFormPage = new FiltersFormPage(page);
        await filtersFormPage.VeryfyInputFIntegerAndRows(fIntegerMaxValue, rowInGrid);
    });


    test('Object with method filter - method form', async ({ page }) => {
        // Arrange
        const FStringAfterTest = 'BBBB';
        const fRefMaxValue = 8;
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFiltersComponent.objectWithMethodFilterMethodFilter.click();

        // Assert   Sprawdzamy czy method filtr na formie działa (FSTRING = 'BBBB') oraz czy method filter na obiekcie działa (FINTEGER < 8)
        const filtersFormPage = new FiltersFormPage(page);
        await filtersFormPage.VeryfyFRefAndFstringInGrid(FStringAfterTest, fRefMaxValue);
    });
});