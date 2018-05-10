import { NgModule } from "@angular/core";
import { RouterModule, PreloadAllModules } from "@angular/router";

import { environment } from "environments/environment";
import { ROUTES } from "./app.routes";
import { AppComponent } from "./app.component";
import { APP_RESOLVER_PROVIDERS } from "./app.resolver";
import { AppState, InternalStateType } from "./app.service";
import { HomeComponent } from "./home/home.component";
import { NoContentComponent } from "./no-content/no-content.component";

import { HeaderComponent } from './shared/components/header/header.component';
import { NavigatorComponent } from './shared/components/navigator/navigator.component';
import { CoreComponent } from './shared/components/core/core.component';
import { SharedModule } from "./shared/shared.module";

import "../styles/styles.scss";

const APP_PROVIDERS = [...APP_RESOLVER_PROVIDERS, AppState];

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, HomeComponent],
    imports: [
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
