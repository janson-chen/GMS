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
import { PopulationService } from "./population/population.service";
import { PopulationResolver } from "./population/population-resolver";
import { CommunityService } from "../settings/community-manager/community.service";
import { PartyService } from "./party-build/party.service";
import { PartyDataEditorComponent } from "./party-build/data-editor/data-editor.component";
import { RiskService } from "./risk-checklist/risk.service";
import { RiskDataEditorComponent } from "./risk-checklist/data-editor/data-editor.component";
import { PartyResolver } from "./party-build/party-resolver";

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
    PopulationDataEditorComponent,
    PartyDataEditorComponent,
    RiskDataEditorComponent
  ],
  exports: [RouterModule],
  providers: [
    PopulationService,
    PopulationResolver,
    PartyResolver,
    CommunityService,
    PartyService,
    RiskService
  ]
})
export class DataEntryModule {
}
