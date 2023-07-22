import { GridComponent } from "./Grid.Component";
import { DictionariesComponent } from "./Dictionaries.component";
import { GUIComponent } from "./GUI.component";
import { MethodsComponent } from "./Methods.component";
import { QueryObjectsFiltersComponent } from "./QueryObjectsFilters.component";
import { SetFocusComponent } from "./SetFocus.component";
import { TableObjectFiltersComponent } from "./TableObjectFilters.component";

export class TechTestComponent {
    constructor(private page) {
        try {
            this.WaitAndClickTechTestButton();
        } catch
        {
            console.log('Retry click navigator element');
            this.WaitAndClickTechTestButton();
        }
    }
    techTest = this.page.getByText('TTECH TEST');
    grid = new GridComponent(this.page);
    setFocus = new SetFocusComponent(this.page);
    tableObjectFilters = new TableObjectFiltersComponent(this.page);
    dictionaries = new DictionariesComponent(this.page);
    gui = new GUIComponent(this.page);
    methods = new MethodsComponent(this.page);
    queryObjectsFilters = new QueryObjectsFiltersComponent(this.page);

    private async WaitAndClickTechTestButton(): Promise<void> {
        await this.techTest.click();
    }
}