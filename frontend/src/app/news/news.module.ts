import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from "../shared/shared.module";
import { newsRroutes } from "./news.routes";
import { NewsComponent } from "./news.component";

@NgModule({
  imports: [
    FontAwesomeModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forChild(newsRroutes)
  ],
  declarations: [
    NewsComponent
  ],
  providers: []
})
export class NewsModule {
}
