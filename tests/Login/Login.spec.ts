import { expect, test } from '@playwright/test';
import { LoginPanelPage } from '../../pages/LoginPanel/LoginPanel.page';
import { PulpitPage } from '../../pages/Pulpit/Pulpit.page';
import { loginData, menuLabelsData, wrongLogins } from '../../test-data/Login/Login.Data';
import { MenuNavigatorComponent } from '../../component/MenuNavigator.component';

test.describe('Correct login tests', () => {
    test('Correct login', async ({ page }) => {
        // Arrange
        const user = loginData.user;
        const password = loginData.password;
        // Act
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(user, password);
        // Assert
        const pulpitPage = new PulpitPage(page);
        await expect(pulpitPage.menu).toBeVisible();
    });

    test('Default language in the menu after logging in', async ({ page }) => {
        // Arrange
        const user = loginData.user;
        const password = loginData.password;
        const labelOptionLogout = menuLabelsData.labelOptionLogoutPL;
        const labelOptionChangePassword = menuLabelsData.labelOptionChangePasswordPL;
        const labelOptionMobileDevice = menuLabelsData.labelOptionMobileDevicePL;
        const labelOptionDesktopDevice = menuLabelsData.labelOptionDesktopDevicePL;
        const labelOptionRefresh = menuLabelsData.labelOptionRefreshPL;
        // Act
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(user, password);
        // Assert
        const pulpitPage = new PulpitPage(page);
        await pulpitPage.OpenMenuOption();
        await pulpitPage.VerifyMenuLabels(labelOptionLogout, labelOptionChangePassword, labelOptionMobileDevice, labelOptionDesktopDevice, labelOptionRefresh);
    });

    test('English language in the menu after logging in', async ({ page }) => {
        // Arrange
        const user = loginData.user;
        const password = loginData.password;
        const labelOptionLogout = menuLabelsData.labelOptionLogoutEn;
        const labelOptionChangePassword = menuLabelsData.labelOptionChangePasswordEn;
        const labelOptionMobileDevice = menuLabelsData.labelOptionMobileDeviceEn;
        const labelOptionDesktopDevice = menuLabelsData.labelOptionDesktopDeviceEn;
        const labelOptionRefresh = menuLabelsData.labelOptionRefreshEn;
        // Act
        await page.goto('/login.html?profile=ENGLISH');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(user, password);
        // Assert
        const pulpitPage = new PulpitPage(page);
        await pulpitPage.OpenMenuOption();
        await pulpitPage.VerifyMenuLabels(labelOptionLogout, labelOptionChangePassword, labelOptionMobileDevice, labelOptionDesktopDevice, labelOptionRefresh);
    });

    test('Logged user and new tab', async ({ page }) => {
        // Arrange
        const user = loginData.user;
        const password = loginData.password;
        // Act
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(user, password);

        const pulpitPage = new PulpitPage(page);
        await pulpitPage.OpenMenuOption();

        const newPage = await page.context().newPage();
        await newPage.goto('/');
        // Assert
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await expect(menuNavigatorComponent.techTestComponent.techTest).toBeVisible();
    });

    test('Presence of the action in the navigator after login', async ({ page }) => {
        // Arrange
        const user = loginData.user;
        const password = loginData.password;
        // Act
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(user, password);
        // Assert
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await expect(menuNavigatorComponent.techTestComponent.techTest).toBeVisible();
    });
});

test.describe('Login panel tests', () => {
    test('Incorrect login default profile', async ({ page }) => {
        // Arrange
        const user = wrongLogins.user;
        const password = wrongLogins.password;
        const allertMessage = wrongLogins.alertMessagePL;
        // Act
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(user, password);
        // Assert
        await loginPanelPage.VerifyIncorrectLogin(allertMessage);
    });
    test('Incorrect login english profile', async ({ page }) => {
        const user = wrongLogins.user;
        const password = wrongLogins.password;
        const allertMessage = wrongLogins.allertMessageEN;
        // Act
        await page.goto('/login.html?profile=ENGLISH');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(user, password);
        // Assert
        await loginPanelPage.VerifyIncorrectLogin(allertMessage);
    });
    test('Incorrect login, blocking after 3 tries', async ({ page }) => {
        // Arrange
        const user = wrongLogins.userToBlock;
        const password = wrongLogins.password;
        const alertMessage = wrongLogins.alertMessagePL;
        const alertMessageAfterBlocking = wrongLogins.alertMessageAfterBlocking;
        // Act
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(user, password);
        await loginPanelPage.VerifyIncorrectLogin(alertMessage);

        const secondPage = await page.context().newPage();
        await secondPage.goto('/');
        await loginPanelPage.CorrectLogin(user, password);
        await loginPanelPage.VerifyIncorrectLogin(alertMessage);

        const thirdPage = await page.context().newPage();
        await thirdPage.goto('/');
        await loginPanelPage.CorrectLogin(user, password);
        await loginPanelPage.VerifyIncorrectLogin(alertMessage);

        await thirdPage.goto('/');
        await loginPanelPage.CorrectLogin(user, password);
        // Assert
        await loginPanelPage.VerifyIncorrectLogin(alertMessageAfterBlocking);

    });


    test('Profile Teneum default language on the login page', async ({ page }) => {
        // Arrange
        const labelLoginPl = menuLabelsData.labelLoginPl;
        const labelHasloPl = menuLabelsData.labelHasloPl;
        const btnLoginPl = menuLabelsData.btnLoginPl;
        // Act
        await page.goto('/');
        // Assert
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.VeryfyTextLabels(labelLoginPl, labelHasloPl, btnLoginPl);
    });

    test('Profile English default language on the login page', async ({ page }) => {
        // Arrange
        const labelLoginEn = menuLabelsData.labelLoginEn;
        const labelHasloEn = menuLabelsData.labelHasloEn;
        const btnLoginEn = menuLabelsData.btnLoginEn;
        // Act
        await page.goto('/login.html?profile=ENGLISH');
        // Assert
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.VeryfyTextLabels(labelLoginEn, labelHasloEn, btnLoginEn);
    });

    test('Profile DROPDOWN default language on the login page', async ({ page }) => {
        // Arrange
        const labelLoginPl = menuLabelsData.labelLoginPl;
        const labelHasloPl = menuLabelsData.labelHasloPl;
        const btnLoginPl = menuLabelsData.btnLoginPl;
        const selectLanguage = menuLabelsData.selectLanguage;
        const labelLoginEn = menuLabelsData.labelLoginEn;
        const labelHasloEn = menuLabelsData.labelHasloEn;
        const btnLoginEn = menuLabelsData.btnLoginEn;
        // Act
        await page.goto('/login.html?profile=DROPDOWN');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.VeryfyTextLabels(labelLoginPl, labelHasloPl, btnLoginPl);
        await loginPanelPage.ChangeLanguageTo(selectLanguage);
        // Assert
        await loginPanelPage.VeryfyTextLabels(labelLoginEn, labelHasloEn, btnLoginEn);
    });
});