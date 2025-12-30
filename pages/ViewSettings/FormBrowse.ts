import { Locator, Page } from "@playwright/test";

export class FormBrowse {
    // Grid
    readonly columnRef: Locator;
    readonly columnSmallint: Locator;
    readonly columnInteger: Locator;
    readonly columnBigint: Locator;
    readonly columnString: Locator;
    readonly columnWyliczane: Locator;
    readonly columnNumeric: Locator;
    readonly columnFloat: Locator;
    readonly columnDouble: Locator;
    // FieldsValue
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
        // Grid
        this.columnRef = this.page.locator(`tr th:nth-child(2)`).first();
        this.columnSmallint = this.page.locator(`tr th:nth-child(3)`).first();
        this.columnInteger = this.page.locator(`tr th:nth-child(4)`).first();
        this.columnBigint = this.page.locator(`tr th:nth-child(5)`);
        this.columnString = this.page.locator(`tr th:nth-child(6)`);
        this.columnWyliczane = this.page.locator(`tr th:nth-child(7)`);
        this.columnNumeric = this.page.locator(`tr th:nth-child(8)`);
        this.columnFloat = this.page.locator(`tr th:nth-child(9)`);
        this.columnDouble = this.page.locator(`tr th:nth-child(10)`);
        // FieldsValue
        this.fieldRef = this.page.locator(`.Field_REF input`);
        this.fieldSmallint = this.page.locator(`.Field_FSMALLINT input`);
        this.fieldInteger = this.page.locator(`.Field_FINTEGER input`);
        this.fieldBigint = this.page.locator(`.Field_FBIGINT input`);
        this.fieldString = this.page.locator(`.Field_FSTRING input`);
        this.fieldWyliczane = this.page.locator(`.Field_WYLICZANE input`);
        this.fieldNumeric = this.page.locator(`.Field_FNUMERIC input`).first();
        this.fieldFloat = this.page.locator(`.Field_FFLOAT input`).first();
        this.fieldDouble = this.page.locator(`.Field_FDOUBLE input`).first();
    }
}

