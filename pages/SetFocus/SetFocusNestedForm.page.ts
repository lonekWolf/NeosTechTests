import { Locator, Page, expect } from "@playwright/test";
import { LeftNestedForm } from "./LeftNestedForm";
import { RightNestedForm } from "./RightNestedForm";

export class SetFocusNestedFormPage {
    readonly leftForm: LeftNestedForm;
    readonly rightForm: RightNestedForm;

    constructor(private page: Page) {
        this.leftForm = new LeftNestedForm(this.page);
        this.rightForm = new RightNestedForm(this.page);
    }

    async ClickButtonAndVerifyFocus(buttonToClick: Locator, elementWithFocus: Locator): Promise<void> {
        await buttonToClick.click();
        await expect.soft(elementWithFocus).toBeFocused();
    }
}