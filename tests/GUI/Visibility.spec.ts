import { test } from '@playwright/test';
import { LoginPanelPage } from 'pages/LoginPanel/LoginPanel.page';
import { loginData } from 'test-data/Login/Login.Data';
import { MenuNavigatorComponent } from 'component/MenuNavigator.component';
import { VisibilityPage } from 'pages/GUI/Visibility.page';

test.describe('Visibility mode browse', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(loginData.user, loginData.password);
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.ClickMenuAndTechTestAction();
        await menuNavigatorComponent.techTestComponent.guiComponent.gui.click();
        await menuNavigatorComponent.techTestComponent.guiComponent.testWidocznościTrybBrowse.click();
    });

    test('Visible on yes', async ({ page }) => {
        // Assert
        const visibilityPage = new VisibilityPage(page);
        await visibilityPage.VeryfyVisibleOnYes();
    });

    test('Visible on no', async ({ page }) => {
        // Assert
        const visibilityPage = new VisibilityPage(page);
        await visibilityPage.VeryfyVisibleOnNo();
    });

    test('When editing', async ({ page }) => {
        // Assert
        const visibilityPage = new VisibilityPage(page);
        await visibilityPage.VeryfyWhenEditingOnNo();
    });

    test('When browsing', async ({ page }) => {
        // Assert
        const visibilityPage = new VisibilityPage(page);
        await visibilityPage.VeryfyWhenBrowsingOnYes();
    });

    test.skip('Hidden in empty field', async ({ page }) => {
        // Assert
        const visibilityPage = new VisibilityPage(page);
        await visibilityPage.FiddenInEmptyField();
    });
});

test.describe('Visibility mode edit', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(loginData.user, loginData.password);
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.ClickMenuAndTechTestAction();
        await menuNavigatorComponent.techTestComponent.guiComponent.gui.click();
        await menuNavigatorComponent.techTestComponent.guiComponent.testWidocznościTrybEditOrazPustaDefinicja.click();
    });

    test('Visible on yes', async ({ page }) => {
        // Assert
        const visibilityPage = new VisibilityPage(page);
        await visibilityPage.VeryfyVisibleOnYes();
    });

    test('Visible on no', async ({ page }) => {
        // Assert
        const visibilityPage = new VisibilityPage(page);
        await visibilityPage.VeryfyVisibleOnNo();
    });

    test('When editing', async ({ page }) => {
        // Assert
        const visibilityPage = new VisibilityPage(page);
        await visibilityPage.VeryfyWhenEditingOnYes();
    });

    test('When browsing', async ({ page }) => {
        // Assert
        const visibilityPage = new VisibilityPage(page);
        await visibilityPage.VeryfyWhenBrowsingOnNo();
    });

    test('Hidden in empty field', async ({ page }) => {
        // Assert
        const visibilityPage = new VisibilityPage(page);
        await visibilityPage.FiddenInEmptyField();
    });
});