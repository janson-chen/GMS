import { Component, OnInit } from '@angular/core';
import { Menu } from "../../core/models/menu.data";
import { ActivatedRoute } from "@angular/router";
import { ModalContainerComponent } from "../../shared/components/modal-container/modal-container.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { MENU_MANAGER_TABLE_COLUMES } from "./menu-manager.data";
import { MenuManagerService } from "./menu-manager.service";
import { MenusService } from "../../core/service/menus.service";

@Component({
  selector: 'gm-menus-manager',
  templateUrl: './menus-manager.component.html',
  styleUrls: ['./menus-manager.component.scss']
})
export class MenusManagerComponent extends ModalContainerComponent implements OnInit {
  columns = MENU_MANAGER_TABLE_COLUMES;
  menus: Menu[] = [];

  constructor(
    private route: ActivatedRoute,
    protected modalService: NgbModal,
    protected menuManagerService: MenuManagerService,
    private menusService: MenusService

  ) {
    super(modalService);

  }

  ngOnInit() {
    this.menusService.behavierSubject.subscribe((data: Menu[]) => {
      this.menus = this.menusService.getMenusCollection(data);
    });
  }

  async updateMenuList(): Promise<void> {
    this.menusService.menus = await this.menuManagerService.getList("/menus");
  }
}
