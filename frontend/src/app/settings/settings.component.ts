import { Component, OnInit } from '@angular/core';
import { MenusService } from "../core/service/menus.service";
import { Menu } from "../core/models/menu.data";

@Component({
  selector: 'gm-settings',
  template: `
    <div class="data-entry-panel">
      <gm-menu [data]="menus"></gm-menu>
      <div class="data-set">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  menus: Menu[];

  constructor(private menusService: MenusService) {
  }

  ngOnInit() {
    this.menusService.behavierSubject.subscribe((data: Menu[]) => {
      this.menus = data;
      console.log("update menus", data);
    });
  }
}