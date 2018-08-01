import { Routes } from "@angular/router";

import { SettingsComponent } from "./settings.component";
import { CommunityManagerComponent } from "./community-manager/community-manager.component";
import { UserManagerComponent } from "./user-manager/user-manager.component";
import { MenusManagerComponent } from "./menus-manager/menus-manager.component";

export const settingsRroutes: Routes = [
    {
        path: "", component: SettingsComponent,
        children: [
            {path: "community", component: CommunityManagerComponent},
            {path: "users", component: UserManagerComponent},
            {path: "menus", component: MenusManagerComponent}
        ]
    }
];
