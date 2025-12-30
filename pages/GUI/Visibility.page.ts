import { Page, expect } from "@playwright/test";
import { LeftPanel } from './LeftPanelVisibility';
import { LeftCenterPanel } from './LeftCenterPanelVisibility';
import { CenterPanel } from './CenterPanelVisibility';
import { CenterRightPanel } from './CenterRightPanelVisibility';
import { RightPanel } from './RightPanelVisibility';

export class VisibilityPage {
    readonly visibly: LeftPanel;
    readonly unvisibly: LeftCenterPanel;
    readonly visiblyWhenEditing: CenterPanel;
    readonly visiblyWhenBrowsing: CenterRightPanel;
    readonly hiddenInEmptyField: RightPanel;

    constructor(private page: Page) {
        this.visibly = new LeftPanel(this.page);
        this.unvisibly = new LeftCenterPanel(this.page);
        this.visiblyWhenEditing = new CenterPanel(this.page);
        this.visiblyWhenBrowsing = new CenterRightPanel(this.page);
        this.hiddenInEmptyField = new RightPanel(this.page);
    }

    async VerifyVisibleOnYes(): Promise<void> {
        await expect(this.visibly.fInteger).toBeVisible();
        await expect(this.visibly.fNumeric).toBeVisible();
        await expect(this.visibly.fString).toBeVisible();
        await expect(this.visibly.parameter1).toBeVisible();
        await expect(this.visibly.parameter2).toBeVisible();
        await expect(this.visibly.parameter3).toBeVisible();
        await expect(this.visibly.buttonDoNothing).toBeVisible();
    }

    async VerifyVisibleOnNo(): Promise<void> {
        await expect(this.unvisibly.fInteger).not.toBeVisible();
        await expect(this.unvisibly.fNumeric).not.toBeVisible();
        await expect(this.unvisibly.fString).not.toBeVisible();
        await expect(this.unvisibly.parameter1).not.toBeVisible();
        await expect(this.unvisibly.parameter2).not.toBeVisible();
        await expect(this.unvisibly.parameter3).not.toBeVisible();
        await expect(this.unvisibly.buttonDoNothing).not.toBeVisible();
    }
    async VerifyWhenEditingOnNo(): Promise<void> {
        await expect(this.visiblyWhenEditing.fInteger).not.toBeVisible();
        await expect(this.visiblyWhenEditing.fNumeric).not.toBeVisible();
        await expect(this.visiblyWhenEditing.fString).not.toBeVisible();
        await expect(this.visiblyWhenEditing.parameter1).not.toBeVisible();
        await expect(this.visiblyWhenEditing.parameter2).not.toBeVisible();
        await expect(this.visiblyWhenEditing.parameter3).not.toBeVisible();
        await expect(this.visiblyWhenEditing.buttonDoNothing).not.toBeVisible();
    }

    async VerifyWhenEditingOnYes(): Promise<void> {
        await expect(this.visiblyWhenEditing.fInteger).toBeVisible();
        await expect(this.visiblyWhenEditing.fNumeric).toBeVisible();
        await expect(this.visiblyWhenEditing.fString).toBeVisible();
        await expect(this.visiblyWhenEditing.parameter1).toBeVisible();
        await expect(this.visiblyWhenEditing.parameter2).toBeVisible();
        await expect(this.visiblyWhenEditing.parameter3).toBeVisible();
        await expect(this.visiblyWhenEditing.buttonDoNothing).toBeVisible();
    }
    async VerifyWhenBrowsingOnYes(): Promise<void> {
        await expect(this.visiblyWhenBrowsing.fInteger).toBeVisible();
        await expect(this.visiblyWhenBrowsing.fNumeric).toBeVisible();
        await expect(this.visiblyWhenBrowsing.fString).toBeVisible();
        await expect(this.visiblyWhenBrowsing.parameter1).toBeVisible();
        await expect(this.visiblyWhenBrowsing.parameter2).toBeVisible();
        await expect(this.visiblyWhenBrowsing.parameter3).toBeVisible();
        await expect(this.visiblyWhenBrowsing.buttonDoNothing).toBeVisible();
    }
    async VerifyWhenBrowsingOnNo(): Promise<void> {
        await expect(this.visiblyWhenBrowsing.fInteger).not.toBeVisible();
        await expect(this.visiblyWhenBrowsing.fNumeric).not.toBeVisible();
        await expect(this.visiblyWhenBrowsing.fString).not.toBeVisible();
        await expect(this.visiblyWhenBrowsing.parameter1).not.toBeVisible();
        await expect(this.visiblyWhenBrowsing.parameter2).not.toBeVisible();
        await expect(this.visiblyWhenBrowsing.parameter3).not.toBeVisible();
        await expect(this.visiblyWhenBrowsing.buttonDoNothing).not.toBeVisible();
    }
    async HiddenInEmptyField(): Promise<void> {
        await expect.soft(this.hiddenInEmptyField.fInteger).not.toBeVisible();
        await expect.soft(this.hiddenInEmptyField.fNumeric).not.toBeVisible();
        await expect.soft(this.hiddenInEmptyField.fString).not.toBeVisible();
        await expect.soft(this.hiddenInEmptyField.parameter1).not.toBeVisible();
        await expect.soft(this.hiddenInEmptyField.parameter2).not.toBeVisible();
        await expect.soft(this.hiddenInEmptyField.parameter3).not.toBeVisible();
        await expect.soft(this.hiddenInEmptyField.buttonDoNothing).not.toBeVisible();
    }
}