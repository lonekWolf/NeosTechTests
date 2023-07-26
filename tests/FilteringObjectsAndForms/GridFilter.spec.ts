import { test } from '@playwright/test';
import { LoginPanelPage } from '../../pages/LoginPanel/LoginPanel.page';
import { PulpitPage } from '../../pages/Pulpit/Pulpit.page';
import { loginData } from '../../test-data/Login/Login.Data';
import { MenuNavigatorComponent } from '../../component/MenuNavigator.component';
import { GridFilterPage } from '../../pages/FilteringObjectsAndForms/GridFilter.page';

test.describe('GRID Filter', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/', { timeout: 50000 });
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(loginData.user, loginData.password, loginData.department, loginData.language);
        const pulpitPage = new PulpitPage(page);
        await pulpitPage.VeryfiProfileLabel(loginData.profileLabelText);
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.techTest.click();
        await menuNavigatorComponent.techTestComponent.tableObjectFiltersComponent.tableObjectFilters.click();
    });

    test('Questionmark test', async ({ page }) => {
        // Arrange
        const stringToFind = '?';
        const ballonhintMessage = `Wyszukiwany tekst posiada nieobsługiwany znak '?'. Nie zostanie on uwzględniony przy wyszukiwaniu.`;
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFiltersComponent.gridFilterFullTable.click();

        const gridFilter = new GridFilterPage(page);
        await gridFilter.Search(stringToFind);
        // Assert
        await gridFilter.VeryfyBallonHintMessage(ballonhintMessage);
    });

    test('Search for hidden value', async ({ page }) => {
        // Arrange
        const stringToFind = '100';
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFiltersComponent.gridFilterTableWithHiddenFields.click();

        const gridFilter = new GridFilterPage(page);
        await gridFilter.Search(stringToFind);
        // Assert
        await gridFilter.VeryfyNoData();
    });

    test('Full table search numbers', async ({ page }) => {
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFiltersComponent.gridFilterFullTable.click();

        // Assert
        const gridFilter = new GridFilterPage(page);
        await gridFilter.VeryfyNumbers();
    });

    test('Full table search letters', async ({ page }) => {
        // Arrange
        const letters = ['a', 'z', 't', 'q', 'x'];
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFiltersComponent.gridFilterFullTable.click();

        // Assert
        const gridFilter = new GridFilterPage(page);
        await gridFilter.VeryfyLetters(letters);
    });

    test('Full table search polish letters', async ({ page }) => {
        // Arrange
        const polishLetters = ['ą', 'ż', 'ź', 'ę', 'ł', 'ć', 'ś', 'ó', 'ń'];
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFiltersComponent.gridFilterFullTable.click();

        // Assert
        const gridFilter = new GridFilterPage(page);
        await gridFilter.VeryfyLetters(polishLetters);
    });

    test('Full table search special chars', async ({ page }) => {
        // Arrange
        const specialChars = ['~', '!', '@', '#', '$', '%', '&', '/', '-', '{', '[', '(', ')', '}', ']'];
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFiltersComponent.gridFilterFullTable.click();

        // Assert
        const gridFilter = new GridFilterPage(page);
        await gridFilter.VeryfyLetters(specialChars);
    });

    test('Hidden fields table search numbers', async ({ page }) => {
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFiltersComponent.gridFilterTableWithHiddenFields.click();

        // Assert
        const gridFilter = new GridFilterPage(page);
        await gridFilter.VeryfyNumbers();
    });

    test('Hidden fields table search letters', async ({ page }) => {
        // Arrange
        const letters = ['a', 'z', 't', 'q', 'x'];
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFiltersComponent.gridFilterTableWithHiddenFields.click();

        // Assert
        const gridFilter = new GridFilterPage(page);
        await gridFilter.VeryfyLetters(letters);
    });

    test('Hidden fields table search polish letters', async ({ page }) => {
        // Arrange
        const polishLetters = ['ą', 'ż', 'ź', 'ę', 'ł', 'ć', 'ś', 'ó', 'ń'];
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFiltersComponent.gridFilterTableWithHiddenFields.click();

        // Assert
        const gridFilter = new GridFilterPage(page);
        await gridFilter.VeryfyLetters(polishLetters);
    });

    test('Hidden fields table search polish special chars', async ({ page }) => {
        // Arrange
        const specialChars = ['~', '!', '@', '#', '$', '%', '&', '/', '-', '{', '[', '(', ')', '}', ']'];
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFiltersComponent.gridFilterTableWithHiddenFields.click();

        // Assert
        const gridFilter = new GridFilterPage(page);
        await gridFilter.VeryfyLetters(specialChars);
    });
});