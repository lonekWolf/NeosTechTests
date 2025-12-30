import { Locator, Page, expect } from "@playwright/test";

export class GridNavigationPage {
    //Action buttons
    readonly btnFindRecord: Locator;
    readonly btnFirstRecord: Locator;
    readonly btnPreviousRecord: Locator;
    readonly btnNextRecord: Locator;
    readonly btnLastRecord: Locator;
    readonly findRecordResult: Locator;
    readonly recordToFind: Locator;
    readonly nRefValue: Locator;

    constructor(private page: Page) {
        //Action buttons
        this.btnFindRecord = this.page.getByRole('button', { name: ' Find record' });
        this.btnFirstRecord = this.page.getByRole('button', { name: ' First record' });
        this.btnPreviousRecord = this.page.getByRole('button', { name: ' Previous record' });
        this.btnNextRecord = this.page.getByRole('button', { name: ' Next record' });
        this.btnLastRecord = this.page.getByRole('button', { name: ' Last record' });
        this.findRecordResult = this.page.locator('.Field__selectionbool > div > input');
        this.recordToFind = this.page.locator('.Field__recordtofind > div > input');
        this.nRefValue = this.page.locator('.Field_REF > div > input').first();
    }

    async FindRecord(recordToFind: string): Promise<void> {
        await this.recordToFind.fill(recordToFind);
        await this.btnFindRecord.click();
    }

    async VerifyFindRowRecordTrue(recordToFind: string): Promise<void> {
        await expect(this.nRefValue).toHaveValue(recordToFind);
    }

    async VerifyFindRowRecordFalse(recordToFind: string): Promise<void> {
        await expect(this.nRefValue).not.toHaveValue(recordToFind);
    }

    async VerifyFindRecordResult(recordToFind: string): Promise<void> {
        await expect(this.findRecordResult).toHaveValue(recordToFind);
    }

    async ActionFirstButtonClick(): Promise<void> {
        await this.btnFirstRecord.click();
    }

    async ActionLastButtonClick(): Promise<void> {
        await this.btnLastRecord.click();
    }

    async ActionNextRecord(): Promise<void> {
        await this.btnNextRecord.click();
    }

    async ActionLastAndNextRecord(): Promise<void> {
        await this.btnLastRecord.click();
        await this.btnNextRecord.click();
    }

    async ActionLastAndPreviousRecord(): Promise<void> {
        await this.btnLastRecord.click();
        await this.btnPreviousRecord.click();
    }

    async ActionFirstAndPreviousRecord(): Promise<void> {
        await this.btnFirstRecord.click();
        await this.btnPreviousRecord.click();
    }
}