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

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forChild(settingsRroutes)
  ],
  declarations: [
    UserManagerComponent,
    MenusManagerComponent,
    LogsManagerComponent,
    CommunityManagerComponent,
    ExternalManagerComponent,
    SettingsComponent,
    CreateRoleComponent,
    CreateUserComponent,
    CreateCommunityComponent,
    RoleManagerComponent,
    CommunityListComponent,
    RoleListComponent
  ],
  providers: [
    CommunityService,
    UserManagerService,
    RoleManagerService,
    RoleResolver,
    CommunityResolver
  ]
})
export class SettingsModule { }
