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

export const dataEntryRoutes:Routes = [
    {
        path: "", component: DataEntryComponent,
        children: [
            {
              path: "population",
              component: PopulationComponent,
              resolve: {
                populations: PopulationResolver
              }
            },
          {
            path: "population/:id",
            component: PopulationDetailComponent,
            resolve: {
              detail: PopulationDetailResolver,
              families: PopulationFamilyResolver
            }
          },
            {path: "risk", component: RiskChecklistComponent},
            {
              path: "party",
              component: PartyBuildComponent,
              resolve: {
                partyActivities: PartyResolver
              }
            }
        ]
    }
];
