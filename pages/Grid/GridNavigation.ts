import { Page, expect } from "@playwright/test";

export class GridNavigationPage {
    constructor(private page: Page) { }
    //Action buttons
    private btnFindRecord = this.page.getByRole('button', { name: ' Find record' });
    private btnFirstRecord = this.page.getByRole('button', { name: ' First record' });
    private btnPreviousRecord = this.page.getByRole('button', { name: ' Previous record' });
    private btnNextRecord = this.page.getByRole('button', { name: ' Next record' });
    private btnLastRecord = this.page.getByRole('button', { name: ' Last record' });
    private FindRecordResualt = this.page.locator('.Field__selectionbool > div > input');
    private RecordToFind = this.page.locator('.Field__recordtofind > div > input');
    private nRefValue = this.page.locator('.Field_REF > div > input').first();

    async FindRecord(recordToFind: string): Promise<void> {
        await this.RecordToFind.fill(recordToFind);
        await this.btnFindRecord.click();
    }

    async VerifyFindRecordTrue(recordToFind: string): Promise<void> {
        await expect(this.nRefValue).toHaveValue(recordToFind);
    }

    async VerifyFindRecordFalse(recordToFind: string): Promise<void> {
        await expect(this.nRefValue).not.toHaveValue(recordToFind);
    }
}