import { Routes } from "@angular/router";
import { PopulationComponent } from "./population/population.component";
import { RiskChecklistComponent } from "./risk-checklist/risk-checklist.component";
import { PartyBuildComponent } from "./party-build/party-build.component";
import { DataEntryComponent } from "./data-entry.component";
import { PopulationResolver } from "./population/population-resolver";
import { PartyResolver } from "./party-build/party-resolver";
import { PopulationDetailComponent } from "./population/detail/population-detail.component";
import { PopulationDetailResolver } from "./population/population-detail-resolver";
import { PopulationFamilyResolver } from "./population/population-detail-family-group-resolver";
import { CommunityResolver } from "../settings/community-manager/community-resolver";
import { RiskResolver } from "./risk-checklist/risk-resolver";
import { GroupResolver } from "../settings/group-manager/group-resolver";

export const dataEntryRoutes:Routes = [
    {
        path: "", component: DataEntryComponent,
        children: [
            {
              path: "population",
              component: PopulationComponent,
              resolve: {
                populations: PopulationResolver,
                communities: CommunityResolver
              }
            },
          {
            path: "population/:id",
            component: PopulationDetailComponent,
            resolve: {
              detail: PopulationDetailResolver,
              families: PopulationFamilyResolver,
              communities: CommunityResolver
            }
          },
            { path: "risk",
              component: RiskChecklistComponent,
              resolve: {
                riskEvents: RiskResolver,
                communities: CommunityResolver,
                groups: GroupResolver,
              }
            },
            {
              path: "party",
              component: PartyBuildComponent,
              resolve: {
                partyActivities: PartyResolver,
                communities: CommunityResolver
              }
            }
        ]
    }
];
