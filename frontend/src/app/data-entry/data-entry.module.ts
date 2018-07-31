import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { dataEntryRoutes } from "./data-entry.routes";
import { DataEntryComponent } from './data-entry.component';
import { PopulationComponent } from './population/population.component';
import { PartyBuildComponent } from './party-build/party-build.component';
import { RiskChecklistComponent } from './risk-checklist/risk-checklist.component';
import { SharedModule } from "../shared/shared.module";
import { PopulationDataEditorComponent } from "./population/data-editor/data-editor.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(dataEntryRoutes)
  ],
  declarations: [
    DataEntryComponent,
    PopulationComponent,
    RiskChecklistComponent,
    PartyBuildComponent,
    PopulationDataEditorComponent
  ],
  exports: [RouterModule]
})
export class DataEntryModule {
}
