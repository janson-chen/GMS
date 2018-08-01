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

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    UserManagerComponent,
    MenusManagerComponent,
    LogsManagerComponent,
    CommunityManagerComponent,
    ExternalManagerComponent
  ]
})
export class SettingsModule { }
