import { test, expect } from '@playwright/test';
import { LoginPanelPage } from '../../pages/LoginPanel/LoginPanel.page';
import { PulpitPage } from '../../pages/Pulpit/Pulpit.page';
import { loginData } from '../../test-data/Login/Login.Data';
import { MenuNavigatorComponent } from '../../component/MenuNavigator.component';
import { GridNavigationPage } from '../../pages/Grid/GridNavigation';

test.describe('GridNavigation tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(loginData.user, loginData.password, loginData.department, loginData.language);
        const pulpitPage = new PulpitPage(page);
        await pulpitPage.VeryfiProfileLabel(loginData.profileLabelText);
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        menuNavigatorComponent.techTestComponent.techTest.click();
        await menuNavigatorComponent.techTestComponent.grid.grid.click();
    });

    test('Find record - expected true', async ({ page }) => {
        // Arrange
        const recordToFind = '8';
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.grid.rowSelections.click();

        const gridNavigation = new GridNavigationPage(page);
        await gridNavigation.FindRecord(recordToFind);

        // Assert
        await gridNavigation.VerifyFindRecordTrue(recordToFind);
    });

    test('Find record - expected false', async ({ page }) => {
        // Arrange
        const recordToFind = '15';
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.grid.rowSelections.click();

        const gridNavigation = new GridNavigationPage(page);
        await gridNavigation.FindRecord(recordToFind);

        // Assert
        await gridNavigation.VerifyFindRecordFalse(recordToFind);
    });
});