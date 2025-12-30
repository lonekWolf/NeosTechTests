import { test } from '@playwright/test';
import { LoginPanelPage } from 'pages/LoginPanel/LoginPanel.page';
import { LoginData } from 'test-data/Login/Login.Data';
import { MenuNavigatorComponent } from 'component/MenuNavigator.component';
import { TabsPage } from 'pages/GUI/Tabs.page';

test.describe('Tabs ', () => {
    let menuNavigatorComponent: MenuNavigatorComponent;
    let tabsPage: TabsPage;

    test.beforeEach(async ({ page }) => {
        // Arrange
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(LoginData.user, LoginData.password);
        menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.ClickMenuAndTechTestAction();
        await menuNavigatorComponent.techTestComponent.guiComponent.gui.click();
        await menuNavigatorComponent.techTestComponent.guiComponent.testZakladek.click();
        tabsPage = new TabsPage(page);
    });

    test('Change Tab', async () => {
        // Arrange - navigation is done in beforeEach
        // Act
        await tabsPage.ChangeVisibleParamTab();
        // Assert
        await tabsPage.VerifyLabelsTabAfter();
    });

    test('Focus tab', async () => {
        // Arrange - navigation is done in beforeEach
        // Act
        // Assert
        await tabsPage.VerifyFocusTabAfterOpenForm();
        await tabsPage.VerifyFocusTabAfterChangeToParamsTab();
        await tabsPage.VerifyFocusTabAfterChangeToButtonsTab();
    });

    test('Method expand tab', async () => {
        // Arrange - navigation is done in beforeEach
        // Act
        // Assert
        await tabsPage.VerifyVisibleActions();
    });
});