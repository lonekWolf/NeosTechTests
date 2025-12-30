import { test } from '@playwright/test';
import { LoginPanelPage } from 'pages/LoginPanel/LoginPanel.page';
import { LoginData } from 'test-data/Login/Login.Data';
import { MenuNavigatorComponent } from 'component/MenuNavigator.component';
import { VisibilityPage } from 'pages/GUI/Visibility.page';

test.describe('Visibility mode browse', () => {
    let menuNavigatorComponent: MenuNavigatorComponent;
    let visibilityPage: VisibilityPage;

    test.beforeEach(async ({ page }) => {
        // Arrange
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(LoginData.user, LoginData.password);
        menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.ClickMenuAndTechTestAction();
        await menuNavigatorComponent.techTestComponent.guiComponent.gui.click();
        await menuNavigatorComponent.techTestComponent.guiComponent.testWidocznościTrybBrowse.click();
        visibilityPage = new VisibilityPage(page);
    });

    test('Visible on yes', async () => {
        // Arrange - navigation is done in beforeEach
        // Assert
        await visibilityPage.VerifyVisibleOnYes();
    });

    test('Visible on no', async () => {
        // Arrange - navigation is done in beforeEach
        // Assert
        await visibilityPage.VerifyVisibleOnNo();
    });

    test('When editing', async () => {
        // Arrange - navigation is done in beforeEach
        // Assert
        await visibilityPage.VerifyWhenEditingOnNo();
    });

    test('When browsing', async () => {
        // Arrange - navigation is done in beforeEach
        // Assert
        await visibilityPage.VerifyWhenBrowsingOnYes();
    });

    test.skip('Hidden in empty field', async () => {
        // Arrange - navigation is done in beforeEach
        // Assert
        await visibilityPage.HiddenInEmptyField();
    });
});

test.describe('Visibility mode edit', () => {
    let menuNavigatorComponent: MenuNavigatorComponent;
    let visibilityPage: VisibilityPage;

    test.beforeEach(async ({ page }) => {
        // Arrange
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(LoginData.user, LoginData.password);
        menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.ClickMenuAndTechTestAction();
        await menuNavigatorComponent.techTestComponent.guiComponent.gui.click();
        await menuNavigatorComponent.techTestComponent.guiComponent.testWidocznościTrybEditOrazPustaDefinicja.click();
        visibilityPage = new VisibilityPage(page);
    });

    test('Visible on yes', async () => {
        // Arrange - navigation is done in beforeEach
        // Assert
        await visibilityPage.VerifyVisibleOnYes();
    });

    test('Visible on no', async () => {
        // Arrange - navigation is done in beforeEach
        // Assert
        await visibilityPage.VerifyVisibleOnNo();
    });

    test('When editing', async () => {
        // Arrange - navigation is done in beforeEach
        // Assert
        await visibilityPage.VerifyWhenEditingOnYes();
    });

    test('When browsing', async () => {
        // Arrange - navigation is done in beforeEach
        // Assert
        await visibilityPage.VerifyWhenBrowsingOnNo();
    });

    test('Hidden in empty field', async () => {
        // Arrange - navigation is done in beforeEach
        // Assert
        await visibilityPage.HiddenInEmptyField();
    });
});