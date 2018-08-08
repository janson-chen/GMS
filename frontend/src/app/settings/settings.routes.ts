import { Routes } from "@angular/router";

import { SettingsComponent } from "./settings.component";
import { CommunityManagerComponent } from "./community-manager/community-manager.component";
import { UserManagerComponent } from "./user-manager/user-manager.component";
import { MenusManagerComponent } from "./menus-manager/menus-manager.component";
import { RoleManagerComponent } from "./role-manager/role-manager.component";
import { RoleResolver } from "./role-manager/role-resolver";
import { CommunityResolver } from "./community-manager/community-resolver";

export const settingsRroutes: Routes = [
    {
        path: "", component: SettingsComponent,
        children: [
            {path: "community",
              component:
              CommunityManagerComponent,
              resolve: [CommunityResolver]
            },
            {
              path: "roles",
              component: RoleManagerComponent,
              resolve: {
                roles: RoleResolver
              }
            },
            {path: "users", component: UserManagerComponent},
            {path: "menus", component: MenusManagerComponent}
        ]
    }
];
