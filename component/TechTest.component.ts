import { Locator, Page } from "@playwright/test";

import { GridComponent } from "./Grid.component";
import { DictionariesComponent } from "./Dictionaries.component";
import { GUIComponent } from "./GUI.component";
import { MethodsComponent } from "./Methods.component";
import { QueryObjectsFiltersComponent } from "./QueryObjectsFilters.component";
import { SetFocusComponent } from "./SetFocus.component";
import { TableObjectFiltersComponent } from "./TableObjectFilters.component";
import { ViewSettingComponent } from "./ViewSettings.component";
import { VisibilityActionsComponent } from "./VisibilityActions.component";

export class TechTestComponent {
    readonly techTest: Locator;
    readonly gridComponent: GridComponent;
    readonly setFocusComponent: SetFocusComponent;
    readonly tableObjectFiltersComponent: TableObjectFiltersComponent;
    readonly dictionariesComponent: DictionariesComponent;
    readonly guiComponent: GUIComponent;
    readonly methodsComponent: MethodsComponent;
    readonly queryObjectsFiltersComponent: QueryObjectsFiltersComponent;
    readonly viewSetting: ViewSettingComponent;
    readonly visibilityActions: VisibilityActionsComponent;

    constructor(private page: Page) {
        this.techTest = this.page.getByText('TTECH TEST');
        this.gridComponent = new GridComponent(this.page);
        this.setFocusComponent = new SetFocusComponent(this.page);
        this.tableObjectFiltersComponent = new TableObjectFiltersComponent(this.page);
        this.dictionariesComponent = new DictionariesComponent(this.page);
        this.guiComponent = new GUIComponent(this.page);
        this.methodsComponent = new MethodsComponent(this.page);
        this.queryObjectsFiltersComponent = new QueryObjectsFiltersComponent(this.page);
        this.viewSetting = new ViewSettingComponent(this.page);
        this.visibilityActions = new VisibilityActionsComponent(this.page);
    }

    async ClickMenuAndTechTestAction(): Promise<void> {
        // Wait for menu link to be visible and ready
        // Note: Menu link text may contain special characters/icon that don't render correctly
        // Using a more flexible selector that matches any visible link in the menu area
        const menuLink = this.page.locator('nav a, .menu a, [role="navigation"] a').first();
        await menuLink.waitFor({ state: 'visible' });
        await menuLink.click();
        // Wait for tech test action to be visible
        await this.techTest.waitFor({ state: 'visible' });
        await this.techTest.click();
    }
}
