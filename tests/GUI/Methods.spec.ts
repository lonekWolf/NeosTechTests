import { test } from '@playwright/test';
import { LoginPanelPage } from '../../pages/LoginPanel/LoginPanel.page';
import { PulpitPage } from '../../pages/Pulpit/Pulpit.page';
import { loginData } from '../../test-data/Login/Login.Data';
import { MenuNavigatorComponent } from '../../component/MenuNavigator.component';
import { MethodsPage } from '../../pages/GUI/Methods.page';

test.describe('Methods ', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(loginData.user, loginData.password, loginData.department, loginData.language);
        const pulpitPage = new PulpitPage(page);
        await pulpitPage.VeryfiProfileLabel(loginData.profileLabelText);
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await menuNavigatorComponent.techTestComponent.techTest.click();
        await menuNavigatorComponent.techTestComponent.guiComponent.gui.click();
        await menuNavigatorComponent.techTestComponent.guiComponent.testMetodGui.click();
    });

    test('Visible', async ({ page }) => {
        // Act 
        const methodsPage = new MethodsPage(page);
        await methodsPage.VeryfyUnvisible();
        await methodsPage.ChangeVisible();
        // Assert
        methodsPage.VeryfyVisible();
    });

    test('Editable', async ({ page }) => {
        // Act 
        const methodsPage = new MethodsPage(page);
        await methodsPage.VeryfyUneditable();
        await methodsPage.ChangeEditable();
        // Assert
        await methodsPage.VeryfyEditable();
    });

    test('Icons', async ({ page }) => {
        // Arrange
        const newIcon = 'ICON_1';
        // Act 
        const methodsPage = new MethodsPage(page);
        await methodsPage.VeryfyIconBeforeTest();
        await methodsPage.ChangeIcon(newIcon);
        // Assert
        await methodsPage.VeryfyIconAfterTest();
    });

    test('Labels', async ({ page }) => {
        // Arrange
        const labelBeforeTest = '_Król_Wioski';
        const labelAfterTest = '_TEST';
        // Act 
        const methodsPage = new MethodsPage(page);
        await methodsPage.VeryfyLabelsBeforeTest(labelBeforeTest);
        await methodsPage.ChangeLabel(labelAfterTest);
        // Assert
        await methodsPage.VeryfyLabelsAfterTest(labelAfterTest);
    });

    test('Params validation', async ({ page }) => {
        // Act 
        const methodsPage = new MethodsPage(page);
        // Assert
        await methodsPage.VeryfyClassValidationParams();
    });

    test.skip('Fields validation', async ({ page }) => {
        // Act 
        const methodsPage = new MethodsPage(page);
        // Assert
        await methodsPage.VeryfyClassValidationFields();
    });

    test('Message validation', async ({ page }) => {
        // Arrange
        const exceptedValidationMessage = 'Pole FSMALLINT musi zostać uzupełnione\nPole FBIGINT musi zostać uzupełnione\nPole FFLOAT musi zostać uzupełnione\nPole _p6dropdown musi zostać uzupełnione\nPole _p4edit musi być uzupełnione\nPole _p5calc musi być uzupełnione';
        // Act 
        const methodsPage = new MethodsPage(page);
        await methodsPage.EditPanelAndSave();
        // Assert
        await methodsPage.VeryfyMessageValidation(exceptedValidationMessage);
    });
});