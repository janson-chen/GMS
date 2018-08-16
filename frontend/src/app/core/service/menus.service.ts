import { Injectable } from "@angular/core";
import { Menu } from "../models/menu.data";

@Injectable()
export class MenusService {
  private menus_: Menu[];

  get menus() {
    return this.menus_;
  }

  set menus(value) {
    if (Array.isArray(value)) {
      this.menus_ = value;
    }
  }
}

