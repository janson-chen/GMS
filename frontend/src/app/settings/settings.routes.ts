import { Routes } from "@angular/router";

import { SettingsComponent } from "./settings.component";
import { CommunityManagerComponent } from "./community-manager/community-manager.component";
import { UserManagerComponent } from "./user-manager/user-manager.component";
import { MenusManagerComponent } from "./menus-manager/menus-manager.component";
import { RoleManagerComponent } from "./role-manager/role-manager.component";
import { RoleResolver } from "./role-manager/role-resolver";
import { CommunityResolver } from "./community-manager/community-resolver";
import { UserResolver } from "./user-manager/user-resolver";
import { LogsManagerComponent } from "./logs-manager/logs-manager.component";
import { LogResolver } from "./logs-manager/log-resolver";
import { GroupManagerComponent } from "./group-manager/group-manager.component";
import { GroupResolver } from "./group-manager/group-resolver";
import { GroupDetailComponent } from "./group-manager/detail/group-detail.component";
import { GroupDetailResolver } from "./group-manager/detail/group-detail-resolver";

export const settingsRroutes: Routes = [
  {
    path: "", component: SettingsComponent,
    children: [
      {
        path: "communites",
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
      {
        path: "users",
        component: UserManagerComponent,
        resolve: {
          users: UserResolver
        }
      },
      {
        path: "groups",
        component: GroupManagerComponent,
        resolve: {
          groups: GroupResolver
        }
      },
      {
        path: "groups/:id",
        component: GroupDetailComponent,
        resolve: {
          groupMembers: GroupDetailResolver,
          groups: GroupResolver,
          users: UserResolver
        }
      },
      {
        path: "menus",
        component: MenusManagerComponent
      },
      {
        path: "logs",
        component: LogsManagerComponent,
        resolve: {
          logs: LogResolver
        }
      }
    ]
  }
];
