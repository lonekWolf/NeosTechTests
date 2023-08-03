import { Locator, Page, expect } from "@playwright/test";
import { MenuNavigatorComponent } from "../../component/MenuNavigator.component";

export class ViewSettingPage {
    constructor(private page: Page) { }
    formBrowse = new FormBrowse(this.page);
    menuFieldsTab = new MenuFieldsTab(this.page);
    formSaveAs = new FormSaveAs(this.page);
    //  menu
    labelFormName = this.page.locator(`.tableHeader .SLABEL`).first();
    btnMenuTittleVS = this.page.locator(`.gridViewMenuButton span`).first();;
    labelViewSetting = this.page.locator(`.Object_ViewSettings .mediumLabel label.objectLabel`).first();
    defaultViewButton = this.page.locator(`.Object_ViewSettings .Action_LoadDefault button`);
    showSavedFiltersButtons = this.page.locator(`.Object_ViewSettings .Action_ShowSavedFilters button`);
    groupedActionsButtons = this.page.locator(`.Object_ViewSettings .Action_GroupedActions button`);
    btnSaveAs = this.page.locator(`.Object_ViewSettings .Action_SaveAs button`);
    //  zakładki
    fieldsTab = this.page.locator(`//*[contains(@class,'panelBox2')]//*[contains(text(),'Pola danych')]`).first();
    parametersTab = this.page.locator(`//*[contains(@class,'panelBox2')]//*[contains(text(),'Parametry')]`).first();
    filtersTab = this.page.locator(`//*[contains(@class,'panelBox2')]//*[contains(text(),'Filtry')]`).first();

    async ClickButtonAndSelectView(nameView: string): Promise<void> {
        await this.btnMenuTittleVS.click();
        await this.page.locator(`//*[contains(@class,'k-state-border-up')]//*[contains(text(),'${nameView}')]`).click()
    }

    async VerifyViewSettingMenuOpened(nameForm: string): Promise<void> {
        await this.labelViewSetting.waitFor({
            state: 'visible'
        })
        await expect(this.labelViewSetting).toHaveText(nameForm);
        await expect(this.fieldsTab).toBeVisible();
        await expect(this.btnSaveAs).toBeVisible();
        await expect(this.menuFieldsTab.fieldsTable.first()).toBeVisible();
    }

    async VerifyVisibleGridColumndBeforeTest() {
        await expect(this.formBrowse.columnNumeric).toBeVisible();
        await expect(this.formBrowse.columnFloat).toBeVisible();
        await expect(this.formBrowse.columnDouble).toBeVisible();
    }

    async VerifyVisibleGridColumndAfterTest() {
        await expect(this.formBrowse.columnNumeric).not.toBeVisible();
        await expect(this.formBrowse.columnFloat).not.toBeVisible();
        await expect(this.formBrowse.columnDouble).not.toBeVisible();
        await this.VerifyTittleStar();
    }

    async HideColumn(): Promise<void> {
        await this.menuFieldsTab.fieldNumeric.locator(`div div button:nth-child(1)`).click();
        await this.menuFieldsTab.fieldFloat.locator(`div div button:nth-child(1)`).click();
        await this.menuFieldsTab.fieldDouble.locator(`div div button:nth-child(1)`).click();
    }

    async VerifyTittleStar(): Promise<void> {
        await expect(this.labelFormName).toContainText('*');
        await expect(this.labelViewSetting).toContainText('*');
    }

    async ChangeTableSortingByGrid(columnSort: Locator): Promise<void> {
        await columnSort.click();
    }

    async ChangeTableSortingByViewSettings(columnSort: Locator): Promise<void> {
        await columnSort.locator(`div div button:nth-child(2)`).click();
    }
    async SaveView(viewName: string): Promise<void> {
        await this.btnSaveAs.click();
        await this.formSaveAs.inputViewName.fill(viewName);
        await this.formSaveAs.checkboxPublic.check();
        await this.formSaveAs.checkboxPredef.check();
        await this.page.waitForTimeout(1000);
        await this.formSaveAs.btnSave.click();
    }

    async DeleteView(expectedFormLabel: string): Promise<void> {
        await this.groupedActionsButtons.click();
        await this.page.getByText('Usuń widok').hover({ timeout: 1000 });
        await this.page.getByRole('menuitem', { name: ' Potwierdź usunięcie' }).click();
        await this.VeryfyFormLabel(expectedFormLabel);
    }

    async OpenNewTabAndVeryfyCreatedView(viewName: string, expectedFormLabel: string): Promise<void> {
        const nextPage = await this.page.context().newPage();
        await nextPage.goto('/');
        await this.page.waitForTimeout(2000);
        const menuNavigatorComponent = new MenuNavigatorComponent(nextPage);
        await menuNavigatorComponent.techTestComponent.viewSetting.viewSettingForm.click();
        const viewSetting = new ViewSettingPage(nextPage);
        await viewSetting.ClickButtonAndSelectView(viewName);
        await viewSetting.ClickButtonAndSelectView('Ustawienia widoku');
        await viewSetting.DeleteView(expectedFormLabel);
    }

    async VeryfyFormLabel(expectedFormLabel): Promise<void> {
        await expect(this.labelFormName).toContainText(expectedFormLabel);
    }
}

class FormBrowse {
    constructor(private page: Page) { }
    // Grid
    columnRef = this.page.locator(`tr th:nth-child(2)`).first();
    columnSmallint = this.page.locator(`tr th:nth-child(3)`).first();
    columnInteger = this.page.locator(`tr th:nth-child(4)`).first();
    columnBigint = this.page.locator(`tr th:nth-child(5)`);
    columnString = this.page.locator(`tr th:nth-child(6)`);
    columnWyliczane = this.page.locator(`tr th:nth-child(7)`);
    columnNumeric = this.page.locator(`tr th:nth-child(8)`);
    columnFloat = this.page.locator(`tr th:nth-child(9)`);
    columnDouble = this.page.locator(`tr th:nth-child(10)`);
    // FieldsValue
    fieldRef = this.page.locator(`.Field_REF input`);
    fieldSmallint = this.page.locator(`.Field_FSMALLINT input`);
    fieldInteger = this.page.locator(`.Field_FINTEGER input`);
    fieldBigint = this.page.locator(`.Field_FBIGINT input`);
    fieldString = this.page.locator(`.Field_FSTRING input`);
    fieldWyliczane = this.page.locator(`.Field_WYLICZANE input`);
    fieldNumeric = this.page.locator(`.Field_FNUMERIC input`).first();
    fieldFloat = this.page.locator(`.Field_FFLOAT input`).first();
    fieldDouble = this.page.locator(`.Field_FDOUBLE input`).first();
}

class MenuFieldsTab {
    constructor(private page: Page) { }
    fieldsTable = this.page.locator(`.SWINDOWFORM tbody`);
    fieldRef = this.fieldsTable.locator(`tr:nth-child(1) td:nth-child(2)`);
    fieldSmallint = this.fieldsTable.locator(`tr:nth-child(2) td:nth-child(2)`);
    fieldInteger = this.fieldsTable.locator(`tr:nth-child(3) td:nth-child(2)`);
    fieldBigint = this.fieldsTable.locator(`tr:nth-child(4) td:nth-child(2)`);
    fieldString = this.fieldsTable.locator(`tr:nth-child(5) td:nth-child(2)`);
    fieldWyliczane = this.fieldsTable.locator(`tr:nth-child(6) td:nth-child(2)`);
    fieldNumeric = this.fieldsTable.locator(`tr:nth-child(7) td:nth-child(2)`);
    fieldFloat = this.fieldsTable.locator(`tr:nth-child(8) td:nth-child(2)`);
    fieldDouble = this.fieldsTable.locator(`tr:nth-child(9) td:nth-child(2)`);
}

class FormSaveAs {
    constructor(private page: Page) { }
    formSaveAs = this.page.locator(`.k-window-content`).last();
    inputViewName = this.formSaveAs.locator(`.Field__name input`);
    checkboxPublic = this.formSaveAs.locator(`.Field__is_public label`);
    checkboxPredef = this.formSaveAs.locator(`.Field__is_predefined label`);
    btnSave = this.page.getByRole('button', { name: ' Zapisz' }).last();
}