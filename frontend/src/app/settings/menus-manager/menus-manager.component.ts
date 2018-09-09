import { Component, OnInit } from '@angular/core';
import { Menu } from "../../core/models/menu.data";
import { ActivatedRoute } from "@angular/router";
import { ModalContainerComponent } from "../../shared/components/modal-container/modal-container.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { MENU_MANAGER_TABLE_COLUMES } from "./menu-manager.data";
import { MenuManagerService } from "./menu-manager.service";
import { MenusService } from "../../core/service/menus.service";
import { UserService } from "../../shared/services/user.service";
import { ToastrService } from "ngx-toastr";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'gm-menus-manager',
  templateUrl: './menus-manager.component.html',
  styleUrls: ['./menus-manager.component.scss']
})
export class MenusManagerComponent extends ModalContainerComponent implements OnInit {
  columns = MENU_MANAGER_TABLE_COLUMES;
  menus: Menu[] = [];
  rootMenus: Menu[] = [];

  constructor(
    private route: ActivatedRoute,
    protected menuManagerService: MenuManagerService,
    private menusService: MenusService,
    protected userService: UserService,
    protected fb: FormBuilder,
    protected toastService: ToastrService,
    protected modalService: NgbModal

  ) {
    super();

  }

  ngOnInit() {
    this.menusService.behavierSubject.subscribe((data: Menu[]) => {
      this.rootMenus = data;
      this.menus = this.menusService.getMenusCollection(data);
    });
  }

  async updateMenuList(): Promise<void> {
    this.menusService.menus = await this.menuManagerService.getList("/menus");
  }
}
