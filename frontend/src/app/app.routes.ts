import { Routes } from "@angular/router";
import { NoContentComponent } from "./no-content";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./shared/services/auth-guard.service";

export const ROUTES: Routes = [
  {
    path: "home",
    component: HomeComponent,
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
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", component: NoContentComponent}
];
