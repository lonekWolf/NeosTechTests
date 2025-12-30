import { Locator, Page } from "@playwright/test";

export class SetFocusComponent {
    readonly setFocus: Locator;
    readonly zagniezdzonaForma: Locator;
    readonly dialogoweEdit: Locator;
    readonly focusButton: Locator;
    readonly focusFieldEdit: Locator;
    readonly mdiEdit: Locator;
    readonly focusField: Locator;
    readonly focusParameter: Locator;
    readonly glowneOkno: Locator;
    readonly focusParameterEdit: Locator;

    constructor(private page: Page) {
        this.setFocus = this.page.locator('a').filter({ hasText: 'SSetFocus' });
        this.zagniezdzonaForma = this.page.locator('a').filter({ hasText: 'SetFocus - zagnieżdżona forma' });
        this.dialogoweEdit = this.page.locator('a').filter({ hasText: 'SetFocus - Dialogowe Edit' });
        this.focusButton = this.page.locator('a').filter({ hasText: 'SetFocus - focus button' });
        this.focusFieldEdit = this.page.locator('a').filter({ hasText: 'SetFocus - Focus field edit' });
        this.mdiEdit = this.page.locator('a').filter({ hasText: 'SetFocus - MDI edit' });
        this.focusField = this.page.locator('a').filter({ hasText: /^SetFocus - focus field$/ });
        this.focusParameter = this.page.locator('a').filter({ hasText: /^SetFocus - focus parameter$/ });
        this.glowneOkno = this.page.locator('a').filter({ hasText: 'SetFocus - główne okno' });
        this.focusParameterEdit = this.page.locator('a').filter({ hasText: 'SetFocus - Focus parameter edit' });
    }
}
