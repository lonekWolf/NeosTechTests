import { test } from '@playwright/test';
import { LoginPanelPage } from 'pages/LoginPanel/LoginPanel.page';
import { LoginData } from 'test-data/Login/Login.Data';
import { MenuNavigatorComponent } from 'component/MenuNavigator.component';
import { ViewSettingPage } from 'pages/ViewSettings/ViewSettings.page';

test.describe('View settings', () => {
    let menuNavigatorComponent: MenuNavigatorComponent;

    test.beforeEach(async ({ page }) => {
        // Arrange
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(LoginData.user, LoginData.password);
        menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.ClickMenuAndTechTestAction();
        await menuNavigatorComponent.techTestComponent.viewSetting.viewSetting.click();
    });

    test('Open view settings menu', async ({ page }) => {
        // Arrange - navigation is done in beforeEach
        const nameView = 'Ustawienia widoku';
        const nameForm = 'BROWSE';
        // Act
        await menuNavigatorComponent.techTestComponent.viewSetting.viewSettingForm.click();
        const viewSettingPage = new ViewSettingPage(page);
        await viewSettingPage.ClickButtonAndSelectView(nameView);
        // Assert
        await viewSettingPage.VerifyViewSettingMenuOpened(nameForm);
    });

    test('Hide columns', async ({ page }) => {
        // Arrange - navigation is done in beforeEach
        const nameView = 'Ustawienia widoku';
        // Act
        await menuNavigatorComponent.techTestComponent.viewSetting.viewSettingForm.click();
        const viewSettingPage = new ViewSettingPage(page);
        await viewSettingPage.ClickButtonAndSelectView(nameView);
        await viewSettingPage.VerifyVisibleGridColumnBeforeTest();
        await viewSettingPage.HideColumn();
        // Assert
        await viewSettingPage.VerifyVisibleGridColumnAfterTest();
    });

    test('Star title after change view', async ({ page }) => {
        // Arrange - navigation is done in beforeEach
        const nameView = 'Ustawienia widoku';
        // Act
        await menuNavigatorComponent.techTestComponent.viewSetting.viewSettingForm.click();
        const viewSettingPage = new ViewSettingPage(page);
        await viewSettingPage.ClickButtonAndSelectView(nameView);
        await viewSettingPage.ChangeTableSortingByViewSettings(viewSettingPage.menuFieldsTab.fieldInteger);
        // Assert
        await viewSettingPage.VerifyTitleStar();
    });

    test('Star title after change row sorting', async ({ page }) => {
        // Arrange - navigation is done in beforeEach
        const nameView = 'Ustawienia widoku';
        // Act
        await menuNavigatorComponent.techTestComponent.viewSetting.viewSettingForm.click();
        const viewSettingPage = new ViewSettingPage(page);
        await viewSettingPage.ClickButtonAndSelectView(nameView);
        await viewSettingPage.ChangeTableSortingByGrid(viewSettingPage.formBrowse.columnString);
        // Assert
        await viewSettingPage.VerifyTitleStar();
    });

    test('Create and delete view', async ({ page }) => {
        // Arrange - navigation is done in beforeEach
        const nameView = 'Ustawienia widoku';
        const newView = 'Podstawowy test ustawień widoków';
        const expectedFormLabel = 'BROWSE';
        // Act
        await menuNavigatorComponent.techTestComponent.viewSetting.viewSettingForm.click();
        const viewSettingPage = new ViewSettingPage(page);
        await viewSettingPage.ClickButtonAndSelectView(nameView);
        await viewSettingPage.ChangeTableSortingByViewSettings(viewSettingPage.menuFieldsTab.fieldString);
        await viewSettingPage.HideColumn();
        await viewSettingPage.SaveView(newView);
        // Assert
        await viewSettingPage.OpenNewTabAndVerifyCreatedView(newView, expectedFormLabel);
    });
});