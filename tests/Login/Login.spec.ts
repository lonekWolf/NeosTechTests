import { expect, test } from '@playwright/test';
import { LoginPanelPage } from '../../pages/LoginPanel/LoginPanel.page';
import { PulpitPage } from '../../pages/Pulpit/Pulpit.page';
import { loginData } from '../../test-data/Login/Login.Data';
import { MenuNavigatorComponent } from '../../component/MenuNavigator.component';

test.describe('Login tests', () => {
    test.beforeEach(async ({ page }) => {
        // await page.goto('/');
    });

    test('Correct login', async ({ page }) => {
        // Arrange
        const user = loginData.user;
        const password = loginData.password;
        const department = loginData.department;
        const language = loginData.language;
        const profileLabelText = loginData.profileLabelText;
        // Act
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(user, password, department, language);
        // Assert
        const pulpitPage = new PulpitPage(page);
        await pulpitPage.VeryfiProfileLabel(profileLabelText);
    });

    test('Incorrect login default profile', async ({ page }) => {
        // Arrange
        const user = 'agorecki';
        const password = 'nietohaslo';
        const department = loginData.department;
        const language = loginData.language;
        const allertMessage = 'Nie udało się zalogować';
        // Act
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(user, password, department, language);
        // Assert
        await loginPanelPage.VerifyIncorrectLogin(allertMessage);
    });

    test('Incorrect login, blocking after 3 tries', async ({ page }) => {
        // Arrange
        const user = 'mszczepanski';
        const password = 'nietohaslo';
        const department = loginData.department;
        const language = loginData.language;
        const alertMessage = 'Nie udało się zalogować';
        const alertMessageAfterBlocking = 'Zablokowano możliwość logowania z powodu 3 nieudanych prób. Ponowne logowanie będzię możliwe dopiero za';
        // Act
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(user, password, department, language);
        await loginPanelPage.VerifyIncorrectLogin(alertMessage);

        const secondPage = await page.context().newPage();
        await secondPage.goto('/');
        await loginPanelPage.CorrectLogin(user, password, department, language);
        await loginPanelPage.VerifyIncorrectLogin(alertMessage);

        const thirdPage = await page.context().newPage();
        await thirdPage.goto('/');
        await loginPanelPage.CorrectLogin(user, password, department, language);
        await loginPanelPage.VerifyIncorrectLogin(alertMessage);

        await thirdPage.goto('/');
        await loginPanelPage.CorrectLogin(user, password, department, language);
        // Assert
        await loginPanelPage.VerifyIncorrectLogin(alertMessageAfterBlocking);

    });

    test('Incorrect login english profile', async ({ page }) => {
        // Arrange
        const user = 'agorecki';
        const password = 'nietohaslo';
        const department = loginData.department;
        const language = loginData.language;
        const allertMessage = `Couldn't log in`;
        // Act
        await page.goto('/login.html?profile=ENGLISH');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(user, password, department, language);
        // Assert
        await loginPanelPage.VerifyIncorrectLogin(allertMessage);
    });

    test('Profile Teneum default language on the login page', async ({ page }) => {
        // Arrange
        const labelLoginPl = 'Login';
        const labelHasloPl = 'Hasło';
        const btnLoginPl = 'Zaloguj';
        // Act
        await page.goto('/');
        // Assert
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.VeryfyTextLabels(labelLoginPl, labelHasloPl, btnLoginPl);
    });

    test('Profile English default language on the login page', async ({ page }) => {
        // Arrange
        const labelLoginEn = 'Login';
        const labelHasloEn = 'Password';
        const btnLoginEn = 'Log in';
        // Act
        await page.goto('/login.html?profile=ENGLISH');
        // Assert
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.VeryfyTextLabels(labelLoginEn, labelHasloEn, btnLoginEn);
    });

    test('Profile DROPDOWN default language on the login page', async ({ page }) => {
        // Arrange
        const labelLoginPl = 'Login';
        const labelHasloPl = 'Hasło';
        const btnLoginPl = 'Zaloguj';
        const selectLanguage = 'English';
        const labelLoginEn = 'Login';
        const labelHasloEn = 'Password';
        const btnLoginEn = 'Log in';
        // Act
        await page.goto('/login.html?profile=DROPDOWN');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.VeryfyTextLabels(labelLoginPl, labelHasloPl, btnLoginPl);
        await loginPanelPage.ChangeLanguageTo(selectLanguage);
        // Assert
        await loginPanelPage.VeryfyTextLabels(labelLoginEn, labelHasloEn, btnLoginEn);
    });

    test('Default language in the menu after logging in', async ({ page }) => {
        // Arrange
        const user = loginData.user;
        const password = loginData.password;
        const department = loginData.department;
        const language = loginData.language;
        const labelOptionLogout = 'Wyloguj';
        const labelOptionChangePassword = 'Zmień hasło';
        const labelOptionMobileDevice = 'Urządzenie mobilne';
        const labelOptionDesktopDevice = 'Komputer';
        const labelOptionRefresh = 'Odśwież połączenia do BD';
        // Act
        await page.goto('/');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(user, password, department, language);
        // Assert
        const pulpitPage = new PulpitPage(page);
        await pulpitPage.OpenMenuOption();
        await pulpitPage.VerifyMenuLabels(labelOptionLogout, labelOptionChangePassword, labelOptionMobileDevice, labelOptionDesktopDevice, labelOptionRefresh);
    });

    test('English language in the menu after logging in', async ({ page }) => {
        // Arrange
        const user = loginData.user;
        const password = loginData.password;
        const department = loginData.department;
        const language = loginData.language;
        const labelOptionLogout = 'Log out';
        const labelOptionChangePassword = 'Change password';
        const labelOptionMobileDevice = 'Mobile device';
        const labelOptionDesktopDevice = 'Desktop';
        const labelOptionRefresh = 'Refresh database connections';
        // Act
        await page.goto('/login.html?profile=ENGLISH');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(user, password, department, language);
        // Assert
        const pulpitPage = new PulpitPage(page);
        await pulpitPage.OpenMenuOption();
        await pulpitPage.VerifyMenuLabels(labelOptionLogout, labelOptionChangePassword, labelOptionMobileDevice, labelOptionDesktopDevice, labelOptionRefresh);
    });

    test('Logged user and new tab', async ({ page }) => {
        // Arrange
        const user = loginData.user;
        const password = loginData.password;
        const department = loginData.department;
        const language = loginData.language;
        // Act
        await page.goto('');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(user, password, department, language);

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
        const department = loginData.department;
        const language = loginData.language;
        // Act
        await page.goto('');
        const loginPanelPage = new LoginPanelPage(page);
        await loginPanelPage.CorrectLogin(user, password, department, language);
        // Assert
        const menuNavigatorComponent = new MenuNavigatorComponent(page);
        await expect(menuNavigatorComponent.techTestComponent.techTest).toBeVisible();
    });
});