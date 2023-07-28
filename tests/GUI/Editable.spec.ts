import { test } from '@playwright/test';
import { LoginPanelPage } from '../../pages/LoginPanel/LoginPanel.page';
import { PulpitPage } from '../../pages/Pulpit/Pulpit.page';
import { loginData } from '../../test-data/Login/Login.Data';
import { MenuNavigatorComponent } from '../../component/MenuNavigator.component';
import { EditablePage } from '../../pages/GUI/Editable.page';

test.describe('Editable ', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(loginData.user, loginData.password, loginData.department, loginData.language);
        const pulpitPage = new PulpitPage(page);
        await pulpitPage.VeryfiProfileLabel(loginData.profileLabelText);
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.techTest.click();
        await menuNavigatorComponent.techTestComponent.guiComponent.gui.click();
    });

    test('Browse form', async ({ page }) => {
        // Act 
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.guiComponent.testEdytowalnościTrybBrowse.click();
        // Assert
        const editablePage = new EditablePage(page);
        await editablePage.VerifyEditable();
        await editablePage.VerifyUneditable();
    });

    test('Edit form', async ({ page }) => {
        // Act 
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.guiComponent.testEdytowalnościTrybEditOrazPustaDefinicja.click();
        // Assert
        const editablePage = new EditablePage(page);
        await editablePage.VerifyEditable();
        await editablePage.VerifyUneditable();
    });
});