import { Component, OnInit } from '@angular/core';
import { Menu } from "../../core/models/menu.data";
import { ActivatedRoute } from "@angular/router";
import { ModalContainerComponent } from "../../shared/components/modal-container/modal-container.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { MENU_MANAGER_TABLE_COLUMES } from "./menu-manager.data";

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
    protected modalService: NgbModal

  ) {
    super(modalService);
    route.data.subscribe((data: { menus:  Menu[]}) => {
      this.menus = data.menus;
      console.log("menus", this.menus);
    });
  }

  ngOnInit() {

  }

}
