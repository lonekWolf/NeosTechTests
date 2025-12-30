import { Locator, Page, expect } from "@playwright/test";
import { MenuNavigatorComponent } from "../../component/MenuNavigator.component";
import { FormBrowse } from "./FormBrowse";
import { MenuFieldsTab } from "./MenuFieldsTab";
import { FormSaveAs } from "./FormSaveAs";

export class ViewSettingPage {
    readonly formBrowse: FormBrowse;
    readonly menuFieldsTab: MenuFieldsTab;
    readonly formSaveAs: FormSaveAs;
    //  menu
    readonly labelFormName: Locator;
    readonly btnMenuTitleVS: Locator;
    readonly labelViewSetting: Locator;
    readonly defaultViewButton: Locator;
    readonly showSavedFiltersButtons: Locator;
    readonly groupedActionsButtons: Locator;
    readonly btnSaveAs: Locator;
    //  zakładki
    readonly fieldsTab: Locator;
    readonly parametersTab: Locator;
    readonly filtersTab: Locator;

    constructor(private page: Page) {
        this.formBrowse = new FormBrowse(this.page);
        this.menuFieldsTab = new MenuFieldsTab(this.page);
        this.formSaveAs = new FormSaveAs(this.page);
        //  menu
        this.labelFormName = this.page.locator(`.tableHeader .SLABEL`).first();
        this.btnMenuTitleVS = this.page.locator(`.gridViewMenuButton span`).first();
        this.labelViewSetting = this.page.locator(`.Object_ViewSettings .mediumLabel label.objectLabel`).first();
        this.defaultViewButton = this.page.locator(`.Object_ViewSettings .Action_LoadDefault button`);
        this.showSavedFiltersButtons = this.page.locator(`.Object_ViewSettings .Action_ShowSavedFilters button`);
        this.groupedActionsButtons = this.page.locator(`.Object_ViewSettings .Action_GroupedActions button`);
        this.btnSaveAs = this.page.locator(`.Object_ViewSettings .Action_SaveAs button`);
        //  zakładki
        this.fieldsTab = this.page.locator(`//*[contains(@class,'panelBox2')]//*[contains(text(),'Pola danych')]`).first();
        this.parametersTab = this.page.locator(`//*[contains(@class,'panelBox2')]//*[contains(text(),'Parametry')]`).first();
        this.filtersTab = this.page.locator(`//*[contains(@class,'panelBox2')]//*[contains(text(),'Filtry')]`).first();
    }

    async ClickButtonAndSelectView(nameView: string): Promise<void> {
        await this.btnMenuTitleVS.click();
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

    async VerifyVisibleGridColumnBeforeTest() {
        await expect(this.formBrowse.columnNumeric).toBeVisible();
        await expect(this.formBrowse.columnFloat).toBeVisible();
        await expect(this.formBrowse.columnDouble).toBeVisible();
    }

    async VerifyVisibleGridColumnAfterTest() {
        await expect(this.formBrowse.columnNumeric).not.toBeVisible();
        await expect(this.formBrowse.columnFloat).not.toBeVisible();
        await expect(this.formBrowse.columnDouble).not.toBeVisible();
        await this.VerifyTitleStar();
    }

    async HideColumn(): Promise<void> {
        await this.menuFieldsTab.fieldNumeric.locator(`div div button:nth-child(1)`).click();
        await this.menuFieldsTab.fieldFloat.locator(`div div button:nth-child(1)`).click();
        await this.menuFieldsTab.fieldDouble.locator(`div div button:nth-child(1)`).click();
    }

    async VerifyTitleStar(): Promise<void> {
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
        // Wait for save button to be enabled and ready
        await this.formSaveAs.btnSave.waitFor({ state: 'visible' });
        await this.formSaveAs.btnSave.click();
    }

    async DeleteView(expectedFormLabel: string): Promise<void> {
        await this.groupedActionsButtons.click();
        await this.page.getByText('Usuń widok').hover({ timeout: 1000 });
        await this.page.getByRole('menuitem', { name: ' Potwierdź usunięcie' }).click();
        await this.VerifyFormLabel(expectedFormLabel);
    }

    async OpenNewTabAndVerifyCreatedView(viewName: string, expectedFormLabel: string): Promise<void> {
        const nextPage = await this.page.context().newPage();
        await nextPage.goto('/');
        // Wait for page to load - check for menu navigator component
        const menuNavigatorComponent = new MenuNavigatorComponent(nextPage);
        await menuNavigatorComponent.techTestComponent.techTest.waitFor({ state: 'visible' });
        await menuNavigatorComponent.techTestComponent.viewSetting.viewSettingForm.click();
        const viewSetting = new ViewSettingPage(nextPage);
        await viewSetting.ClickButtonAndSelectView(viewName);
        await viewSetting.ClickButtonAndSelectView('Ustawienia widoku');
        await viewSetting.DeleteView(expectedFormLabel);
    }

    async VerifyFormLabel(expectedFormLabel): Promise<void> {
        await expect(this.labelFormName).toContainText(expectedFormLabel);
    }
}
