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
import { AppState, InternalStateType } from "./app.service";
import { NoContentComponent } from "./no-content/no-content.component";
import { HeaderComponent } from './shared/components/header/header.component';
import { NavigatorComponent } from './shared/components/navigator/navigator.component';
import "../styles/styles.scss";

const APP_PROVIDERS = [...APP_RESOLVER_PROVIDERS, AppState];

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, HomeComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        SharedModule,
        RouterModule.forRoot(ROUTES, {
            useHash: Boolean(history.pushState) === false,
            preloadingStrategy: PreloadAllModules
        })
    ],
    providers: [environment.ENV_PROVIDERS, APP_PROVIDERS]
})
export class AppModule {

}
