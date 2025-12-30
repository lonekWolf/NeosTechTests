import { test } from '@playwright/test';
import { LoginPanelPage } from 'pages/LoginPanel/LoginPanel.page';
import { LoginData } from 'test-data/Login/Login.Data';
import { MenuNavigatorComponent } from 'component/MenuNavigator.component';
import { VisibilityActions } from 'pages/VisibilityActions/VisibilityActions.page';

test.describe('Visibility Actions', () => {
    let menuNavigatorComponent: MenuNavigatorComponent;

    test.beforeEach(async ({ page }) => {
        // Arrange
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(LoginData.user, LoginData.password);
        menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.ClickMenuAndTechTestAction();
        await menuNavigatorComponent.techTestComponent.visibilityActions.visibilityElements.click();
    });

    test('Setting visibility to yes', async ({ page }) => {
        // Arrange - navigation is done in beforeEach
        // Act
        await menuNavigatorComponent.techTestComponent.visibilityActions.visibilityActions.click();
        const visibilityActions = new VisibilityActions(page);
        await visibilityActions.ClickBtnVisibilityOnYes();
        // Assert
        await visibilityActions.VerifyBtnVisibilityOnYes();
    });

    test('Setting visibility to no', async ({ page }) => {
        // Arrange - navigation is done in beforeEach
        // Act
        await menuNavigatorComponent.techTestComponent.visibilityActions.visibilityActions.click();
        const visibilityActions = new VisibilityActions(page);
        // Assert
        await visibilityActions.VerifyBtnVisibilityOnNoDoesntExist();
    });

    test('Setting visibility while browsing', async ({ page }) => {
        // Arrange - navigation is done in beforeEach
        // Act
        await menuNavigatorComponent.techTestComponent.visibilityActions.visibilityActions.click();
        const visibilityActions = new VisibilityActions(page);
        await visibilityActions.ClickBtnVisibilityWhileBrowsing();
        // Assert
        await visibilityActions.VerifyBtnVisibilityWhileBrowsing();
    });

    test('Setting visibility method', async ({ page }) => {
        // Arrange - navigation is done in beforeEach
        // Act
        await menuNavigatorComponent.techTestComponent.visibilityActions.visibilityActions.click();
        const visibilityActions = new VisibilityActions(page);
        await visibilityActions.ClickBtnVisibilityMethod();
        // Assert
        await visibilityActions.VerifyBtnVisibilityMethod();
    });
});