import { GridComponent } from "./Grid.component";
import { DictionariesComponent } from "./Dictionaries.component";
import { GUIComponent } from "./GUI.component";
import { MethodsComponent } from "./Methods.component";
import { QueryObjectsFiltersComponent } from "./QueryObjectsFilters.component";
import { SetFocusComponent } from "./SetFocus.component";
import { TableObjectFiltersComponent } from "./TableObjectFilters.component";
import { viewSettingComponent } from "./ViewSettings.component";
import { visibilityActions } from "./VisibilityActions.component";

export class TechTestComponent {
    constructor(private page) { }
    techTest = this.page.getByText('TTECH TEST');
    gridComponent = new GridComponent(this.page);
    setFocusComponent = new SetFocusComponent(this.page);
    tableObjectFiltersComponent = new TableObjectFiltersComponent(this.page);
    dictionariesComponent = new DictionariesComponent(this.page);
    guiComponent = new GUIComponent(this.page);
    methodsComponent = new MethodsComponent(this.page);
    queryObjectsFiltersComponent = new QueryObjectsFiltersComponent(this.page);
    viewSetting = new viewSettingComponent(this.page);
    visibilityActions = new visibilityActions(this.page);

    async ClickMenuAndTechTestAction(): Promise<void> {
        // Wait for menu link to be visible and ready
        const menuLink = this.page.getByRole('link', { name: '' });
        await menuLink.waitFor({ state: 'visible' });
        await menuLink.click();
        // Wait for tech test action to be visible
        await this.techTest.waitFor({ state: 'visible' });
        await this.techTest.click();
    }
}