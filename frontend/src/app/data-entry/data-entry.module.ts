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
import { PopulationListComponent } from "./population/population-table/population-table.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { PopulationDetailComponent } from "./population/detail/population-detail.component";
import { PopulationDetailResolver } from "./population/population-detail-resolver";
import { PopulationFamilyResolver } from "./population/population-detail-family-group-resolver";
import { MemberEditorComponent } from "./population/detail/data-editor/data-editor.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommunityResolver } from "../settings/community-manager/community-resolver";
import { PartyListComponent } from "./party-build/party-table/party-table.component";
import { BsDatepickerModule } from "ngx-bootstrap";
import { RiskListComponent } from "./risk-checklist/risk-table/risk-table.component";
import { RiskResolver } from "./risk-checklist/risk-resolver";
import { GroupResolver } from "../settings/group-manager/group-resolver";
import { GroupManagerService } from "../settings/group-manager/group-manager.service";
import { AttachmentEditorComponent } from "./risk-checklist/attachment-editor/data-editor.component";

@NgModule({
  imports: [
    FontAwesomeModule,
    CommonModule,
    SharedModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forChild(dataEntryRoutes)
  ],
  declarations: [
    DataEntryComponent,
    PopulationComponent,
    RiskChecklistComponent,
    PartyBuildComponent,
    PopulationDataEditorComponent,
    PartyDataEditorComponent,
    RiskDataEditorComponent,
    PopulationListComponent,
    PopulationDetailComponent,
    MemberEditorComponent,
    PartyListComponent,
    RiskListComponent,
    AttachmentEditorComponent
  ],
  exports: [RouterModule],
  providers: [
    PopulationService,
    PopulationResolver,
    PopulationDetailResolver,
    PopulationFamilyResolver,
    CommunityResolver,
    PartyResolver,
    CommunityService,
    PartyService,
    RiskService,
    RiskResolver,
    GroupResolver,
    GroupManagerService
  ]
})
export class DataEntryModule {
}
