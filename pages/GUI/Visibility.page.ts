import { Page, expect } from "@playwright/test";

export class VisibilityPage {
    constructor(private page: Page) { }
    visibly = new LeftPanel(this.page);
    unvisibly = new LeftCenterPanel(this.page);
    visiblyWhenEditing = new CenterPanel(this.page);
    visiblyWhenBrowsing = new CenterRightPanel(this.page);
    hiddenInEmptyField = new RightPanel(this.page);

    async VeryfyVisibleOnYes(): Promise<void> {
        await expect(this.visibly.fInteger).toBeVisible();
        await expect(this.visibly.fNumeric).toBeVisible();
        await expect(this.visibly.fString).toBeVisible();
        await expect(this.visibly.parameter1).toBeVisible();
        await expect(this.visibly.parameter2).toBeVisible();
        await expect(this.visibly.parameter3).toBeVisible();
        await expect(this.visibly.buttonDoNothing).toBeVisible();
    }

    async VeryfyVisibleOnNo(): Promise<void> {
        await expect(this.unvisibly.fInteger).not.toBeVisible();
        await expect(this.unvisibly.fNumeric).not.toBeVisible();
        await expect(this.unvisibly.fString).not.toBeVisible();
        await expect(this.unvisibly.parameter1).not.toBeVisible();
        await expect(this.unvisibly.parameter2).not.toBeVisible();
        await expect(this.unvisibly.parameter3).not.toBeVisible();
        await expect(this.unvisibly.buttonDoNothing).not.toBeVisible();
    }
    async VeryfyWhenEditingOnNo(): Promise<void> {
        await expect(this.visiblyWhenEditing.fInteger).not.toBeVisible();
        await expect(this.visiblyWhenEditing.fNumeric).not.toBeVisible();
        await expect(this.visiblyWhenEditing.fString).not.toBeVisible();
        await expect(this.visiblyWhenEditing.parameter1).not.toBeVisible();
        await expect(this.visiblyWhenEditing.parameter2).not.toBeVisible();
        await expect(this.visiblyWhenEditing.parameter3).not.toBeVisible();
        await expect(this.visiblyWhenEditing.buttonDoNothing).not.toBeVisible();
    }

    async VeryfyWhenEditingOnYes(): Promise<void> {
        await expect(this.visiblyWhenEditing.fInteger).toBeVisible();
        await expect(this.visiblyWhenEditing.fNumeric).toBeVisible();
        await expect(this.visiblyWhenEditing.fString).toBeVisible();
        await expect(this.visiblyWhenEditing.parameter1).toBeVisible();
        await expect(this.visiblyWhenEditing.parameter2).toBeVisible();
        await expect(this.visiblyWhenEditing.parameter3).toBeVisible();
        await expect(this.visiblyWhenEditing.buttonDoNothing).toBeVisible();
    }
    async VeryfyWhenBrowsingOnYes(): Promise<void> {
        await expect(this.visiblyWhenBrowsing.fInteger).toBeVisible();
        await expect(this.visiblyWhenBrowsing.fNumeric).toBeVisible();
        await expect(this.visiblyWhenBrowsing.fString).toBeVisible();
        await expect(this.visiblyWhenBrowsing.parameter1).toBeVisible();
        await expect(this.visiblyWhenBrowsing.parameter2).toBeVisible();
        await expect(this.visiblyWhenBrowsing.parameter3).toBeVisible();
        await expect(this.visiblyWhenBrowsing.buttonDoNothing).toBeVisible();
    }
    async VeryfyWhenBrowsingOnNo(): Promise<void> {
        await expect(this.visiblyWhenBrowsing.fInteger).not.toBeVisible();
        await expect(this.visiblyWhenBrowsing.fNumeric).not.toBeVisible();
        await expect(this.visiblyWhenBrowsing.fString).not.toBeVisible();
        await expect(this.visiblyWhenBrowsing.parameter1).not.toBeVisible();
        await expect(this.visiblyWhenBrowsing.parameter2).not.toBeVisible();
        await expect(this.visiblyWhenBrowsing.parameter3).not.toBeVisible();
        await expect(this.visiblyWhenBrowsing.buttonDoNothing).not.toBeVisible();
    }
    async FiddenInEmptyField(): Promise<void> {
        await expect.soft(this.hiddenInEmptyField.fInteger).not.toBeVisible();
        await expect.soft(this.hiddenInEmptyField.fNumeric).not.toBeVisible();
        await expect.soft(this.hiddenInEmptyField.fString).not.toBeVisible();
        await expect.soft(this.hiddenInEmptyField.parameter1).not.toBeVisible();
        await expect.soft(this.hiddenInEmptyField.parameter2).not.toBeVisible();
        await expect.soft(this.hiddenInEmptyField.parameter3).not.toBeVisible();
        await expect.soft(this.hiddenInEmptyField.buttonDoNothing).not.toBeVisible();
    }
}

// Widoczność na TAK
class LeftPanel {
    constructor(private page: Page) { }
    idPanel = 'f28ef9a9de9c4a319352aaee98fb969b';
    fInteger = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FINTEGER')]`);
    fNumeric = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FNUMERIC')]`);
    fString = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FSTRING')]`);
    parameter1 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p1')]`);
    parameter2 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p2')]`);
    parameter3 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p3')]`);
    buttonDoNothing = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Action_DoNothing')]`);
}

// Widoczność na NIE
class LeftCenterPanel {
    constructor(private page: Page) { }
    idPanel = '224baf47b4ad4cd4aca2c9c8446b5485';
    fInteger = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FINTEGER')]`);
    fNumeric = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FNUMERIC')]`);
    fString = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FSTRING')]`);
    parameter1 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p1')]`);
    parameter2 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p2')]`);
    parameter3 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p3')]`);
    buttonDoNothing = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Action_DoNothing')]`);
}

// Widoczność podczas edycji
class CenterPanel {
    constructor(private page: Page) { }
    idPanel = '20efd287d8ad49218dbcf316ef01fbc6';
    fInteger = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FINTEGER')]`);
    fNumeric = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FNUMERIC')]`);
    fString = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FSTRING')]`);
    parameter1 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p1')]`);
    parameter2 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p2')]`);
    parameter3 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p3')]`);
    buttonDoNothing = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Action_DoNothing')]`);
}

// Widoczność podczas przeglądania
class CenterRightPanel {
    constructor(private page: Page) { }
    idPanel = '4c7ad55a5ff34372bfe1de997e73f844';
    fInteger = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FINTEGER')]`);
    fNumeric = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FNUMERIC')]`);
    fString = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FSTRING')]`);
    parameter1 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p1')]`);
    parameter2 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p2')]`);
    parameter3 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p3')]`);
    buttonDoNothing = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Action_DoNothing')]`);
}

// Ukryta w pustej dziedzinie
class RightPanel {
    constructor(private page: Page) { }
    idPanel = '683f32a4048f479bb500ee4411fb8225';
    fInteger = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FINTEGER')]`);
    fNumeric = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FNUMERIC')]`);
    fString = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field_FSTRING')]`);
    parameter1 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p1')]`);
    parameter2 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p2')]`);
    parameter3 = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Field__p3')]`);
    buttonDoNothing = this.page.locator(`//*[@id='${this.idPanel}']//*[contains(@class,'Action_DoNothing')]`);
}