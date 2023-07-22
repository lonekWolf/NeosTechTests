import { test, expect } from '@playwright/test';
import { LoginPanelPage } from '../../pages/LoginPanel/LoginPanel.page';
import { PulpitPage } from '../../pages/Pulpit/Pulpit.page';
import { loginData } from '../../test-data/Login/Login.Data';

test.describe('Login tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('Correct login', async ({ page }) => {
        // Arrange
        const user = loginData.user;
        const password = loginData.password;
        const department = loginData.department;
        const language = loginData.language;
        const profileLabelText = loginData.profileLabelText;

        // Act
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(user, password, department, language);

        // Assert
        const pulpitPage = new PulpitPage(page);
        await pulpitPage.VeryfiProfileLabel(profileLabelText);
    });
    test.afterEach(async ({ page }) => {

    });

});