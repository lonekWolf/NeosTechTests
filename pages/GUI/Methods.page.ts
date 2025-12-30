import { Locator, Page, expect } from "@playwright/test";
import { LeftPanel } from './LeftPanelMethods';
import { LeftCenterPanel } from './LeftCenterPanelMethods';
import { CenterPanel } from './CenterPanelMethods';
import { RightCenterPanel } from './RightCenterPanelMethods';
import { RightPanel } from './RightPanelMethods';

export class MethodsPage {
    readonly metodaNaWidocznosc: LeftPanel;
    readonly metodaNaEdytowalnosc: LeftCenterPanel;
    readonly metodaNaIkone: CenterPanel;
    readonly metodaNaEtykiete: RightCenterPanel;
    readonly metodaNawalidacje: RightPanel;

    constructor(private page: Page) {
        this.metodaNaWidocznosc = new LeftPanel(this.page);
        this.metodaNaEdytowalnosc = new LeftCenterPanel(this.page);
        this.metodaNaIkone = new CenterPanel(this.page);
        this.metodaNaEtykiete = new RightCenterPanel(this.page);
        this.metodaNawalidacje = new RightPanel(this.page);
    }

    async VerifyInvisible(): Promise<void> {
        await expect(this.metodaNaWidocznosc.fInteger).not.toBeVisible();
        await expect(this.metodaNaWidocznosc.fNumeric).not.toBeVisible();
        await expect(this.metodaNaWidocznosc.fString).not.toBeVisible();
        await expect(this.metodaNaWidocznosc.parameter1).not.toBeVisible();
        await expect(this.metodaNaWidocznosc.parameter2).not.toBeVisible();
        await expect(this.metodaNaWidocznosc.parameter3).not.toBeVisible();
        await expect(this.metodaNaWidocznosc.buttonDoNothing).not.toBeVisible();
    }

    async ChangeVisible(): Promise<void> {
        await this.metodaNaWidocznosc.buttonChangeVisibility.click();
    }

    async VerifyVisible(): Promise<void> {
        await expect(this.metodaNaWidocznosc.fInteger).toBeVisible();
        await expect(this.metodaNaWidocznosc.fNumeric).toBeVisible();
        await expect(this.metodaNaWidocznosc.fString).toBeVisible();
        await expect(this.metodaNaWidocznosc.parameter1).toBeVisible();
        await expect(this.metodaNaWidocznosc.parameter2).toBeVisible();
        await expect(this.metodaNaWidocznosc.parameter3).toBeVisible();
        await expect(this.metodaNaWidocznosc.buttonDoNothing).toBeVisible();
    }

    async VerifyUneditable(): Promise<void> {
        await expect(this.metodaNaEdytowalnosc.fInteger).not.toBeEditable();
        await expect(this.metodaNaEdytowalnosc.fNumeric).not.toBeEditable();
        await expect(this.metodaNaEdytowalnosc.fString).not.toBeEditable();
        await expect(this.metodaNaEdytowalnosc.parameter1).not.toBeEditable();
        await expect(this.metodaNaEdytowalnosc.parameter2).not.toBeEditable();
        await expect(this.metodaNaEdytowalnosc.parameter3).not.toBeEditable();
        await expect(this.metodaNaEdytowalnosc.buttonDoNothing).not.toBeEditable();
    }

    async ChangeEditable(): Promise<void> {
        await this.metodaNaEdytowalnosc.buttonChangeEditable.click();
    }

    async VerifyEditable(): Promise<void> {
        await expect(this.metodaNaEdytowalnosc.fInteger).toBeEditable();
        await expect(this.metodaNaEdytowalnosc.fNumeric).toBeEditable();
        await expect(this.metodaNaEdytowalnosc.fString).toBeEditable();
        await expect(this.metodaNaEdytowalnosc.parameter1).toBeEditable();
        await expect(this.metodaNaEdytowalnosc.parameter2).toBeEditable();
        await expect(this.metodaNaEdytowalnosc.parameter3).toBeEditable();
        await expect(this.metodaNaEdytowalnosc.buttonDoNothing).toBeEditable();
    }

    async VerifyIconBeforeTest(): Promise<void> {
        await expect(this.metodaNaIkone.fInteger).toHaveClass(/fa-cog/);
        await expect(this.metodaNaIkone.fNumeric).toHaveClass(/fa-cog/);
        await expect(this.metodaNaIkone.fString).toHaveClass(/fa-cog/);
        await expect(this.metodaNaIkone.parameter1).toHaveClass(/fa-cog/);
        await expect(this.metodaNaIkone.parameter2).toHaveClass(/fa-cog/);
        await expect(this.metodaNaIkone.parameter3).toHaveClass(/fa-cog/);
        await expect(this.metodaNaIkone.buttonDoNothing).toHaveClass(/fa-cog/);
    }

    async ChangeIcon(newIcon: string): Promise<void> {
        await this.metodaNaIkone.iconSwitch.fill(newIcon);
        await this.metodaNaIkone.fInteger.click();
    }

    async VerifyIconAfterTest(): Promise<void> {
        await expect(this.metodaNaIkone.fInteger).toHaveClass(/fa-check/);
        await expect(this.metodaNaIkone.fNumeric).toHaveClass(/fa-check/);
        await expect(this.metodaNaIkone.fString).toHaveClass(/fa-check/);
        await expect(this.metodaNaIkone.parameter1).toHaveClass(/fa-check/);
        await expect(this.metodaNaIkone.parameter2).toHaveClass(/fa-check/);
        await expect(this.metodaNaIkone.parameter3).toHaveClass(/fa-check/);
        await expect(this.metodaNaIkone.buttonDoNothing).toHaveClass(/fa-check/);
    }

    async VerifyLabelsBeforeTest(labelBeforeTest: string): Promise<void> {
        await expect(this.metodaNaEtykiete.fInteger).toContainText(labelBeforeTest);
        await expect(this.metodaNaEtykiete.fNumeric).toContainText(labelBeforeTest);
        await expect(this.metodaNaEtykiete.fString).toContainText(labelBeforeTest);
        await expect(this.metodaNaEtykiete.parameter1).toContainText(labelBeforeTest);
        await expect(this.metodaNaEtykiete.parameter2).toContainText(labelBeforeTest);
        await expect(this.metodaNaEtykiete.parameter3).toContainText(labelBeforeTest);
        await expect(this.metodaNaEtykiete.buttonDoNothing).toContainText(labelBeforeTest);
    }

    async ChangeLabel(labelAfterTest: string): Promise<void> {
        this.metodaNaEtykiete.labelSuffix.fill(labelAfterTest);
        this.metodaNaEtykiete.fInteger.click();
    }

    async VerifyLabelsAfterTest(labelAfterTest: string): Promise<void> {
        await expect(this.metodaNaEtykiete.fInteger).toContainText(labelAfterTest);
        await expect(this.metodaNaEtykiete.fNumeric).toContainText(labelAfterTest);
        await expect(this.metodaNaEtykiete.fString).toContainText(labelAfterTest);
        await expect(this.metodaNaEtykiete.parameter1).toContainText(labelAfterTest);
        await expect(this.metodaNaEtykiete.parameter2).toContainText(labelAfterTest);
        await expect(this.metodaNaEtykiete.parameter3).toContainText(labelAfterTest);
        await expect(this.metodaNaEtykiete.buttonDoNothing).toContainText(labelAfterTest);
    }

    async VerifyClassValidationFields(): Promise<void> {
        await expect.soft(this.metodaNawalidacje.fBigInt).toHaveClass(/validationError/);
        await expect.soft(this.metodaNawalidacje.fFloat).toHaveClass(/validationError/);
        await expect.soft(this.metodaNawalidacje.fSmallInt).toHaveClass(/validationError/);
    }

    async VerifyClassValidationParams(): Promise<void> {
        await expect.soft(this.metodaNawalidacje.parameter4).toHaveClass(/validationError/);
        await expect.soft(this.metodaNawalidacje.parameter5).toHaveClass(/validationError/);
        await expect.soft(this.metodaNawalidacje.parameter6).toHaveClass(/validationError/);
    }

    async EditPanelAndSave(): Promise<void> {
        await this.metodaNawalidacje.fBigInt.fill('');
        await this.metodaNawalidacje.fFloat.click();
        await this.page.locator('.Action_PostRecord button').click();
    }

    async VerifyMessageValidation(expectedValidationMessage: string): Promise<void> {
        await expect(this.page.locator('.message .text')).toHaveText(expectedValidationMessage);
    }
}