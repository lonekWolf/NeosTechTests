import { test, expect } from '@playwright/test';
import { LoginPanelPage } from '../../pages/LoginPanel/LoginPanel.page';
import { PulpitPage } from '../../pages/Pulpit/Pulpit.page';
import { loginData } from '../../test-data/Login/Login.Data';
import { MenuNavigatorComponent } from '../../component/MenuNavigator.component';
import { AddNewRecordPage } from '../../pages/Grid/AddNewRecord.Page';

test.describe('Grid tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(loginData.user, loginData.password, loginData.department, loginData.language);
        const pulpitPage = new PulpitPage(page);
        await pulpitPage.VeryfiProfileLabel(loginData.profileLabelText);
    });

    test.only('Add new record', async ({ page }) => {
        // Arrange
        const tabName = 'Grid crud table name';
        const formName = 'Create new record';
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.grid.addNewRecord.click();

        const pulpitPage = new PulpitPage(page);
        await pulpitPage.VeryfiTabName(tabName);

        const addNewRecord = new AddNewRecordPage(page);
        await addNewRecord.ClickBtnAndAddNewRecord(formName);
        // Assert
        await addNewRecord.VeryfyGridAfterRecordAdded();
    });
    test.afterEach(async ({ page }) => {

    });

});