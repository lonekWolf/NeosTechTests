import { Locator, Page, expect } from "@playwright/test";
import { addNewRecord, editRecord } from "../../test-data/Grid/Grid.Data";

export class AddNewRecordPage {
    // Add new record form
    readonly formName: Locator;
    readonly btnAddNewRecord: Locator;
    readonly btnEditRecord: Locator;
    readonly btnDeleteRecord: Locator;

    // Edit form
    readonly fSmallint: Locator;
    readonly fInteger: Locator;
    readonly fBigint: Locator;
    readonly fNumeric: Locator;
    readonly fFloat: Locator;
    readonly fDouble: Locator;
    readonly fTimestamp: Locator;
    readonly fDate: Locator;
    readonly fString: Locator;
    readonly fTextBlob: Locator;
    readonly btnSave: Locator;

    // Table added row
    readonly addedRow: Locator;
    readonly aRef: Locator;
    readonly aFSmallint: Locator;
    readonly afInteger: Locator;
    readonly afBigint: Locator;
    readonly afNumeric: Locator;
    readonly afFloat: Locator;
    readonly afDouble: Locator;
    readonly afTimestamp: Locator;
    readonly afDate: Locator;
    readonly afString: Locator;
    readonly afTextBlob: Locator;

    // Table edited row
    readonly editedRow: Locator;
    readonly eRef: Locator;
    readonly eFSmallint: Locator;
    readonly efInteger: Locator;
    readonly efBigint: Locator;
    readonly efNumeric: Locator;
    readonly efFloat: Locator;
    readonly efDouble: Locator;
    readonly efTimestamp: Locator;
    readonly efDate: Locator;
    readonly efString: Locator;
    readonly efTextBlob: Locator;

    constructor(private page: Page) {
        // Add new record form
        this.formName = this.page.locator('.tableHeader');
        this.btnAddNewRecord = this.page.getByRole('button', { name: ' Dołącz' });
        this.btnEditRecord = this.page.getByRole('button', { name: ' Popraw' });
        this.btnDeleteRecord = this.page.getByRole('button', { name: ' Usuń' });

        // Edit form
        this.fSmallint = this.page.locator('.panelBorder.marginfix.SPANELCONTENT > .Field_FSMALLINT  > .SACTIONCONTAINER > input').last();
        this.fInteger = this.page.locator('.panelBorder.marginfix.SPANELCONTENT > .Field_FINTEGER > .SACTIONCONTAINER > input').last();
        this.fBigint = this.page.locator('.panelBorder.marginfix.SPANELCONTENT > .Field_FBIGINT  > .SACTIONCONTAINER > input').last();
        this.fNumeric = this.page.locator('.panelBorder.marginfix.SPANELCONTENT > .Field_FNUMERIC  > .SACTIONCONTAINER > div > span > span > input').nth(2);
        this.fFloat = this.page.locator('.panelBorder.marginfix.SPANELCONTENT > .Field_FFLOAT  > .SACTIONCONTAINER > div > span > span > input').nth(2);
        this.fDouble = this.page.locator('.panelBorder.marginfix.SPANELCONTENT > .Field_FDOUBLE  > .SACTIONCONTAINER > div > span > span > input').nth(2);
        this.fTimestamp = this.page.locator('.panelBorder.marginfix.SPANELCONTENT > .Field_FTIMESTAMP > .SACTIONCONTAINER > span > span > input').last();
        this.fDate = this.page.locator('.panelBorder.marginfix.SPANELCONTENT > .Field_FDATE > .SACTIONCONTAINER> div > span > span > input').last();
        this.fString = this.page.locator('.panelBorder.marginfix.SPANELCONTENT > .Field_FSTRING > .SACTIONCONTAINER > input').last();
        this.fTextBlob = this.page.locator('.panelBorder.marginfix.SPANELCONTENT > .Field_FTEXTBLOB  > .SACTIONCONTAINER > textarea');
        this.btnSave = this.page.getByRole('button', { name: ' Zapisz' }).last();

        // Table added row
        this.addedRow = this.page.locator('tbody > tr:nth-child(2)');
        this.aRef = this.addedRow.locator('span').nth(0);
        this.aFSmallint = this.addedRow.locator('td:nth-child(3) > span').nth(1);
        this.afInteger = this.addedRow.locator('td:nth-child(4) > span').nth(1);
        this.afBigint = this.addedRow.locator('td:nth-child(5) > span').nth(1);
        this.afNumeric = this.addedRow.locator('td:nth-child(6) > span').nth(1);
        this.afFloat = this.addedRow.locator('td:nth-child(7) > span').first();;
        this.afDouble = this.addedRow.locator('td:nth-child(8) > span').nth(1);
        this.afTimestamp = this.addedRow.locator('td:nth-child(9) > span').nth(1);
        this.afDate = this.addedRow.locator('td:nth-child(10) > span').nth(1);
        this.afString = this.addedRow.locator('td:nth-child(11) > span').nth(1);
        this.afTextBlob = this.addedRow.locator('td:nth-child(12) > span').nth(1);

        // Table edited row
        this.editedRow = this.page.locator('tbody > tr:nth-child(1)');
        this.eRef = this.editedRow.locator('span').nth(0);
        this.eFSmallint = this.editedRow.locator('td:nth-child(3) > span').nth(1);
        this.efInteger = this.editedRow.locator('td:nth-child(4) > span').nth(1);
        this.efBigint = this.editedRow.locator('td:nth-child(5) > span').nth(1);
        this.efNumeric = this.editedRow.locator('td:nth-child(6) > span').nth(1);
        this.efFloat = this.editedRow.locator('td:nth-child(7) > span').first();;
        this.efDouble = this.editedRow.locator('td:nth-child(8) > span').nth(1);
        this.efTimestamp = this.editedRow.locator('td:nth-child(9) > span').nth(1);
        this.efDate = this.editedRow.locator('td:nth-child(10) > span').nth(1);
        this.efString = this.editedRow.locator('td:nth-child(11) > span').nth(1);
        this.efTextBlob = this.editedRow.locator('td:nth-child(12) > span').nth(1);
    }

    private async VerifyFormName(formName): Promise<void> {
        await expect.soft(this.formName).toContainText(formName);
    }

    private async AddNewRecord(): Promise<void> {
        await this.page.locator('.k-window-titlebar').click();
        await this.fSmallint.fill(addNewRecord.fSmallint);
        await this.fInteger.fill(addNewRecord.fInteger);
        await this.fBigint.fill(addNewRecord.fBigint);
        await this.fNumeric.fill(addNewRecord.fNumeric);
        await this.fFloat.fill(addNewRecord.fFloat);
        await this.fDouble.fill(addNewRecord.fDouble);
        await this.fTimestamp.fill(addNewRecord.fTimestamp);
        await this.fDate.fill(addNewRecord.fDate);
        await this.fString.fill(addNewRecord.fString);
        await this.fTextBlob.fill(addNewRecord.fTextBlob);
    }

    async ClickBtnAndAddNewRecord(formName: string): Promise<void> {
        await this.VerifyFormName(formName);
        await this.btnAddNewRecord.click();
        await this.AddNewRecord();
        await this.btnSave.click();
        await this.page.locator('.k-window-titlebar').waitFor({
            state: "hidden"
        })
    }

    async VerifyGridAfterRecordAdded(): Promise<void> {
        await this.addedRow.waitFor({
            state: 'visible'
        })
        await expect.soft(this.aRef).toHaveText('2');
        await expect.soft(this.aFSmallint).toHaveText(addNewRecord.fSmallint);
        await expect.soft(this.afInteger).toHaveText(addNewRecord.fInteger);
        await expect.soft(this.afBigint).toHaveText(addNewRecord.fBigint);
        await expect.soft(this.afNumeric).toHaveText(addNewRecord.fNumeric);
        await expect.soft(this.afFloat).toHaveText('1111.12');
        await expect.soft(this.afDouble).toHaveText('1111111111.12');
        // await expect.soft(this.afTimestamp).toHaveText('27-10-2020 00:00:00');
        await expect.soft(this.afDate).toHaveText('25-10-2020');
        await expect.soft(this.afString).toHaveText(addNewRecord.fString);
        await expect.soft(this.afTextBlob).toHaveText(addNewRecord.fTextBlob);
    }

    async ClickBtnAndEditRecord(formName: string): Promise<void> {
        await this.VerifyFormName(formName);
        await this.btnEditRecord.click();
        await this.EditRecord();
        await this.page.locator('.k-window-titlebar').waitFor({
            state: "hidden"
        })
    }

    async EditRecord(): Promise<void> {
        await this.page.locator('.k-window-titlebar').click();
        await this.fSmallint.fill(editRecord.fSmallint);
        await this.fInteger.fill(editRecord.fInteger);
        await this.fBigint.fill(editRecord.fBigint);
        await this.fNumeric.fill(editRecord.fNumeric);
        await this.fFloat.fill(editRecord.fFloat);
        await this.fDouble.fill(editRecord.fDouble);
        await this.fTimestamp.fill(editRecord.fTimestamp);
        await this.fDate.fill(editRecord.fDate);
        await this.fString.fill(editRecord.fString);
        await this.fTextBlob.fill(editRecord.fTextBlob);
        await this.btnSave.click();
        await this.page.locator('.k-window-titlebar').waitFor({
            state: "hidden"
        })
    }

    async VerifyGridAfterRecordEdited(): Promise<void> {
        await expect.soft(this.eRef).toHaveText('1');
        await expect.soft(this.eFSmallint).toHaveText(editRecord.fSmallint);
        await expect.soft(this.efInteger).toHaveText(editRecord.fInteger);
        await expect.soft(this.efBigint).toHaveText(editRecord.fBigint);
        await expect.soft(this.efNumeric).toHaveText(editRecord.fNumeric);
        await expect.soft(this.efFloat).toHaveText('1111.12');
        await expect.soft(this.efDouble).toHaveText('1111119999.12');
        // await expect.soft(this.efTimestamp).toHaveText('24-12-2020 00:00:00');
        await expect.soft(this.efDate).toHaveText('24-12-2020');
        await expect.soft(this.efString).toHaveText(editRecord.fString);
        await expect.soft(this.efTextBlob).toHaveText(editRecord.fTextBlob);
    }

    private async ConfirmDeleteRecord(): Promise<void> {
        await expect(this.page.getByText('Na pewno usunąć rekord?')).toBeVisible();
        await this.page.getByRole('button', { name: 'Tak' }).click();
    }

    async ClickRowRecordAndDelete(rowNumber: string): Promise<void> {
        const rowToDelete = this.page.locator(`//table//span[text()='${rowNumber}' and @class = 'inner-cell']`);
        await rowToDelete.click();
        await this.page.waitForSelector('//*[contains(@class, \'Field_REF\')]//*[contains(input, ' + rowNumber + ')]');
        await this.btnDeleteRecord.click();
        await this.ConfirmDeleteRecord();
    }

    async VerifyGridAfterDeleteRecord(rowNumber: string): Promise<void> {
        expect(this.page.locator(`//table//span[text()='${rowNumber}' and @class = 'inner-cell']`)).not.toBe({});
    }

}
