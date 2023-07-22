import { Page, expect } from "@playwright/test";
import { gridData } from "../../test-data/Grid/Grid.Data";

export class AddNewRecordPage {
    constructor(private page: Page) { }
    // Login form
    private formName = this.page.locator('.tableHeader'); //weryfikować 
    private btnAddNewRecord = this.page.getByRole('button', { name: ' Dołącz' });

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
    private btnAdd = this.page.getByRole('button', { name: ' Zapisz' });

    // Table added row
    private addedRow = this.page.locator('tbody > tr:nth-child(2)');
    private aRef = this.page.locator('tbody > tr:nth-child(2) > td:nth-child(2) > span').nth(0);
    private aFSmallint = this.page.locator('tbody > tr:nth-child(2) > td:nth-child(3) > span').nth(1);
    private afInteger = this.page.locator('tbody > tr:nth-child(2) > td:nth-child(4) > span').nth(1);
    private afBigint = this.page.locator('tbody > tr:nth-child(2) > td:nth-child(5) > span').nth(1);
    private afNumeric = this.page.locator('tbody > tr:nth-child(2) > td:nth-child(6) > span').nth(1);


    private afFloat = this.page.locator('tbody > tr:nth-child(2) > td:nth-child(7) > span').first();;
    private afDouble = this.page.locator('tbody > tr:nth-child(2) > td:nth-child(8) > span').nth(1);
    private afTimestamp = this.page.locator('tbody > tr:nth-child(2) > td:nth-child(9) > span').nth(0);
    private afDate = this.page.locator('tbody > tr:nth-child(2) > td:nth-child(10) > span').nth(1);
    private afString = this.page.locator('tbody > tr:nth-child(2) > td:nth-child(11) > span').nth(1);
    private afTextBlob = this.page.locator('tbody > tr:nth-child(2) > td:nth-child(12) > span').nth(1);

    private async VeryfyFormName(formName): Promise<void> {
        await expect.soft(this.formName).toContainText(formName);
    }

    private async AddNewRecord(): Promise<void> {
        await this.fSmallint.fill(gridData.fSmallint);
        await this.fInteger.fill(gridData.fInteger);
        await this.fBigint.fill(gridData.fBigint);
        await this.fNumeric.fill(gridData.fNumeric);
        await this.fFloat.fill(gridData.fFloat);
        await this.fDouble.fill(gridData.fDouble);
        await this.fTimestamp.fill(gridData.fTimestamp);
        await this.fDate.fill(gridData.fDate);
        await this.fString.fill(gridData.fString);
        await this.fTextBlob.fill(gridData.fTextBlob);
    }

    async ClickBtnAndAddNewRecord(formName: string): Promise<void> {
        await this.VeryfyFormName(formName);
        await this.btnAddNewRecord.click();
        await this.page.locator('.k-window-titlebar').waitFor({
            state: "visible"
        })
        await this.AddNewRecord();
        await this.btnAdd.click();
    }

    async VeryfyGridAfterRecordAdded(): Promise<void> {
        await this.addedRow.waitFor({
            state: 'visible'
        })
        await expect.soft(this.aRef).toHaveText('2');
        await expect.soft(this.aFSmallint).toHaveText(gridData.fSmallint);
        await expect.soft(this.afInteger).toHaveText(gridData.fInteger);
        await expect.soft(this.afBigint).toHaveText(gridData.fBigint);
        await expect.soft(this.afNumeric).toHaveText(gridData.fNumeric);
        await expect.soft(this.afFloat).toHaveText('1111.12');
        await expect.soft(this.afDouble).toHaveText('1111111111.12');
        await expect.soft(this.afTimestamp).toHaveText('27-10-2020 00:00:00');
        await expect.soft(this.afDate).toHaveText('25-10-2020');
        await expect.soft(this.afString).toHaveText(gridData.fString);
        await expect.soft(this.afTextBlob).toHaveText(gridData.fTextBlob);
    }

}
