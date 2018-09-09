import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagerComponent } from "./user-manager/user-manager.component";
import { MenusManagerComponent } from "./menus-manager/menus-manager.component";
import { LogsManagerComponent } from "./logs-manager/logs-manager.component";
import { CommunityManagerComponent } from "./community-manager/community-manager.component";
import { ExternalManagerComponent } from "./external-manager/external-manager.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { settingsRroutes } from "./settings.routes";
import { SettingsComponent } from "./settings.component";
import { CreateUserComponent } from './user-manager/create/create.component';
import { CommunityService } from "./community-manager/community.service";
import { UserManagerService } from "./user-manager/user-manager.service";
import { RoleManagerComponent } from "./role-manager/role-manager.component";
import { RoleManagerService } from "./role-manager/role-manager.service";
import { CreateRoleComponent } from "./role-manager/create/create.component";
import { RoleResolver } from "./role-manager/role-resolver";
import { CreateCommunityComponent } from "./community-manager/create/create.component";
import { CommunityResolver } from "./community-manager/community-resolver";
import { CommunityListComponent } from "./community-manager/community-table/community-table.component";
import { RoleListComponent } from "./role-manager/role-table/role-table.component";
import { UserListComponent } from "./user-manager/user-table/user-table.component";
import { UserResolver } from "./user-manager/user-resolver";
import { MenuManagerService } from "./menus-manager/menu-manager.service";
import { CreateMenuComponent } from "./menus-manager/create/create.component";
import { MenuListComponent } from "./menus-manager/menu-table/menu-table.component";
import { LogManagerService } from "./logs-manager/log-manager.service";
import { LogResolver } from "./logs-manager/log-resolver";
import { GroupManagerComponent } from "./group-manager/group-manager.component";
import { GroupResolver } from "./group-manager/group-resolver";
import { GroupManagerService } from "./group-manager/group-manager.service";
import { CreateGroupComponent } from "./group-manager/create/create.component";
import { GroupListComponent } from "./group-manager/group-table/group-table.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  imports: [
    FontAwesomeModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forChild(settingsRroutes)
  ],
  declarations: [
    GroupManagerComponent,
    UserManagerComponent,
    MenusManagerComponent,
    LogsManagerComponent,
    CommunityManagerComponent,
    ExternalManagerComponent,
    SettingsComponent,
    CreateRoleComponent,
    CreateUserComponent,
    CreateMenuComponent,
    CreateCommunityComponent,
    RoleManagerComponent,
    CommunityListComponent,
    RoleListComponent,
    UserListComponent,
    MenuListComponent,
    CreateGroupComponent,
    GroupListComponent
  ],
  providers: [
    CommunityService,
    UserManagerService,
    RoleManagerService,
    RoleResolver,
    GroupResolver,
    CommunityResolver,
    UserResolver,
    MenuManagerService,
    LogManagerService,
    LogResolver,
    GroupManagerService
  ]
})
export class SettingsModule {
}
