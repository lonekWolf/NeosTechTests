import { Locator, Page, expect } from "@playwright/test";

export class GridFilterPage {
    //Panel input validation 
    readonly searchTextInput: Locator;
    readonly searchTextIcon: Locator;
    readonly searchClearButton: Locator;
    readonly balloonHintMessage: Locator;
    readonly gridNoData: Locator;
    private delay = ms => new Promise(res => setTimeout(res, ms));

    constructor(private page: Page) {
        //Panel input validation 
        this.searchTextInput = this.page.locator('.search-text input');
        this.searchTextIcon = this.page.locator('.SGRID-SEARCH');
        this.searchClearButton = this.page.locator('.SGRID-SEARCH button');
        this.balloonHintMessage = this.page.locator('.notificationBoxBodyMessage');
        this.gridNoData = this.page.locator('.k-grid-nodata');
    }

    async VerifyBalloonHintMessage(balloonHintMessage: string): Promise<void> {
        await expect(this.balloonHintMessage).toHaveText(balloonHintMessage);
    }

    async VerifyNoData(): Promise<void> {
        await expect(this.gridNoData).toHaveText('Brak danych do wyświetlenia');
    }

    async Search(stringToFind: string): Promise<void> {
        await this.searchTextIcon.click();
        await this.searchTextInput.fill(stringToFind);
        await this.page.keyboard.press('Enter');
        await this.delay(500);

    }

    async VerifyNumbers(): Promise<void> {
        for (let number = 0; number < 10; number++) {
            await this.Search(String(number));
            await expect(this.gridNoData).not.toBeVisible();
            await this.searchClearButton.click();
            await this.delay(500);
        }
    }

    async VerifyLetters(letters: string[]): Promise<void> {
        for (let index = 0; index < letters.length; index++) {
            await this.Search(letters[index]);
            await expect(this.gridNoData).not.toBeVisible();
            await expect(this.page.locator('.k-state-selected .inner-cell').nth(1)).toContainText(letters[index]);
            await this.searchClearButton.click();
            await this.delay(500);
        }
    }
}