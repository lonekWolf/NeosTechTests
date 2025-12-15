export const LoginData = {
    // CorrectLogin - loaded from environment variables
    user: process.env.LOGIN_USER || '',
    password: process.env.LOGIN_PASSWORD || '',
}

export const menuLabelsData = {
    labelOptionLogoutPL: 'Wyloguj',
    labelOptionChangePasswordPL: 'Zmień hasło',
    labelOptionMobileDevicePL: 'Urządzenie mobilne',
    labelOptionDesktopDevicePL: 'Komputer',
    labelOptionRefreshPL: 'Odśwież połączenia do BD',
    labelOptionLogoutEn: 'Log out',
    labelOptionChangePasswordEn: 'Change password',
    labelOptionMobileDeviceEn: 'Mobile device',
    labelOptionDesktopDeviceEn: 'Desktop',
    labelOptionRefreshEn: 'Refresh database connections',
    labelLoginPl: 'Login',
    labelHasloPl: 'Hasło',
    btnLoginPl: 'Zaloguj',
    labelLoginEn: 'Login',
    labelHasloEn: 'Password',
    btnLoginEn: 'Log in',
    selectLanguage: 'English',
}

export const wrongLogins = {
    user: process.env.WRONG_LOGIN_USER || '',
    password: process.env.WRONG_LOGIN_PASSWORD || '',
    userToBlock: process.env.WRONG_LOGIN_USER_TO_BLOCK || '',
    allertMessageEN: `Couldn't log in`,
    alertMessagePL: 'Nie udało się zalogować',
    alertMessageAfterBlocking: 'Zablokowano możliwość logowania z powodu 3 nieudanych prób. Ponowne logowanie będzię możliwe dopiero za',
}
