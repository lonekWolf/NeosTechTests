import { test } from '@playwright/test';
import { LoginPanelPage } from 'pages/LoginPanel/LoginPanel.page';
import { LoginData } from 'test-data/Login/Login.Data';
import { MenuNavigatorComponent } from 'component/MenuNavigator.component';
import { GridNavigationPage } from 'pages/Grid/GridNavigation.page';

test.describe('GridNavigation tests', () => {
    let menuNavigatorComponent: MenuNavigatorComponent;
    let gridNavigationPage: GridNavigationPage;

    test.beforeEach(async ({ page }) => {
        // Arrange
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(LoginData.user, LoginData.password);
        menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.ClickMenuAndTechTestAction();
        await menuNavigatorComponent.navigateToGrid();
        gridNavigationPage = new GridNavigationPage(page);
    });

    test('Find row record - expected true', async () => {
        // Arrange - navigation is done in beforeEach
        const recordToFind = '8';
        // Act
        await menuNavigatorComponent.navigateToRowSelections();
        await gridNavigationPage.FindRecord(recordToFind);

        // Assert
        await gridNavigationPage.VerifyFindRowRecordTrue(recordToFind);
    });

    test('Find row record - expected false', async () => {
        // Arrange - navigation is done in beforeEach
        const recordToFind = '15';
        // Act
        await menuNavigatorComponent.navigateToRowSelections();
        await gridNavigationPage.FindRecord(recordToFind);

        // Assert
        await gridNavigationPage.VerifyFindRowRecordFalse(recordToFind);
    });

    test('Find record - find record result expected true', async () => {
        // Arrange - navigation is done in beforeEach
        const recordToFind = '3';
        const expectedResult = 'True';
        // Act
        await menuNavigatorComponent.navigateToRowSelections();
        await gridNavigationPage.FindRecord(recordToFind);

        // Assert
        await gridNavigationPage.VerifyFindRecordResult(expectedResult);
    });

    test.skip('Find record - find record result expected false', async () => {
        // Arrange - navigation is done in beforeEach
        const recordToFind = '17';
        const expectedResult = 'False';

        // Act
        await menuNavigatorComponent.navigateToRowSelections();
        await gridNavigationPage.FindRecord(recordToFind);

        // Assert
        await gridNavigationPage.VerifyFindRecordResult(expectedResult);
    });

    test('First record', async () => {
        // Arrange - navigation is done in beforeEach
        const recordToFind = '1';
        const expectedResult = 'True';

        // Act
        await menuNavigatorComponent.navigateToRowSelections();
        await gridNavigationPage.ActionFirstButtonClick();
        // Assert
        await gridNavigationPage.VerifyFindRecordResult(expectedResult);
        await gridNavigationPage.VerifyFindRowRecordTrue(recordToFind);
    });

    test('Last record', async () => {
        // Arrange - navigation is done in beforeEach
        const recordToFind = '10';
        const expectedResult = 'True';

        // Act
        await menuNavigatorComponent.navigateToRowSelections();
        await gridNavigationPage.ActionLastButtonClick();
        // Assert
        await gridNavigationPage.VerifyFindRecordResult(expectedResult);
        await gridNavigationPage.VerifyFindRowRecordTrue(recordToFind);
    });

    test('Next record', async () => {
        // Arrange - navigation is done in beforeEach
        const recordToFind = '2';
        const expectedResult = 'True';

        // Act
        await menuNavigatorComponent.navigateToRowSelections();
        await gridNavigationPage.ActionNextRecord();
        // Assert
        await gridNavigationPage.VerifyFindRecordResult(expectedResult);
        await gridNavigationPage.VerifyFindRowRecordTrue(recordToFind);
    });

    test('Next record - out of range', async () => {
        // Arrange - navigation is done in beforeEach
        const recordToFind = '10';
        const expectedResult = 'False';

        // Act
        await menuNavigatorComponent.navigateToRowSelections();
        await gridNavigationPage.ActionLastAndNextRecord();
        // Assert
        await gridNavigationPage.VerifyFindRecordResult(expectedResult);
        await gridNavigationPage.VerifyFindRowRecordTrue(recordToFind);
    });

    test('Previous record', async () => {
        // Arrange - navigation is done in beforeEach
        const recordToFind = '9';
        const expectedResult = 'True';

        // Act
        await menuNavigatorComponent.navigateToRowSelections();
        await gridNavigationPage.ActionLastAndPreviousRecord();
        // Assert
        await gridNavigationPage.VerifyFindRecordResult(expectedResult);
        await gridNavigationPage.VerifyFindRowRecordTrue(recordToFind);
    });

    test('Previous record - out of range', async () => {
        // Arrange - navigation is done in beforeEach
        const recordToFind = '1';
        const expectedResult = 'False';

        // Act
        await menuNavigatorComponent.navigateToRowSelections();
        await gridNavigationPage.ActionFirstAndPreviousRecord();
        // Assert
        await gridNavigationPage.VerifyFindRecordResult(expectedResult);
        await gridNavigationPage.VerifyFindRowRecordTrue(recordToFind);
    });
});