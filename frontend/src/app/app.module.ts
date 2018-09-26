import { ErrorHandler, NgModule } from "@angular/core";
import { FormBuilder, FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { HttpModule } from "@angular/http";
import { PaginationModule } from "ngx-bootstrap";
import { NgxPaginationModule } from "ngx-pagination";

import { ROUTES } from "./app.routes";
import { AppService } from "./app.service";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { HomeComponent } from "./home/home.component";
import { environment } from "environments/environment";
import { APP_RESOLVER_PROVIDERS } from "./app.resolver";
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { UserService } from "./shared/services/user.service";
import { AuthGuard } from "./shared/services/auth-guard.service";
import { ErrorsHandler } from "./shared/services/errors-handler";
import { NewsService } from "./settings/news-manager/news.service";
import { NewsResolver } from "./settings/news-manager/news-resolver";
import { MenuManagerService } from "./settings/menus-manager/menu-manager.service";
import "../styles/styles.scss";
import { NgProgressModule } from "@ngx-progressbar/core";
import { NgProgressHttpModule } from "@ngx-progressbar/http";


library.add(fas, far);

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
  AuthGuard,
  MenuManagerService,
  NewsService,
  NewsResolver
];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpModule,
    FontAwesomeModule,
    SharedModule,
    CoreModule,
    PaginationModule.forRoot(),
    NgxPaginationModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule.forRoot(),
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
