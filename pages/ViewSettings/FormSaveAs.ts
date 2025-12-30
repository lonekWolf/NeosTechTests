import { Locator, Page } from "@playwright/test";

export class FormSaveAs {
    readonly formSaveAs: Locator;
    readonly inputViewName: Locator;
    readonly checkboxPublic: Locator;
    readonly checkboxPredef: Locator;
    readonly btnSave: Locator;

    constructor(private page: Page) {
        this.formSaveAs = this.page.locator(`.k-window-content`).last();
        this.inputViewName = this.formSaveAs.locator(`.Field__name input`);
        this.checkboxPublic = this.formSaveAs.locator(`.Field__is_public label`);
        this.checkboxPredef = this.formSaveAs.locator(`.Field__is_predefined label`);
        this.btnSave = this.page.getByRole('button', { name: ' Zapisz' }).last();
    }
}

