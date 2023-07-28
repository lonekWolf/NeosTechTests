import { Page, expect } from "@playwright/test";

export class MethodsPage {
    constructor(private page: Page) { }
    metodaNaWidocznosc = new LeftPanel(this.page);
    metodaNaEdytowalnosc = new LeftCenterPanel(this.page);
    metodaNaIkone = new CenterPanel(this.page);
    metodaNaEtykiete = new RightCenterPanel(this.page);
    metodaNawalidacje = new RightPanel(this.page);

    async VeryfyUnvisible(): Promise<void> {
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

    async VeryfyVisible(): Promise<void> {
        await expect(this.metodaNaWidocznosc.fInteger).toBeVisible();
        await expect(this.metodaNaWidocznosc.fNumeric).toBeVisible();
        await expect(this.metodaNaWidocznosc.fString).toBeVisible();
        await expect(this.metodaNaWidocznosc.parameter1).toBeVisible();
        await expect(this.metodaNaWidocznosc.parameter2).toBeVisible();
        await expect(this.metodaNaWidocznosc.parameter3).toBeVisible();
        await expect(this.metodaNaWidocznosc.buttonDoNothing).toBeVisible();
    }

    async VeryfyUneditable(): Promise<void> {
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

    async VeryfyEditable(): Promise<void> {
        await expect(this.metodaNaEdytowalnosc.fInteger).toBeEditable();
        await expect(this.metodaNaEdytowalnosc.fNumeric).toBeEditable();
        await expect(this.metodaNaEdytowalnosc.fString).toBeEditable();
        await expect(this.metodaNaEdytowalnosc.parameter1).toBeEditable();
        await expect(this.metodaNaEdytowalnosc.parameter2).toBeEditable();
        await expect(this.metodaNaEdytowalnosc.parameter3).toBeEditable();
        await expect(this.metodaNaEdytowalnosc.buttonDoNothing).toBeEditable();
    }

    async VeryfyIconBeforeTest(): Promise<void> {
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

    async VeryfyIconAfterTest(): Promise<void> {
        await expect(this.metodaNaIkone.fInteger).toHaveClass(/fa-check/);
        await expect(this.metodaNaIkone.fNumeric).toHaveClass(/fa-check/);
        await expect(this.metodaNaIkone.fString).toHaveClass(/fa-check/);
        await expect(this.metodaNaIkone.parameter1).toHaveClass(/fa-check/);
        await expect(this.metodaNaIkone.parameter2).toHaveClass(/fa-check/);
        await expect(this.metodaNaIkone.parameter3).toHaveClass(/fa-check/);
        await expect(this.metodaNaIkone.buttonDoNothing).toHaveClass(/fa-check/);
    }

    async VeryfyLabelsBeforeTest(labelBeforeTest: string): Promise<void> {
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

    async VeryfyLabelsAfterTest(labelAfterTest: string): Promise<void> {
        await expect(this.metodaNaEtykiete.fInteger).toContainText(labelAfterTest);
        await expect(this.metodaNaEtykiete.fNumeric).toContainText(labelAfterTest);
        await expect(this.metodaNaEtykiete.fString).toContainText(labelAfterTest);
        await expect(this.metodaNaEtykiete.parameter1).toContainText(labelAfterTest);
        await expect(this.metodaNaEtykiete.parameter2).toContainText(labelAfterTest);
        await expect(this.metodaNaEtykiete.parameter3).toContainText(labelAfterTest);
        await expect(this.metodaNaEtykiete.buttonDoNothing).toContainText(labelAfterTest);
    }

    async VeryfyClassValidationFields(): Promise<void> {
        await expect.soft(this.metodaNawalidacje.fBigInt).toHaveClass(/validationError/);
        await expect.soft(this.metodaNawalidacje.fFloat).toHaveClass(/validationError/);
        await expect.soft(this.metodaNawalidacje.fSmallInt).toHaveClass(/validationError/);
    }

    async VeryfyClassValidationParams(): Promise<void> {
        await expect.soft(this.metodaNawalidacje.parameter4).toHaveClass(/validationError/);
        await expect.soft(this.metodaNawalidacje.parameter5).toHaveClass(/validationError/);
        await expect.soft(this.metodaNawalidacje.parameter6).toHaveClass(/validationError/);
    }

    async EditPanelAndSave(): Promise<void> {
        await this.metodaNawalidacje.fBigInt.fill('');
        await this.metodaNawalidacje.fFloat.click();
        await this.page.locator('.Action_PostRecord button').click();
    }

    async VeryfyMessageValidation(exceptedValidationMessage: string): Promise<void> {
        await expect(this.page.locator('.message .text')).toHaveText(exceptedValidationMessage);
    }
}

class LeftPanel {
    constructor(private page: Page) { }
    // Metoda na widoczność
    readonly idPanel = '960597e86ddd475b859e47f7cf62e7b1';
    buttonChangeVisibility = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Action_VisibilitySwitch')]//button`);
    fInteger = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FINTEGER')]`);
    fNumeric = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FNUMERIC')]`);
    fString = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FSTRING')]`);
    parameter1 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p1')]`);
    parameter2 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p2')]`);
    parameter3 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p3')]`);
    buttonDoNothing = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Action_DoNothing6')]`);
}
class LeftCenterPanel {
    constructor(private page: Page) { }
    // Metoda na edytowalność
    readonly idPanel = '838074a184204d57b18baa14e91fde7a';
    buttonChangeEditable = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Action_EditableSwitch')]//button`);
    fInteger = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FINTEGER')]//input`);
    fNumeric = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FNUMERIC')]//input`).first();
    fString = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FSTRING')]//*[contains(@class,'k-dropdown-wrap')]`);
    parameter1 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p1')]//input`);
    parameter2 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p2')]//input`).first();
    parameter3 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p3')]//*[contains(@class,'k-dropdown-wrap')]`);
    buttonDoNothing = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Action_DoNothing7')]//button`);
}

class CenterPanel {
    constructor(private page: Page) { }
    // Metoda na ikonę
    readonly idPanel = "15476e5129f445569243cb5bcb91d194";
    iconSwitch = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__iconswitch')]//input`);
    fInteger = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FINTEGER')]/label/span`);
    fNumeric = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FNUMERIC')]/label/span`);
    fString = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FSTRING')]/label/span`);
    parameter1 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p1')]/label/span`);
    parameter2 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p2')]/label/span`);
    parameter3 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p3')]/label/span`);
    buttonDoNothing = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Action_DoNothing8')]//span`);
}

class RightCenterPanel {
    constructor(private page: Page) { }
    // Metoda na etykietę
    readonly idPanel = "b8178abdb81247d9a287acef299bb6d4";
    labelSuffix = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__labelsuffix')]//input`);
    fInteger = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FINTEGER')]//label`);
    fNumeric = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FNUMERIC')]//label`);
    fString = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FSTRING')]//label`);
    parameter1 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p1')]//label`);
    parameter2 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p2')]//label`);
    parameter3 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p3')]//label`);
    buttonDoNothing = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Action_DoNothing9')]//label`);
}

class RightPanel {
    constructor(private page: Page) { }
    // Metoda na walidację
    readonly idPanel = "10057390c81d41028f8f66821d84ff23";
    fBigInt = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FBIGINT')]//input`);
    fFloat = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FFLOAT')]//*[contains(@class,'k-numeric-wrap')]`);
    fSmallInt = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FSMALLINT')]//*[contains(@class,'k-dropdown-wrap')]`);
    parameter4 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p4')]//input`);
    parameter5 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p5')]//*[contains(@class,'k-numeric-wrap')]`);
    parameter6 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p6')]//*[contains(@class,'k-dropdown-wrap')]`);
}