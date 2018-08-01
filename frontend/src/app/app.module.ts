import { ErrorHandler, NgModule } from "@angular/core";
import { FormBuilder, FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ROUTES } from "./app.routes";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { HomeComponent } from "./home/home.component";
import { environment } from "environments/environment";
import { APP_RESOLVER_PROVIDERS } from "./app.resolver";
import { AppService } from "./app.service";
import { UserService } from "./shared/services/user.service";
import { ErrorsHandler } from "./shared/services/errors-handler";
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthGuard } from "./shared/services/auth-guard.service";
import "../styles/styles.scss";
import { UserManagerComponent } from './settings/user-manager/user-manager.component';
import { CommunityManagerComponent } from './settings/community-manager/community-manager.component';
import { MenusManagerComponent } from './settings/menus-manager/menus-manager.component';
import { LogsManagerComponent } from './settings/logs-manager/logs-manager.component';
import { ExternalManagerComponent } from './settings/external-manager/external-manager.component';

const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  FormBuilder,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AppService,
    multi: true
  },
  {
    provide: ErrorHandler,
    useClass: ErrorsHandler
  },
  UserService,
  ToastrService,
  AuthGuard
];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot(),
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules,
      enableTracing: false
    })
  ],
  providers: [environment.ENV_PROVIDERS, APP_PROVIDERS]
})
export class AppModule {

}
