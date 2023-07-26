import { GridComponent } from "./Grid.Component";
import { DictionariesComponent } from "./Dictionaries.component";
import { GUIComponent } from "./GUI.component";
import { MethodsComponent } from "./Methods.component";
import { QueryObjectsFiltersComponent } from "./QueryObjectsFilters.component";
import { SetFocusComponent } from "./SetFocus.component";
import { TableObjectFiltersComponent } from "./TableObjectFilters.component";

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
}