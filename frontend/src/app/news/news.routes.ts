import { Routes } from "@angular/router";

import { NewsComponent } from "./news.component";

export const newsRroutes: Routes = [
  {
    path: "", component: NewsComponent,
    children: [

    ]
  }
];
