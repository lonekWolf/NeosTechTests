import { test, expect } from '@playwright/test';
import { LoginPanelPage } from '../../pages/LoginPanel/LoginPanel.page';
import { PulpitPage } from '../../pages/Pulpit/Pulpit.page';
import { loginData } from '../../test-data/Login/Login.Data';
import { MenuNavigatorComponent } from '../../component/MenuNavigator.component';
import { AddNewRecordPage } from '../../pages/Grid/AddNewRecord.Page';

test.describe('GridCrud tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(loginData.user, loginData.password, loginData.department, loginData.language);
        const pulpitPage = new PulpitPage(page);
        await pulpitPage.VeryfiProfileLabel(loginData.profileLabelText);
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        menuNavigatorComponent.techTestComponent.techTest.click();
        await menuNavigatorComponent.techTestComponent.grid.grid.click();

    });

    test('Add new record', async ({ page }) => {
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

    test('Edit record', async ({ page }) => {
        // Arrange
        const tabName = 'Grid crud table name';
        const formName = 'Create new record';
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);

        await menuNavigatorComponent.techTestComponent.grid.editRecord.click();

        const pulpitPage = new PulpitPage(page);
        await pulpitPage.VeryfiTabName(tabName);

        const addNewRecord = new AddNewRecordPage(page);
        await addNewRecord.ClickBtnAndEditRecord(formName);
        // Assert
        await addNewRecord.VeryfyGridAfterRecordEdited();
    });

    test('Delete record', async ({ page }) => {
        // Arrange
        const tabName = 'Grid crud table name';
        const formName = 'Create new record';
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.grid.deleteCurrentRecord.click();

        const pulpitPage = new PulpitPage(page);
        await pulpitPage.VeryfiTabName(tabName);

        const addNewRecord = new AddNewRecordPage(page);
        await addNewRecord.ClickRowRecordAndDelete('3');
        await addNewRecord.ClickRowRecordAndDelete('5');
        await addNewRecord.ClickRowRecordAndDelete('10');
        // Assert
        await addNewRecord.VeryfyGridAfterDeleteRecord('3');
        await addNewRecord.VeryfyGridAfterDeleteRecord('5');
        await addNewRecord.VeryfyGridAfterDeleteRecord('10');
    });
});