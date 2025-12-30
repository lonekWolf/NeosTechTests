import { test } from '@playwright/test';
import { LoginPanelPage } from 'pages/LoginPanel/LoginPanel.page';
import { LoginData } from 'test-data/Login/Login.Data';
import { MenuNavigatorComponent } from 'component/MenuNavigator.component';
import { GridFilterPage } from 'pages/FilteringObjectsAndForms/GridFilter.page';


test.describe('GRID Filter', () => {
    let menuNavigatorComponent: MenuNavigatorComponent;
    let gridFilterPage: GridFilterPage;

    test.beforeEach(async ({ page }) => {
        // Arrange
        await page.goto('/', { timeout: 50000 });
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(LoginData.user, LoginData.password);
        menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.ClickMenuAndTechTestAction();
        await menuNavigatorComponent.techTestComponent.tableObjectFiltersComponent.tableObjectFilters.click();
        gridFilterPage = new GridFilterPage(page);
    });

    test('Questionmark test', async () => {
        // Arrange - navigation is done in beforeEach
        const stringToFind = '?';
        const balloonHintMessage = `Wyszukiwany tekst posiada nieobsługiwany znak '?'. Nie zostanie on uwzględniony przy wyszukiwaniu.`;
        // Act
        await menuNavigatorComponent.navigateToGridFilterFullTable();
        await gridFilterPage.Search(stringToFind);
        // Assert
        await gridFilterPage.VerifyBalloonHintMessage(balloonHintMessage);
    });

    test('Search for hidden value', async () => {
        // Arrange - navigation is done in beforeEach
        const stringToFind = '100';
        // Act
        await menuNavigatorComponent.navigateToGridFilterTableWithHiddenFields();
        await gridFilterPage.Search(stringToFind);
        // Assert
        await gridFilterPage.VerifyNoData();
    });

    test('Full table search numbers', async () => {
        // Arrange - navigation is done in beforeEach
        // Act
        await menuNavigatorComponent.navigateToGridFilterFullTable();
        // Assert
        await gridFilterPage.VerifyNumbers();
    });

    test('Full table search letters', async () => {
        // Arrange - navigation is done in beforeEach
        const letters = ['a', 'z', 't', 'q', 'x'];
        // Act
        await menuNavigatorComponent.navigateToGridFilterFullTable();
        // Assert
        await gridFilterPage.VerifyLetters(letters);
    });

    test('Full table search polish letters', async () => {
        // Arrange - navigation is done in beforeEach
        const polishLetters = ['ą', 'ż', 'ź', 'ę', 'ł', 'ć', 'ś', 'ó', 'ń'];
        // Act
        await menuNavigatorComponent.navigateToGridFilterFullTable();
        // Assert
        await gridFilterPage.VerifyLetters(polishLetters);
    });

    test('Full table search special chars', async () => {
        // Arrange - navigation is done in beforeEach
        const specialChars = ['~', '!', '@', '#', '$', '%', '&', '/', '-', '{', '[', '(', ')', '}', ']'];
        // Act
        await menuNavigatorComponent.navigateToGridFilterFullTable();
        // Assert
        await gridFilterPage.VerifyLetters(specialChars);
    });

    test('Hidden fields table search numbers', async () => {
        // Arrange - navigation is done in beforeEach
        // Act
        await menuNavigatorComponent.navigateToGridFilterTableWithHiddenFields();
        // Assert
        await gridFilterPage.VerifyNumbers();
    });

    test('Hidden fields table search letters', async () => {
        // Arrange - navigation is done in beforeEach
        const letters = ['a', 'z', 't', 'q', 'x'];
        // Act
        await menuNavigatorComponent.navigateToGridFilterTableWithHiddenFields();
        // Assert
        await gridFilterPage.VerifyLetters(letters);
    });

    test('Hidden fields table search polish letters', async () => {
        // Arrange - navigation is done in beforeEach
        const polishLetters = ['ą', 'ż', 'ź', 'ę', 'ł', 'ć', 'ś', 'ó', 'ń'];
        // Act
        await menuNavigatorComponent.navigateToGridFilterTableWithHiddenFields();
        // Assert
        await gridFilterPage.VerifyLetters(polishLetters);
    });

    test('Hidden fields table search polish special chars', async () => {
        // Arrange - navigation is done in beforeEach
        const specialChars = ['~', '!', '@', '#', '$', '%', '&', '/', '-', '{', '[', '(', ')', '}', ']'];
        // Act
        await menuNavigatorComponent.navigateToGridFilterTableWithHiddenFields();
        // Assert
        await gridFilterPage.VerifyLetters(specialChars);
    });
});