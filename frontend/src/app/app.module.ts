import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, PreloadAllModules } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { environment } from "environments/environment";
import { ROUTES } from "./app.routes";
import { AppComponent } from "./app.component";
import { APP_RESOLVER_PROVIDERS } from "./app.resolver";
import { AppState, InternalStateType } from "./app.service";
import { HomeComponent } from "./home/home.component";
import { NoContentComponent } from "./no-content/no-content.component";

import "../styles/styles.scss";
import "../styles/headings.css";

const APP_PROVIDERS = [...APP_RESOLVER_PROVIDERS, AppState];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, HomeComponent, NoContentComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  providers: [environment.ENV_PROVIDERS, APP_PROVIDERS]
})
export class AppModule {}
