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
import { CreateComponent } from './user-manager/create/create.component';

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
    CreateComponent
  ]
})
export class SettingsModule { }
