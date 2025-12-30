import { test } from '@playwright/test';
import { LoginPanelPage } from 'pages/LoginPanel/LoginPanel.page';
import { LoginData } from 'test-data/Login/Login.Data';
import { MenuNavigatorComponent } from 'component/MenuNavigator.component';
import { MethodsPage } from 'pages/GUI/Methods.page';

test.describe('Methods ', () => {
    let menuNavigatorComponent: MenuNavigatorComponent;
    let methodsPage: MethodsPage;

    test.beforeEach(async ({ page }) => {
        // Arrange
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(LoginData.user, LoginData.password);
        menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.ClickMenuAndTechTestAction();
        await menuNavigatorComponent.techTestComponent.guiComponent.gui.click();
        await menuNavigatorComponent.techTestComponent.guiComponent.testMetodGui.click();
        methodsPage = new MethodsPage(page);
    });

    test('Visible', async () => {
        // Arrange - navigation is done in beforeEach
        // Act
        await methodsPage.VerifyInvisible();
        await methodsPage.ChangeVisible();
        // Assert
        await methodsPage.VerifyVisible();
    });

    test('Editable', async () => {
        // Arrange - navigation is done in beforeEach
        // Act
        await methodsPage.VerifyUneditable();
        await methodsPage.ChangeEditable();
        // Assert
        await methodsPage.VerifyEditable();
    });

    test('Icons', async () => {
        // Arrange - navigation is done in beforeEach
        const newIcon = 'ICON_1';
        // Act
        await methodsPage.VerifyIconBeforeTest();
        await methodsPage.ChangeIcon(newIcon);
        // Assert
        await methodsPage.VerifyIconAfterTest();
    });

    test('Labels', async () => {
        // Arrange - navigation is done in beforeEach
        const labelBeforeTest = '_Król_Wioski';
        const labelAfterTest = '_TEST';
        // Act
        await methodsPage.VerifyLabelsBeforeTest(labelBeforeTest);
        await methodsPage.ChangeLabel(labelAfterTest);
        // Assert
        await methodsPage.VerifyLabelsAfterTest(labelAfterTest);
    });

    test('Params validation', async () => {
        // Arrange - navigation is done in beforeEach
        // Act
        // Assert
        await methodsPage.VerifyClassValidationParams();
    });

    test.skip('Fields validation', async () => {
        // Arrange - navigation is done in beforeEach
        // Act
        // Assert
        await methodsPage.VerifyClassValidationFields();
    });

    test('Message validation', async () => {
        // Arrange - navigation is done in beforeEach
        const expectedValidationMessage = 'Pole FSMALLINT musi zostać uzupełnione\nPole FBIGINT musi zostać uzupełnione\nPole FFLOAT musi zostać uzupełnione\nPole _p6dropdown musi zostać uzupełnione\nPole _p4edit musi być uzupełnione\nPole _p5calc musi być uzupełnione';
        // Act
        await methodsPage.EditPanelAndSave();
        // Assert
        await methodsPage.VerifyMessageValidation(expectedValidationMessage);
    });
});