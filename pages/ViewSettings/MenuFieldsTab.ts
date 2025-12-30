import { Locator, Page } from "@playwright/test";

export class MenuFieldsTab {
    readonly fieldsTable: Locator;
    readonly fieldRef: Locator;
    readonly fieldSmallint: Locator;
    readonly fieldInteger: Locator;
    readonly fieldBigint: Locator;
    readonly fieldString: Locator;
    readonly fieldWyliczane: Locator;
    readonly fieldNumeric: Locator;
    readonly fieldFloat: Locator;
    readonly fieldDouble: Locator;

    constructor(private page: Page) {
        this.fieldsTable = this.page.locator(`.SWINDOWFORM tbody`);
        this.fieldRef = this.fieldsTable.locator(`tr:nth-child(1) td:nth-child(2)`);
        this.fieldSmallint = this.fieldsTable.locator(`tr:nth-child(2) td:nth-child(2)`);
        this.fieldInteger = this.fieldsTable.locator(`tr:nth-child(3) td:nth-child(2)`);
        this.fieldBigint = this.fieldsTable.locator(`tr:nth-child(4) td:nth-child(2)`);
        this.fieldString = this.fieldsTable.locator(`tr:nth-child(5) td:nth-child(2)`);
        this.fieldWyliczane = this.fieldsTable.locator(`tr:nth-child(6) td:nth-child(2)`);
        this.fieldNumeric = this.fieldsTable.locator(`tr:nth-child(7) td:nth-child(2)`);
        this.fieldFloat = this.fieldsTable.locator(`tr:nth-child(8) td:nth-child(2)`);
        this.fieldDouble = this.fieldsTable.locator(`tr:nth-child(9) td:nth-child(2)`);
    }
}

