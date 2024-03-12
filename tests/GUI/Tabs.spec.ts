import { test } from '@playwright/test';
import { LoginPanelPage } from 'pages/LoginPanel/LoginPanel.page';
import { LoginData } from 'test-data/Login/Login.Data';
import { MenuNavigatorComponent } from 'component/MenuNavigator.component';
import { TabsPage } from 'pages/GUI/Tabs.page';

test.describe('Tabs ', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(LoginData.user, LoginData.password);
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.ClickMenuAndTechTestAction();
        await menuNavigatorComponent.techTestComponent.guiComponent.gui.click();
        await menuNavigatorComponent.techTestComponent.guiComponent.testZakladek.click();
    });

    test('Change Tab', async ({ page }) => {
        // Assert
        const tabsPage = new TabsPage(page);
        await tabsPage.ChangeVisibleParamTab();
        await tabsPage.VeryfyLabelsTabAfter();
    });

    test('Focus tab', async ({ page }) => {
        // Assert
        const tabsPage = new TabsPage(page);
        await tabsPage.VeryfyFocusTabAfterOpenForm();
        await tabsPage.VeryfyFocusTabAfterChangeToParamsTab();
        await tabsPage.VeryfyFocusTabAfterChangeToButtonsTab();
    });

    test('Method expand tab', async ({ page }) => {
        // Assert
        const tabsPage = new TabsPage(page);
        await tabsPage.VerfyVisibleActions();
    });


});