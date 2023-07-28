import { Page, expect } from "@playwright/test";

export class EditablePage {
    constructor(private page: Page) { }
    leftPanel = new LeftPanel(this.page);
    rightPanel = new RightPanel(this.page);

    async VerifyEditable(): Promise<void> {
        await expect.soft(this.leftPanel.fInteger).not.toHaveClass(/s-disabled/);
        await expect.soft(this.leftPanel.fNumeric).not.toHaveAttribute('disabled', 'disabled');
        await expect.soft(this.leftPanel.parameter1).not.toBeDisabled();
        await expect.soft(this.leftPanel.parameter2).not.toBeDisabled();
    }

    async VerifyUneditable(): Promise<void> {
        await expect.soft(this.rightPanel.fInteger).toHaveClass(/s-disabled/);
        await expect.soft(this.rightPanel.fNumeric).toHaveAttribute('disabled', 'disabled');
        await expect.soft(this.rightPanel.parameter1).toBeDisabled();
        await expect.soft(this.rightPanel.parameter2).toBeDisabled();
    }
}

class LeftPanel {
    constructor(private page: Page) { }
    // Edytowalność na tak
    readonly idPanel = 'e15c22e5eb0b4e3eabf80a919b04e34d';
    fInteger = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FINTEGER')]//input`);
    fNumeric = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FNUMERIC')]//input`).first();
    parameter1 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'SFIELD Field__p1edit')]//input`);
    parameter2 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p2calc')]//input`).first();
}

class RightPanel {
    constructor(private page: Page) { }
    // Edytowalność na nie
    readonly idPanel = '05bfbb71124744d0b0cb35812ae39c69';
    fInteger = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FINTEGER')]//input`);
    fNumeric = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FNUMERIC')]//input`).first();;
    parameter1 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'SFIELD Field__p1edit')]//input`);
    parameter2 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p2calc')]//input`).first();
}