import { Routes } from "@angular/router";
import { NoContentComponent } from "./no-content";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./shared/services/auth-guard.service";
import { NewsResolver } from "./settings/news-manager/news-resolver";

export const ROUTES: Routes = [
  {
    path: "home",
    component: HomeComponent,
    resolve: {
      news: NewsResolver
    },
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "entry",
    loadChildren: "./data-entry/data-entry.module#DataEntryModule"
  },
  {
    path: "settings",
    loadChildren: "./settings/settings.module#SettingsModule"
  },
  {
    path: "news",
    loadChildren: "./news/news.module#NewsModule"
  },
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", component: NoContentComponent}
];
