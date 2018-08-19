import { Injectable } from "@angular/core";
import { Menu } from "../models/menu.data";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class MenusService {
  private menus_: Menu[];
  menuCollections: Menu[] = <Menu[]>[];
  behavierSubject: BehaviorSubject<Menu[]> = new BehaviorSubject<Menu[]>([]);
  menusMap: {
    [key: string]: string;
  } = {};

  get menus() {
    return this.menus_;
  }

  set menus(value) {
    if (Array.isArray(value)) {
      this.menus_ = value;
      this.menusMap["-1"] = "无";
      this.menus_.forEach(menu => {
        this.menusMap[menu.id] = menu.name;
      });

      this.behavierSubject.next(this.menus_);
    }
  }

  getMenusCollection(menus: Menu[]): Menu[] {
    this.menuCollections = [];
    menus.forEach(menu => {
      this.getChildMenusCollection(menu);
    });

    return menus.concat(this.menuCollections);
  }

  getChildMenusCollection(menu: Menu): void {
      if (menu.childMenu && menu.childMenu.length > 0) {
        menu.childMenu.forEach(theMenu => {
          this.getChildMenusCollection(theMenu);
        });
      } else {
        this.menuCollections.push(menu);
        this.menusMap[menu.id] = menu.name;
      }
  }
}

