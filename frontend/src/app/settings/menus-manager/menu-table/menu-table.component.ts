import { Component, OnInit } from '@angular/core';
import { CoreComponent } from "../core/core.component";
import { TableComponent } from "../../../shared/components/table/table.component";
import { MenuManagerService } from "../menu-manager.service";
import { MenusService } from "../../../core/service/menus.service";
import { Menu } from "../../../core/models/menu.data";

@Component({
  selector: 'gm-menu-table',
  templateUrl: './menu-table.component.html',
  styleUrls: ['./menu-table.component.scss']
})
export class MenuListComponent extends TableComponent<Menu[]> implements OnInit {
  page: number = 1;

  constructor(
    private menuManagerService: MenuManagerService,
    private menusService: MenusService
  ) {
    super();
  }

  ngOnInit() {
  }

  async removeMenu(id: string): Promise<void> {
    await this.menuManagerService.removeMenu(id);
    void this.updateMenuList();
  }

  editMenu(id: string) {

  }

  getMenuNameById(id: string): string {
    if (id == "-1") {
      return "无";
    }
    const parentMenu = this.data.find(menu => menu.id == id);
    return parentMenu ? parentMenu.name : "";
  }

  async updateMenuList(): Promise<void> {
    this.menusService.menus = await this.menuManagerService.getList("/menus");
  }

}
