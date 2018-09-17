import { Routes } from "@angular/router";

import { NewsComponent } from "./news.component";
import { NewsResolver } from "../settings/news-manager/news-resolver";

export const newsRroutes: Routes = [
  {
    path: "",
    component: NewsComponent,
    resolve: {
      news: NewsResolver
    },
    children: [

    ]
  }
];
