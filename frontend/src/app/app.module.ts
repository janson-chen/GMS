import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ROUTES } from "./app.routes";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { HomeComponent } from "./home/home.component";
import { environment } from "environments/environment";
import { APP_RESOLVER_PROVIDERS } from "./app.resolver";
import { InternalStateType } from "./app.service";
import { NoContentComponent } from "./no-content/no-content.component";
import { HeaderComponent } from './shared/components/header/header.component';
import { NavigatorComponent } from './shared/components/navigator/navigator.component';
import { AppService } from "./app.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from "./shared/components/core/user.service";

import "../styles/styles.scss";

const APP_PROVIDERS = [...APP_RESOLVER_PROVIDERS];

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
        RouterModule.forRoot(ROUTES, {
            useHash: Boolean(history.pushState) === false,
            preloadingStrategy: PreloadAllModules,
            enableTracing: false
        })
],
    providers: [environment.ENV_PROVIDERS, APP_PROVIDERS, AppService, UserService]
})
export class AppModule {

}
