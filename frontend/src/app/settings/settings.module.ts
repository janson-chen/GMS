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
import { GroupDetailComponent } from "./group-manager/detail/group-detail.component";
import { GroupMemberEditorComponent } from "./group-manager/detail/data-editor/data-editor.component";
import { GroupDetailResolver } from "./group-manager/detail/group-detail-resolver";
import { NewsManagerComponent } from "./news-manager/news-manager.component";
import { NewsListComponent } from "./news-manager/news-table/news-table.component";
import { CreateNewsComponent } from "./news-manager/create/create.component";
import { NewsService } from "./news-manager/news.service";
import { NewsResolver } from "./news-manager/news-resolver";
import { NewsDataEditorComponent } from "./news-manager/data-editor/data-editor.component";
import { NewsAttachmentEditorComponent } from "./news-manager/attachment-editor/data-editor.component";
import { LogListComponent } from "./logs-manager/log-table/log-table.component";
import { BasicSettingsListComponent } from "./external-manager/external-table/external-table.component";
import { ExternalManagerService } from "./external-manager/external-manager.service";
import { ExternalResolver } from "./external-manager/external-resolver";
import { ExternalEditorComponent } from "./external-manager/external-data-editor/data-editor.component";
import { BasicSettingsEditorComponent } from "./external-manager/data-editor/data-editor.component";
import { DictionaryManagerComponent } from "./dictionary-manager/dictionary-manager.component";
import { DictionaryResolver } from "./dictionary-manager/dictionary-resolver";
import { DictionaryManagerService } from "./dictionary-manager/dictionary-manager.service";
import { DictionaryListComponent } from "./dictionary-manager/dictionary-table/dictionary-table.component";
import { DictionaryEditorComponent } from "./dictionary-manager/data-editor/data-editor.component";
import { DictionaryCreateComponent } from "./dictionary-manager/create/create.component";
import { DictionaryDetailComponent } from "./dictionary-manager/detail/dictionary-detail.component";
import { DictionaryDetailEditorComponent } from "./dictionary-manager/detail/data-editor/data-editor.component";
import { DictionaryDetailResolver } from "./dictionary-manager/dictionary-detail-resolver";
import { DictionaryDetailCreateComponent } from "./dictionary-manager/detail/create/create.component";
import { PaginationModule } from "ngx-bootstrap";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  imports: [
    FontAwesomeModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forChild(settingsRroutes),
    PaginationModule.forRoot(),
    NgxPaginationModule
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
    GroupListComponent,
    GroupDetailComponent,
    GroupMemberEditorComponent,
    NewsManagerComponent,
    NewsListComponent,
    CreateNewsComponent,
    NewsDataEditorComponent,
    NewsAttachmentEditorComponent,
    LogListComponent,
    ExternalEditorComponent,
    BasicSettingsListComponent,
    BasicSettingsEditorComponent,
    DictionaryManagerComponent,
    DictionaryListComponent,
    DictionaryEditorComponent,
    DictionaryCreateComponent,
    DictionaryDetailComponent,
    DictionaryDetailCreateComponent,
    DictionaryDetailEditorComponent
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
    GroupManagerService,
    GroupDetailResolver,
    NewsService,
    NewsResolver,
    ExternalManagerService,
    ExternalResolver,
    DictionaryResolver,
    DictionaryDetailResolver,
    DictionaryManagerService
  ]
})
export class SettingsModule {
}
