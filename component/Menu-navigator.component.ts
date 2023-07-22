import { TechTestComponent } from "./TechTest.component";

export class MenuNavigatorComponent {
    constructor(private page) { }
    techTestComponent = new TechTestComponent(this.page);
}