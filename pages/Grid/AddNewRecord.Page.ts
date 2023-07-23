import { Page, expect } from "@playwright/test";
import { addNewRecord, editRecord } from "../../test-data/Grid/Grid.Data";

export class AddNewRecordPage {
    constructor(private page: Page) { }
    // Login form
    private formName = this.page.locator('.tableHeader'); //weryfikować 
    private btnAddNewRecord = this.page.getByRole('button', { name: ' Dołącz' });
    private btnEditRecord = this.page.getByRole('button', { name: ' Popraw' });

    // Edit form
    private fSmallint = this.page.locator('.panelBorder.marginfix.SPANELCONTENT > .Field_FSMALLINT  > .SACTIONCONTAINER > input').last();
    private fInteger = this.page.locator('.panelBorder.marginfix.SPANELCONTENT > .Field_FINTEGER > .SACTIONCONTAINER > input').last();
    private fBigint = this.page.locator('.panelBorder.marginfix.SPANELCONTENT > .Field_FBIGINT  > .SACTIONCONTAINER > input').last();
    private fNumeric = this.page.locator('.panelBorder.marginfix.SPANELCONTENT > .Field_FNUMERIC  > .SACTIONCONTAINER > div > span > span > input').nth(2);
    private fFloat = this.page.locator('.panelBorder.marginfix.SPANELCONTENT > .Field_FFLOAT  > .SACTIONCONTAINER > div > span > span > input').nth(2);
    private fDouble = this.page.locator('.panelBorder.marginfix.SPANELCONTENT > .Field_FDOUBLE  > .SACTIONCONTAINER > div > span > span > input').nth(2);
    private fTimestamp = this.page.locator('.panelBorder.marginfix.SPANELCONTENT > .Field_FTIMESTAMP > .SACTIONCONTAINER > span > span > input').last();
    private fDate = this.page.locator('.panelBorder.marginfix.SPANELCONTENT > .Field_FDATE > .SACTIONCONTAINER> div > span > span > input').last();
    private fString = this.page.locator('.panelBorder.marginfix.SPANELCONTENT > .Field_FSTRING > .SACTIONCONTAINER > input').last();
    private fTextBlob = this.page.locator('.panelBorder.marginfix.SPANELCONTENT > .Field_FTEXTBLOB  > .SACTIONCONTAINER > textarea');
    private btnSave = this.page.getByRole('button', { name: ' Zapisz' }).last();

    // Table added row
    private addedRow = this.page.locator('tbody > tr:nth-child(2)');
    private aRef = this.addedRow.locator('span').nth(0);
    private aFSmallint = this.addedRow.locator('td:nth-child(3) > span').nth(1);
    private afInteger = this.addedRow.locator('td:nth-child(4) > span').nth(1);
    private afBigint = this.addedRow.locator('td:nth-child(5) > span').nth(1);
    private afNumeric = this.addedRow.locator('td:nth-child(6) > span').nth(1);
    private afFloat = this.addedRow.locator('td:nth-child(7) > span').first();;
    private afDouble = this.addedRow.locator('td:nth-child(8) > span').nth(1);
    private afTimestamp = this.addedRow.locator('td:nth-child(9) > span').nth(1);
    private afDate = this.addedRow.locator('td:nth-child(10) > span').nth(1);
    private afString = this.addedRow.locator('td:nth-child(11) > span').nth(1);
    private afTextBlob = this.addedRow.locator('td:nth-child(12) > span').nth(1);

    // Table edited row
    private editedRow = this.page.locator('tbody > tr:nth-child(1)');
    private eRef = this.editedRow.locator('span').nth(0);
    private eFSmallint = this.editedRow.locator('td:nth-child(3) > span').nth(1);
    private efInteger = this.editedRow.locator('td:nth-child(4) > span').nth(1);
    private efBigint = this.editedRow.locator('td:nth-child(5) > span').nth(1);
    private efNumeric = this.editedRow.locator('td:nth-child(6) > span').nth(1);
    private efFloat = this.editedRow.locator('td:nth-child(7) > span').first();;
    private efDouble = this.editedRow.locator('td:nth-child(8) > span').nth(1);
    private efTimestamp = this.editedRow.locator('td:nth-child(9) > span').nth(1);
    private efDate = this.editedRow.locator('td:nth-child(10) > span').nth(1);
    private efString = this.editedRow.locator('td:nth-child(11) > span').nth(1);
    private efTextBlob = this.editedRow.locator('td:nth-child(12) > span').nth(1);

    private async VeryfyFormName(formName): Promise<void> {
        await expect.soft(this.formName).toContainText(formName);
    }

    private async AddNewRecord(): Promise<void> {
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
        await this.VeryfyFormName(formName);
        await this.btnAddNewRecord.click();
        await this.page.locator('.k-window-titlebar').waitFor({
            state: "visible"
        })
        await this.AddNewRecord();
        await this.btnSave.click();
        await this.page.locator('.k-window-titlebar').waitFor({
            state: "hidden"
        })
    }

    async VeryfyGridAfterRecordAdded(): Promise<void> {
        await this.addedRow.waitFor({
            state: 'visible'
        })
        await expect.soft(this.aRef).toHaveText('2');
        // await expect.soft(this.aFSmallint).toHaveText(addNewRecord.fSmallint);
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
        await this.VeryfyFormName(formName);
        await this.btnEditRecord.click();
        await this.page.locator('.k-window-titlebar').waitFor({
            state: "visible"
        })
        await this.EditRecord();
        await this.page.locator('.k-window-titlebar').waitFor({
            state: "hidden"
        })
    }

    async EditRecord(): Promise<void> {
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

    async VeryfyGridAfterRecordEdited(): Promise<void> {
        await expect.soft(this.eRef).toHaveText('1');
        // await expect.soft(this.eFSmallint).toHaveText(editRecord.fSmallint);
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

}
