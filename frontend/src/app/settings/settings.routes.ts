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
import { NewsManagerComponent } from "./news-manager/news-manager.component";
import { NewsResolver } from "./news-manager/news-resolver";
import { ExternalManagerComponent } from "./external-manager/external-manager.component";
import { ExternalResolver } from "./external-manager/external-resolver";
import { DictionaryManagerComponent } from "./dictionary-manager/dictionary-manager.component";
import { DictionaryResolver } from "./dictionary-manager/dictionary-resolver";
import { DictionaryDetailComponent } from "./dictionary-manager/detail/dictionary-detail.component";
import { DictionaryDetailResolver } from "./dictionary-manager/dictionary-detail-resolver";
import { ResetPasswordComponent } from "./account/reset-password/reset-password.component";

export const settingsRroutes: Routes = [
  {
    path: "", component: SettingsComponent,
    children: [
      {
        path: "communites",
        component: CommunityManagerComponent,
        resolve: {
          communities: CommunityResolver
        }
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
        path: "manageNews",
        component: NewsManagerComponent,
        resolve: {
          news: NewsResolver
        }
      },
      {
        path: "logs",
        component: LogsManagerComponent,
        resolve: {
          logs: LogResolver
        }
      },
      {
        path: "external",
        component: ExternalManagerComponent,
        resolve: {
          basicsettings: ExternalResolver
        }
      },
      {
        path: "dictionaries",
        component: DictionaryManagerComponent,
        resolve: {
          dictionaries: DictionaryResolver
        }
      },
      {
        path: "dictionaries/:dictionaryId",
        component: DictionaryDetailComponent,
        resolve: {
          dictionaries: DictionaryDetailResolver
        }
      },
      {
        path: "reset",
        component: ResetPasswordComponent
      }
    ]
  }
];
