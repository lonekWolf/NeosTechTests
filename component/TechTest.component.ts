import { GridComponent } from "./Grid.Component";
import { DictionariesComponent } from "./Dictionaries.component";
import { GUIComponent } from "./GUI.component";
import { MethodsComponent } from "./Methods.component";
import { QueryObjectsFiltersComponent } from "./QueryObjectsFilters.component";
import { SetFocusComponent } from "./SetFocus.component";
import { TableObjectFiltersComponent } from "./TableObjectFilters.component";

export class TechTestComponent {
    constructor(private page) {
        const techTest = this.page.getByText('TTECH TEST');
        techTest.click();
    }
    grid = new GridComponent(this.page);
    setFocus = new SetFocusComponent(this.page);
    tableObjectFilters = new TableObjectFiltersComponent(this.page);
    dictionaries = new DictionariesComponent(this.page);
    gui = new GUIComponent(this.page);
    methods = new MethodsComponent(this.page);
    queryObjectsFilters = new QueryObjectsFiltersComponent(this.page);
}