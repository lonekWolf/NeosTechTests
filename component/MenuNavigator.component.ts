import { Page } from "@playwright/test";
import { TechTestComponent } from "./TechTest.component";

export class MenuNavigatorComponent {
    readonly techTestComponent: TechTestComponent;

    constructor(private page: Page) {
        this.techTestComponent = new TechTestComponent(this.page);
    }

    // Navigation helpers for Dictionaries
    async navigateToStaticDictionaries(): Promise<void> {
        await this.techTestComponent.dictionariesComponent.staticDictionaries.click();
    }

    async navigateToTableDictionaries(): Promise<void> {
        await this.techTestComponent.dictionariesComponent.tableDictionaries.click();
    }

    async navigateToFilteredDictionaries(): Promise<void> {
        await this.techTestComponent.dictionariesComponent.filteredDictionaries.click();
    }

    // Navigation helpers for GridFilter
    async navigateToGridFilterFullTable(): Promise<void> {
        await this.techTestComponent.tableObjectFiltersComponent.gridFilterFullTable.click();
    }

    async navigateToGridFilterTableWithHiddenFields(): Promise<void> {
        await this.techTestComponent.tableObjectFiltersComponent.gridFilterTableWithHiddenFields.click();
    }

    // Navigation helpers for FilteringObjectsBasedOnQuery
    async navigateToQueryWithDataFilterCleanForm(): Promise<void> {
        await this.techTestComponent.queryObjectsFiltersComponent.queryWithDataFilterCleanForm.click();
    }

    async navigateToQueryWithDataFilterConstFilter(): Promise<void> {
        await this.techTestComponent.queryObjectsFiltersComponent.queryWithDataFilterConstFilter.click();
    }

    async navigateToQueryWithDataFilterMethodFilter(): Promise<void> {
        await this.techTestComponent.queryObjectsFiltersComponent.queryWithDataFilterMethodFilter.click();
    }

    async navigateToQueryWithMethodCleanForm(): Promise<void> {
        await this.techTestComponent.queryObjectsFiltersComponent.queryWithMethodCleanForm.click();
    }

    async navigateToQueryWithMethodConstFilter(): Promise<void> {
        await this.techTestComponent.queryObjectsFiltersComponent.queryWithMethodConstFilter.click();
    }

    async navigateToQueryWithMethodMethodFilter(): Promise<void> {
        await this.techTestComponent.queryObjectsFiltersComponent.queryWithMethodMethodFilter.click();
    }

    async navigateToQueryObjectCleanForm(): Promise<void> {
        await this.techTestComponent.queryObjectsFiltersComponent.queryObjectCleanForm.click();
    }

    async navigateToQueryObjectConstFilter(): Promise<void> {
        await this.techTestComponent.queryObjectsFiltersComponent.queryObjectConstFilter.click();
    }

    async navigateToQueryObjectMethodFilter(): Promise<void> {
        await this.techTestComponent.queryObjectsFiltersComponent.queryObjectMethodFilter.click();
    }

    // Navigation helpers for FilteringObjectsBasedOnTable
    async navigateToCheckboxFilter(): Promise<void> {
        await this.techTestComponent.tableObjectFiltersComponent.checkboxFilter.click();
    }

    async navigateToClearObjectConstFilter(): Promise<void> {
        await this.techTestComponent.tableObjectFiltersComponent.clearObjectConstFilter.click();
    }

    async navigateToClearObjectMethodFilter(): Promise<void> {
        await this.techTestComponent.tableObjectFiltersComponent.clearObjectMethodFilter.click();
    }

    async navigateToObjectWithConstFilterClearForm(): Promise<void> {
        await this.techTestComponent.tableObjectFiltersComponent.objectWithConstFilterClearForm.click();
    }

    async navigateToObjectWithConstFilterConstFilter(): Promise<void> {
        await this.techTestComponent.tableObjectFiltersComponent.objectWithConstFilterConstFilter.click();
    }

    async navigateToObjectWithMethodFilterClearForm(): Promise<void> {
        await this.techTestComponent.tableObjectFiltersComponent.objectWithMethodFilterClearForm.click();
    }

    async navigateToObjectWithMethodFilterMethodFilter(): Promise<void> {
        await this.techTestComponent.tableObjectFiltersComponent.objectWithMethodFilterMethodFilter.click();
    }

    // Navigation helpers for Grid
    async navigateToGrid(): Promise<void> {
        await this.techTestComponent.gridComponent.grid.click();
    }

    async navigateToAddNewRecord(): Promise<void> {
        await this.techTestComponent.gridComponent.addNewRecord.click();
    }

    async navigateToEditRecord(): Promise<void> {
        await this.techTestComponent.gridComponent.editRecord.click();
    }

    async navigateToDeleteCurrentRecord(): Promise<void> {
        await this.techTestComponent.gridComponent.deleteCurrentRecord.click();
    }

    async navigateToRowSelections(): Promise<void> {
        await this.techTestComponent.gridComponent.rowSelections.click();
    }
}
