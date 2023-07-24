import { test, expect } from '@playwright/test';
import { LoginPanelPage } from '../../pages/LoginPanel/LoginPanel.page';
import { PulpitPage } from '../../pages/Pulpit/Pulpit.page';
import { loginData } from '../../test-data/Login/Login.Data';
import { MenuNavigatorComponent } from '../../component/MenuNavigator.component';
import { FiltersFormPage } from '../../pages/FilteringObjectsAndForms/FiltersForm.Page';

test.describe('Filtering Objects Based On Table', () => {
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

    test.only('Filtering test on the form using a parameter', async ({ page }) => {
        // Arrange
        const constFStringBeforeTest = 'AAAA';
        const constFStringAfterTest = 'BBBB';
        // const 
        // Act
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.tableObjectFilters.checkboxFilter.click();

        const filtersFormPage = new FiltersFormPage(page);
        await filtersFormPage.VeryfyGridBeforeTest(constFStringBeforeTest);
        await filtersFormPage.CheckChaneStringFilter();
        // Assert
        await filtersFormPage.VeryfyGridAfterTest(constFStringAfterTest);
    });
});