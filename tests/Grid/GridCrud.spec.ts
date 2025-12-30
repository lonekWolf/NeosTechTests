import { test } from '@playwright/test';
import { LoginPanelPage } from 'pages/LoginPanel/LoginPanel.page';
import { LoginData } from 'test-data/Login/Login.Data';
import { PulpitPage } from 'pages/Pulpit/Pulpit.page';
import { MenuNavigatorComponent } from 'component/MenuNavigator.component';
import { AddNewRecordPage } from 'pages/Grid/GridCRUD.page';

test.describe('GridCrud tests', () => {
    let menuNavigatorComponent: MenuNavigatorComponent;
    let pulpitPage: PulpitPage;
    let addNewRecordPage: AddNewRecordPage;

    test.beforeEach(async ({ page }) => {
        // Arrange
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(LoginData.user, LoginData.password);
        menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.ClickMenuAndTechTestAction();
        await menuNavigatorComponent.navigateToGrid();
        pulpitPage = new PulpitPage(page);
        addNewRecordPage = new AddNewRecordPage(page);
    });

    test('Add new record', async () => {
        // Arrange - navigation is done in beforeEach
        const tabName = 'Grid crud table name';
        const formName = 'Create new record';
        // Act
        await menuNavigatorComponent.navigateToAddNewRecord();
        await pulpitPage.VerifyTabName(tabName);
        await addNewRecordPage.ClickBtnAndAddNewRecord(formName);
        // Assert
        await addNewRecordPage.VerifyGridAfterRecordAdded();
    });

    test('Edit record', async () => {
        // Arrange - navigation is done in beforeEach
        const tabName = 'Grid crud table name';
        const formName = 'Create new record';
        // Act
        await menuNavigatorComponent.navigateToEditRecord();
        await pulpitPage.VerifyTabName(tabName);
        await addNewRecordPage.ClickBtnAndEditRecord(formName);
        // Assert
        await addNewRecordPage.VerifyGridAfterRecordEdited();
    });

    test('Delete record', async () => {
        // Arrange - navigation is done in beforeEach
        const tabName = 'Grid crud table name';
        // Act
        await menuNavigatorComponent.navigateToDeleteCurrentRecord();
        await pulpitPage.VerifyTabName(tabName);
        await addNewRecordPage.ClickRowRecordAndDelete('3');
        await addNewRecordPage.ClickRowRecordAndDelete('5');
        await addNewRecordPage.ClickRowRecordAndDelete('10');
        // Assert
        await addNewRecordPage.VerifyGridAfterDeleteRecord('3');
        await addNewRecordPage.VerifyGridAfterDeleteRecord('5');
        await addNewRecordPage.VerifyGridAfterDeleteRecord('10');
    });
});