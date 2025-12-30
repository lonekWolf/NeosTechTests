import { test } from '@playwright/test';
import { LoginPanelPage } from 'pages/LoginPanel/LoginPanel.page';
import { LoginData } from 'test-data/Login/Login.Data';
import { MenuNavigatorComponent } from 'component/MenuNavigator.component';
import { EditablePage } from 'pages/GUI/Editable.page';

test.describe('Editable ', () => {
    let menuNavigatorComponent: MenuNavigatorComponent;
    let editablePage: EditablePage;

    test.beforeEach(async ({ page }) => {
        // Arrange
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(LoginData.user, LoginData.password);
        menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.ClickMenuAndTechTestAction();
        await menuNavigatorComponent.techTestComponent.guiComponent.gui.click();
        editablePage = new EditablePage(page);
    });

    test('Browse form', async () => {
        // Arrange - navigation is done in beforeEach
        // Act
        await menuNavigatorComponent.techTestComponent.guiComponent.testEdytowalnościTrybBrowse.click();
        // Assert
        await editablePage.VerifyEditable();
        await editablePage.VerifyUneditable();
    });

    test('Edit form', async () => {
        // Arrange - navigation is done in beforeEach
        // Act
        await menuNavigatorComponent.techTestComponent.guiComponent.testEdytowalnościTrybEditOrazPustaDefinicja.click();
        // Assert
        await editablePage.VerifyEditable();
        await editablePage.VerifyUneditable();
    });
});