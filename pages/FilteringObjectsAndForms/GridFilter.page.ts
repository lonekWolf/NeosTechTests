import { Locator, Page, expect } from "@playwright/test";

export class GridFilterPage {
    constructor(private page: Page) { }
    //Panel input validation 
    private refValue = this.page.locator('.Field_REF input');
    private fStringValue = this.page.locator('.Field_FSTRING input');
    private fBigIntValue = this.page.locator('.Field_FBIGINT input');
    private fDoubleValue = this.page.locator('.Field_FDOUBLE input');
    private fNumericValue = this.page.locator('.Field_FNUMERIC input');
    private searchTextInput = this.page.locator('.search-text input');
    private searchTextIcon = this.page.locator('.SGRID-SEARCH');
    private searchClearButton = this.page.locator('.SGRID-SEARCH button');
    private firstRecordRef = this.page.locator('.tr:nth-child(1) > td:nth-child(2)');
    private ballonhintMessage = this.page.locator('.notificationBoxBodyMessage');
    private gridNoData = this.page.locator('.k-grid-nodata');
    private delay = ms => new Promise(res => setTimeout(res, ms));

    async VeryfyBallonHintMessage(ballonhintMessage: string): Promise<void> {
        await expect(this.ballonhintMessage).toHaveText(ballonhintMessage);
    }

    async VeryfyNoData(): Promise<void> {
        await expect(this.gridNoData).toHaveText('Brak danych do wyświetlenia');
    }

    async Search(stringToFind: string): Promise<void> {
        await this.searchTextIcon.click();
        await this.searchTextInput.fill(stringToFind);
        await this.page.keyboard.press('Enter');
        await this.delay(500);

    }

    async VeryfyNumbers(): Promise<void> {
        for (let number = 0; number < 10; number++) {
            await this.Search(String(number));
            await expect(this.gridNoData).not.toBeVisible();
            await this.searchClearButton.click();
            await this.delay(500);
        }
    }

    async VeryfyLetters(letters: string[]): Promise<void> {
        for (let index = 0; index < letters.length; index++) {
            await this.Search(letters[index]);
            await expect(this.page.locator('.k-state-selected .inner-cell').nth(1)).toContainText(letters[index]);
            await this.searchClearButton.click();
            await this.delay(500);
        }
    }



}