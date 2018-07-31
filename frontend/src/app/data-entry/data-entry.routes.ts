import { Routes } from "@angular/router";
import { PopulationComponent } from "./population/population.component";
import { RiskChecklistComponent } from "./risk-checklist/risk-checklist.component";
import { PartyBuildComponent } from "./party-build/party-build.component";
import { DataEntryComponent } from "./data-entry.component";

export const dataEntryRoutes:Routes = [
    {
        path: "", component: DataEntryComponent,
        children: [
            {path: "population", component: PopulationComponent},
            {path: "risk", component: RiskChecklistComponent},
            {path: "party", component: PartyBuildComponent}
        ]
    }
];
