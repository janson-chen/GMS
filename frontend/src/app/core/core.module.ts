import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenusService } from "./service/menus.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [MenusService]
})
export class CoreModule { }
