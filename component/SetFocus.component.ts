export class SetFocusComponent {
    constructor(private page) {
        const setFocus = this.page.getByText('SSetFocus');
        setFocus.click();
    }
    zagniezdzonaForma = this.page.locator('a').filter({ hasText: 'SetFocus - zagnieżdżona forma' });
    dialogoweEdit = this.page.locator('a').filter({ hasText: 'SetFocus - Dialogowe Edit' });
    focusButton = this.page.locator('a').filter({ hasText: 'SetFocus - focus button' });
    focusFieldEdit = this.page.locator('a').filter({ hasText: 'SetFocus - Focus field edit' });
    focusField = this.page.locator('a').filter({ hasText: 'SetFocus - focus field' });
    focusParameter = this.page.locator('a').filter({ hasText: 'SetFocus - focus parameter' });
    glowneOkno = this.page.locator('a').filter({ hasText: 'SetFocus - główne okno' });
    focusParameterEdit = this.page.locator('a').filter({ hasText: 'SetFocus - Focus parameter edit' });
}