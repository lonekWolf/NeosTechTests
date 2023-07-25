import { test } from '@playwright/test';
import { LoginPanelPage } from '../../pages/LoginPanel/LoginPanel.page';
import { PulpitPage } from '../../pages/Pulpit/Pulpit.page';
import { loginData } from '../../test-data/Login/Login.Data';
import { MenuNavigatorComponent } from '../../component/MenuNavigator.component';
import { GridFilterPage } from '../../pages/FilteringObjectsAndForms/GridFilter.page';

test.describe('GRID Filter', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(loginData.user, loginData.password, loginData.department, loginData.language);
        const pulpitPage = new PulpitPage(page);
        await pulpitPage.VeryfiProfileLabel(loginData.profileLabelText);
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.techTest.click();
        await menuNavigatorComponent.techTestComponent.tableObjectFilters.tableObjectFilters.click();
    });

    test('Questionmark test', async ({ page }) => {
        // Arrange
        const stringToFind = '?';
        const ballonhintMessage = `Wyszukiwany tekst posiada nieobsługiwany znak '?'. Nie zostanie on uwzględniony przy wyszukiwaniu.`;
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFilters.cridFilterFullTable.click();

        const gridFilter = new GridFilterPage(page);
        await gridFilter.Search(stringToFind);
        // Assert
        await gridFilter.VeryfyBallonHintMessage(ballonhintMessage);
    });

    test.only('Search for hidden value', async ({ page }) => {
        // Arrange
        const stringToFind = '100';
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFilters.gridFilterTableWithHiddenFields.click();

        const gridFilter = new GridFilterPage(page);
        await gridFilter.Search(stringToFind);
        // Assert
        await gridFilter.VeryfyNoDataInGrid();
    });


});