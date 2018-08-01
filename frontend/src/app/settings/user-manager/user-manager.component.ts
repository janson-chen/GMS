import { Component, OnInit } from '@angular/core';
import { USER_MANAGER_TABLE_COLUMES } from "../../shared/components/core/core.data";
import { ModalContainerComponent } from "../../shared/components/modal-container/modal-container.component";

@Component({
  selector: 'gm-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent extends ModalContainerComponent implements OnInit {
  columns = USER_MANAGER_TABLE_COLUMES;

  ngOnInit() {

  }

}
