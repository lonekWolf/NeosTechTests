import { test } from '@playwright/test';
import { LoginPanelPage } from '../../pages/LoginPanel/LoginPanel.page';
import { PulpitPage } from '../../pages/Pulpit/Pulpit.page';
import { loginData } from '../../test-data/Login/Login.Data';
import { MenuNavigatorComponent } from '../../component/MenuNavigator.component';
import { DictionariesPage } from '../../pages/Dictionaries/Dictionaries.page';

test.describe('Dictionaries', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(loginData.user, loginData.password, loginData.department, loginData.language);
        const pulpitPage = new PulpitPage(page);
        await pulpitPage.VeryfiProfileLabel(loginData.profileLabelText);
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.techTest.click();
        await menuNavigatorComponent.techTestComponent.dictionariesComponent.dictionaries.click();
    });

    test('Static dict sorting', async ({ page }) => {
        // Act       
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.dictionariesComponent.staticDictionaries.click();
        // Assert
        const dictionariesPage = new DictionariesPage(page);
        await dictionariesPage.VeryfyFideldsDictionaries();
        await dictionariesPage.VeryfyParamsDictionaries();
        await dictionariesPage.VeryfyTableRowsWithDictionaryDate();
    });

    test('Static Dict change select option', async ({ page }) => {
        // Act       
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.dictionariesComponent.staticDictionaries.click();
        // Assert
        const dictionariesPage = new DictionariesPage(page);
        await dictionariesPage.VeryfyChangeOptionsWithTableRows();
    });
});