import { test } from '@playwright/test';
import { LoginPanelPage } from 'pages/LoginPanel/LoginPanel.page';
import { LoginData } from 'test-data/Login/Login.Data';
import { MenuNavigatorComponent } from 'component/MenuNavigator.component';
import { GridNavigationPage } from 'pages/Grid/GridNavigation.page';

test.describe('GridNavigation tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(LoginData.user, LoginData.password);
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.ClickMenuAndTechTestAction();
        await menuNavigatorComponent.techTestComponent.gridComponent.grid.click();
    });

    test('Find row record - expected true', async ({ page }) => {
        // Arrange
        const recordToFind = '8';
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.gridComponent.rowSelections.click();

        const gridNavigation = new GridNavigationPage(page);
        await gridNavigation.FindRecord(recordToFind);

        // Assert
        await gridNavigation.VerifyFindRowRecordTrue(recordToFind);
    });

    test('Find row record - expected false', async ({ page }) => {
        // Arrange
        const recordToFind = '15';
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.gridComponent.rowSelections.click();

        const gridNavigation = new GridNavigationPage(page);
        await gridNavigation.FindRecord(recordToFind);

        // Assert
        await gridNavigation.VerifyFindRowRecordFalse(recordToFind);
    });

    test('Find record - find record resualt expected true', async ({ page }) => {
        // Arrange
        const recordToFind = '3';
        const expectedResult = 'True';
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.gridComponent.rowSelections.click();

        const gridNavigation = new GridNavigationPage(page);
        await gridNavigation.FindRecord(recordToFind);

        // Assert
        await gridNavigation.VerifyFindRecordResualt(expectedResult);
    });

    test.skip('Find record - find record resualt expected false', async ({ page }) => {
        // Arrange
        const recordToFind = '17';
        const expectedResult = 'False';

        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.gridComponent.rowSelections.click();

        const gridNavigation = new GridNavigationPage(page);
        await gridNavigation.FindRecord(recordToFind);

        // Assert
        await gridNavigation.VerifyFindRecordResualt(expectedResult);
    });

    test('First record', async ({ page }) => {
        // Arrange
        const recordToFind = '1';
        const expectedResult = 'True';

        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.gridComponent.rowSelections.click();

        const gridNavigation = new GridNavigationPage(page);
        await gridNavigation.ActionFirstButtonClick();
        // Assert
        await gridNavigation.VerifyFindRecordResualt(expectedResult);
        await gridNavigation.VerifyFindRowRecordTrue(recordToFind);
    });

    test('Last record', async ({ page }) => {
        // Arrange
        const recordToFind = '10';
        const expectedResult = 'True';

        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.gridComponent.rowSelections.click();

        const gridNavigation = new GridNavigationPage(page);
        await gridNavigation.ActionLastButtonClick();
        // Assert
        await gridNavigation.VerifyFindRecordResualt(expectedResult);
        await gridNavigation.VerifyFindRowRecordTrue(recordToFind);
    });

    test('Next record', async ({ page }) => {
        // Arrange
        const recordToFind = '2';
        const expectedResult = 'True';

        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.gridComponent.rowSelections.click();

        const gridNavigation = new GridNavigationPage(page);
        await gridNavigation.ActionNextRecord();
        // Assert
        await gridNavigation.VerifyFindRecordResualt(expectedResult);
        await gridNavigation.VerifyFindRowRecordTrue(recordToFind);
    });
    test('Next record - out of range', async ({ page }) => {
        // Arrange
        const recordToFind = '10';
        const expectedResult = 'False';

        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.gridComponent.rowSelections.click();

        const gridNavigation = new GridNavigationPage(page);
        await gridNavigation.ActionLastAndNextRecord();
        // Assert
        await gridNavigation.VerifyFindRecordResualt(expectedResult);
        await gridNavigation.VerifyFindRowRecordTrue(recordToFind);
    });

    test('Previous record', async ({ page }) => {
        // Arrange
        const recordToFind = '9';
        const expectedResult = 'True';

        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.gridComponent.rowSelections.click();

        const gridNavigation = new GridNavigationPage(page);
        await gridNavigation.ActionLastAndPreviousRecord();
        // Assert
        await gridNavigation.VerifyFindRecordResualt(expectedResult);
        await gridNavigation.VerifyFindRowRecordTrue(recordToFind);
    });

    test('Previous record - out of range', async ({ page }) => {
        // Arrange
        const recordToFind = '1';
        const expectedResult = 'False';

        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.gridComponent.rowSelections.click();

        const gridNavigation = new GridNavigationPage(page);
        await gridNavigation.ActionFirstAndPreviousRecord();
        // Assert
        await gridNavigation.VerifyFindRecordResualt(expectedResult);
        await gridNavigation.VerifyFindRowRecordTrue(recordToFind);
    });
});