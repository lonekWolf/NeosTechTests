import { test } from '@playwright/test';
import { LoginPanelPage } from 'pages/LoginPanel/LoginPanel.page';
import { loginData } from 'test-data/Login/Login.Data';
import { MenuNavigatorComponent } from 'component/MenuNavigator.component';
import { ViewSettingPage } from 'pages/ViewSettings/ViewSettings.page';

test.describe('View settings', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(loginData.user, loginData.password);
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.ClickMenuAndTechTestAction();
        await menuNavigatorComponent.techTestComponent.viewSetting.viewSetting.click();
    });

    test('Open view settings menu', async ({ page }) => {
        // Arrange
        const nameView = 'Ustawienia widoku';
        const nameForm = 'BROWSE';
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.viewSetting.viewSettingForm.click();
        const viewSettingPage = new ViewSettingPage(page);
        await viewSettingPage.ClickButtonAndSelectView(nameView);
        // Assert
        await viewSettingPage.VerifyViewSettingMenuOpened(nameForm);
    });

    test('Hide columns', async ({ page }) => {
        // Arrange
        const nameView = 'Ustawienia widoku';
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.viewSetting.viewSettingForm.click();
        const viewSettingPage = new ViewSettingPage(page);
        await viewSettingPage.ClickButtonAndSelectView(nameView);
        await viewSettingPage.VerifyVisibleGridColumndBeforeTest();
        await viewSettingPage.HideColumn();
        // Assert
        await viewSettingPage.VerifyVisibleGridColumndAfterTest();
    });

    test('Star tittle after change view', async ({ page }) => {
        // Arrange
        const nameView = 'Ustawienia widoku';
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.viewSetting.viewSettingForm.click();
        const viewSettingPage = new ViewSettingPage(page);
        await viewSettingPage.ClickButtonAndSelectView(nameView);
        await viewSettingPage.ChangeTableSortingByViewSettings(viewSettingPage.menuFieldsTab.fieldInteger);
        // Assert
        await viewSettingPage.VerifyTittleStar();
    });

    test('Star tittle after change row sorting', async ({ page }) => {
        // Arrange
        const nameView = 'Ustawienia widoku';
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.viewSetting.viewSettingForm.click();
        const viewSettingPage = new ViewSettingPage(page);
        await viewSettingPage.ClickButtonAndSelectView(nameView);
        await viewSettingPage.ChangeTableSortingByGrid(viewSettingPage.formBrowse.columnString);
        // Assert
        await viewSettingPage.VerifyTittleStar();
    });

    test('Create and delete view', async ({ page }) => {
        // Arrange
        const nameView = 'Ustawienia widoku';
        const newView = 'Podstawowy test ustawień widoków';
        const expectedFormLabel = 'BROWSE';
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.viewSetting.viewSettingForm.click();
        const viewSettingPage = new ViewSettingPage(page);
        await viewSettingPage.ClickButtonAndSelectView(nameView);
        await viewSettingPage.ChangeTableSortingByViewSettings(viewSettingPage.menuFieldsTab.fieldString);
        await viewSettingPage.HideColumn();
        await viewSettingPage.SaveView(newView);
        // Assert
        await viewSettingPage.OpenNewTabAndVeryfyCreatedView(newView, expectedFormLabel);
    });
});