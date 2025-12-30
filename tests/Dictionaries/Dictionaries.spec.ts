import { test } from '@playwright/test';
import { LoginPanelPage } from 'pages/LoginPanel/LoginPanel.page';
import { LoginData } from 'test-data/Login/Login.Data';
import { MenuNavigatorComponent } from 'component/MenuNavigator.component';
import { DictionariesPage } from 'pages/Dictionaries/Dictionaries.page';

test.describe('Dictionaries', () => {
    let menuNavigatorComponent: MenuNavigatorComponent;
    let dictionariesPage: DictionariesPage;

    test.beforeEach(async ({ page }) => {
        // Arrange
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(LoginData.user, LoginData.password);
        menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.ClickMenuAndTechTestAction();
        await menuNavigatorComponent.techTestComponent.dictionariesComponent.dictionaries.click();
        dictionariesPage = new DictionariesPage(page);
    });

    test('Static dict sorting', async () => {
        // Arrange - navigation is done in beforeEach
        // Act
        await menuNavigatorComponent.navigateToStaticDictionaries();
        // Assert
        await dictionariesPage.VerifyFieldsDictionaries();
        await dictionariesPage.VerifyParamsDictionaries();
        await dictionariesPage.VerifyTableRowsWithDictionaryDate();
    });

    test('Static dict change select option', async () => {
        // Arrange - navigation is done in beforeEach
        // Act
        await menuNavigatorComponent.navigateToStaticDictionaries();
        // Assert
        await dictionariesPage.VerifyChangeOptionsWithTableRows();
    });

    test.skip('Table dict default sorting', async () => {
        // Arrange - navigation is done in beforeEach
        // Act
        await menuNavigatorComponent.navigateToTableDictionaries();
        // Assert
        await dictionariesPage.VerifyDefaultSorting();
    });

    test('Table dict change values', async () => {
        // Arrange - navigation is done in beforeEach
        // Act
        await menuNavigatorComponent.navigateToTableDictionaries();
        // Assert
        await dictionariesPage.ClickRecordAndVerifyDictionaryChanges();
    });

    test('Table dicts filtering', async () => {
        // Arrange - navigation is done in beforeEach
        // Act
        await menuNavigatorComponent.navigateToFilteredDictionaries();
        // Assert
        await dictionariesPage.VerifyMethodFiltering();
    });

    test('Table dict filtering change values', async () => {
        // Arrange - navigation is done in beforeEach
        // Act
        await menuNavigatorComponent.navigateToFilteredDictionaries();
        // Assert
        await dictionariesPage.VerifyFilteringChangeValues();
    });

    test.skip('Table dict REF sorting', async () => {
        // Arrange - navigation is done in beforeEach
        // Act
        await menuNavigatorComponent.navigateToTableDictionaries();
        // Assert
        await dictionariesPage.VerifySortingByRef();
    });
});