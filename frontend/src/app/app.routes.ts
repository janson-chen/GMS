import { Routes } from "@angular/router";
import { NoContentComponent } from "./no-content";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";

export const ROUTES: Routes = [
    {path: "home", component: HomeComponent},
    {path: "login", component: LoginComponent},
    {
        path: "entry",
        loadChildren: "./data-entry/data-entry.module#DataEntryModule"
    },
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "**", component: NoContentComponent}
];
