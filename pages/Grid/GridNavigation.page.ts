import { Page, expect } from "@playwright/test";

export class GridNavigationPage {
    constructor(private page: Page) { }
    //Action buttons
    private btnFindRecord = this.page.getByRole('button', { name: ' Find record' });
    private btnFirstRecord = this.page.getByRole('button', { name: ' First record' });
    private btnPreviousRecord = this.page.getByRole('button', { name: ' Previous record' });
    private btnNextRecord = this.page.getByRole('button', { name: ' Next record' });
    private btnLastRecord = this.page.getByRole('button', { name: ' Last record' });
    private findRecordResualt = this.page.locator('.Field__selectionbool > div > input');
    private recordToFind = this.page.locator('.Field__recordtofind > div > input');
    private nRefValue = this.page.locator('.Field_REF > div > input').first();

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

    async VerifyFindRecordResualt(recordToFind: string): Promise<void> {
        await expect(this.findRecordResualt).toHaveValue(recordToFind);
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