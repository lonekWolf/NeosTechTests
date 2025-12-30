import { Locator, Page, expect } from "@playwright/test";

export class TabsPage {
    readonly buttonShowParametersTab: Locator;
    readonly buttonExpandButtonsTab: Locator;
    readonly buttonSwitchToFields: Locator;
    readonly buttonSwitchToParameters: Locator;
    readonly buttonSwitchToButtons: Locator;
    readonly labelFieldsTab: Locator;
    readonly labelParametersTab: Locator;
    readonly labelButtonsTab: Locator;
    readonly panelFieldsTab: Locator;
    readonly panelParametersTab: Locator;
    readonly panelButtonsTab: Locator;

    constructor(private page: Page) {
        this.buttonShowParametersTab = this.page.locator(`.Action_ShowParametersTab`);
        this.buttonExpandButtonsTab = this.page.locator(`.Action_ExpandButtonsTab`);
        this.buttonSwitchToFields = this.page.locator(`.Action_FieldsTab`);
        this.buttonSwitchToParameters = this.page.locator(`.Action_ParametersTab`);
        this.buttonSwitchToButtons = this.page.locator(`.Action_ButtonsTab`);
        this.labelFieldsTab = this.page.locator(`//*[contains(text(),'Pola modelu danych')]/..`);
        this.labelParametersTab = this.page.locator(`//*[contains(text(),'Parametry')]/..`);
        this.labelButtonsTab = this.page.locator(`//*[contains(text(),'Przyciski')]/..`);
        this.panelFieldsTab = this.page.locator(`#9cb6883295314aaea029269206c15d9f`);
        this.panelParametersTab = this.page.locator(`#afd52b4f25094be88caed73496856f30`);
        this.panelButtonsTab = this.page.locator(`#f7aa677d367e4c1e869d730f67581b7d`);
    }
    async VerifyLabelsTabBefore(): Promise<void> {
        await expect.soft(this.labelFieldsTab).toBeVisible();
        await expect.soft(this.labelParametersTab).not.toBeVisible();
        await expect.soft(this.labelButtonsTab).toBeVisible();
    }

    async VerifyLabelsTabAfter(): Promise<void> {
        await expect.soft(this.labelFieldsTab).toBeVisible();
        await expect.soft(this.labelParametersTab).toBeVisible();
        await expect.soft(this.labelButtonsTab).toBeVisible();
    }
    async ChangeVisibleParamTab(): Promise<void> {
        await this.buttonShowParametersTab.click();
    }

    async VerifyFocusTabAfterOpenForm(): Promise<void> {
        await expect(this.labelFieldsTab).toHaveClass(/.k-state-active/);
        await expect(this.labelParametersTab).not.toHaveClass(/.k-state-active/);
        await expect(this.labelButtonsTab).not.toHaveClass(/.k-state-active/);
    }

    async VerifyFocusTabAfterChangeToParamsTab(): Promise<void> {
        await this.buttonShowParametersTab.click();
        await this.buttonSwitchToParameters.click();
        await expect(this.labelParametersTab).toHaveClass(/.k-state-active/);
        await expect(this.labelButtonsTab).not.toHaveClass(/.k-state-active/);
        await expect(this.labelFieldsTab).not.toHaveClass(/.k-state-active/);
    }

    async VerifyFocusTabAfterChangeToButtonsTab(): Promise<void> {
        await this.buttonSwitchToButtons.click();
        await expect(this.labelButtonsTab).toHaveClass(/.k-state-active/);
        await expect(this.labelFieldsTab).not.toHaveClass(/.k-state-active/);
        await expect(this.labelParametersTab).not.toHaveClass(/.k-state-active/);
    }

    async VerifyVisibleActions(): Promise<void> {
        await this.buttonSwitchToButtons.click();
        await expect(this.panelButtonsTab).not.toBeVisible();
        await this.buttonExpandButtonsTab.click();
        await expect(this.panelButtonsTab).toBeVisible();
    }
}