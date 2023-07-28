import { Page, expect } from "@playwright/test";

export class TabsPage {
    constructor(private page: Page) { }
    buttonShowParametersTab = this.page.locator(`.Action_ShowParametersTab`);
    buttonExpandButtonsTab = this.page.locator(`.Action_ExpandButtonsTab`);
    buttonSwitchToFields = this.page.locator(`.Action_FieldsTab`);
    buttonSwitchToParameters = this.page.locator(`.Action_ParametersTab`);
    buttonSwitchToButtons = this.page.locator(`.Action_ButtonsTab`);
    labelFieldsTab = this.page.locator(`//*[contains(text(),'Pola modelu danych')]/..`);
    labelParametersTab = this.page.locator(`//*[contains(text(),'Parametry')]/..`);
    labelButtonsTab = this.page.locator(`//*[contains(text(),'Przyciski')]/..`);
    panelFieldsTab = this.page.locator(`#9cb6883295314aaea029269206c15d9f`);
    panelParametersTab = this.page.locator(`#afd52b4f25094be88caed73496856f30`);
    panelButtonsTab = this.page.locator(`#f7aa677d367e4c1e869d730f67581b7d`);
    async VeryfyLabelsTabBefore(): Promise<void> {
        await expect.soft(this.labelFieldsTab).toBeVisible();
        await expect.soft(this.labelParametersTab).not.toBeVisible();
        await expect.soft(this.labelButtonsTab).toBeVisible();
    }

    async VeryfyLabelsTabAfter(): Promise<void> {
        await expect.soft(this.labelFieldsTab).toBeVisible();
        await expect.soft(this.labelParametersTab).toBeVisible();
        await expect.soft(this.labelButtonsTab).toBeVisible();
    }
    async ChangeVisibleParamTab(): Promise<void> {
        await this.buttonShowParametersTab.click();
    }

    async VeryfyFocusTabAfterOpenForm(): Promise<void> {
        await expect(this.labelFieldsTab).toHaveClass(/.k-state-active/);
        await expect(this.labelParametersTab).not.toHaveClass(/.k-state-active/);
        await expect(this.labelButtonsTab).not.toHaveClass(/.k-state-active/);
    }

    async VeryfyFocusTabAfterChangeToParamsTab(): Promise<void> {
        await this.buttonShowParametersTab.click();
        await this.buttonSwitchToParameters.click();
        await expect(this.labelParametersTab).toHaveClass(/.k-state-active/);
        await expect(this.labelButtonsTab).not.toHaveClass(/.k-state-active/);
        await expect(this.labelFieldsTab).not.toHaveClass(/.k-state-active/);
    }

    async VeryfyFocusTabAfterChangeToButtonsTab(): Promise<void> {
        await this.buttonSwitchToButtons.click();
        await expect(this.labelButtonsTab).toHaveClass(/.k-state-active/);
        await expect(this.labelFieldsTab).not.toHaveClass(/.k-state-active/);
        await expect(this.labelParametersTab).not.toHaveClass(/.k-state-active/);
    }

    async VerfyVisibleActions(): Promise<void> {
        await this.buttonSwitchToButtons.click();
        await expect(this.panelButtonsTab).not.toBeVisible();
        this.buttonExpandButtonsTab.click();
        await expect(this.panelButtonsTab).toBeVisible();
    }
}