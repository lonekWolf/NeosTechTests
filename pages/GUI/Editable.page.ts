import { Locator, Page, expect } from "@playwright/test";
import { LeftPanel } from './LeftPanelEditable';
import { RightPanel } from './RightPanelEditable';

export class EditablePage {
    readonly leftPanel: LeftPanel;
    readonly rightPanel: RightPanel;

    constructor(private page: Page) {
        this.leftPanel = new LeftPanel(this.page);
        this.rightPanel = new RightPanel(this.page);
    }

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