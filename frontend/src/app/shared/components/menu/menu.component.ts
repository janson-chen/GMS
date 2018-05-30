import { Component, OnInit } from '@angular/core';
import { CoreComponent } from "../core/core.component";
import { MENUS } from "./menus.data";
import { MenuData } from "./menus.data";

@Component({
  selector: 'gm-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent extends CoreComponent<MenuData[]> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    this.data = MENUS.data;
  }

}
