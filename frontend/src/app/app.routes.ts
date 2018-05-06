import { Routes } from "@angular/router";
import { NoContentComponent } from "./no-content";
import { HomeComponent } from "./home";

export const ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "**", component: NoContentComponent }
];
