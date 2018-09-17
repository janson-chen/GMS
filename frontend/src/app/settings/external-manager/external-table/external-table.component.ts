import { Component } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { FormBuilder } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { CoreComponent } from "../core/core.component";
import { ModalContainerComponent } from "../../../shared/components/modal-container/modal-container.component";
import { UserService } from "../../../shared/services/user.service";
import { BASIC_SETTING_MANAGER_TABLE_COLUMES, BasicSetting } from "../external-manager.data";
import { ExternalManagerService } from "../external-manager.service";

@Component({
  selector: 'gm-external-table',
  templateUrl: './external-table.component.html',
  styleUrls: ['./external-table.component.scss']
})
export class BasicSettingsListComponent extends ModalContainerComponent {
  columns = BASIC_SETTING_MANAGER_TABLE_COLUMES;
  faTrash = faTrash;
  faEdit = faEdit;
  currentEditItem: BasicSetting = null;

  constructor(
    protected userService: UserService,
    protected fb: FormBuilder,
    protected toastService: ToastrService,
    protected modalService: NgbModal,
    private externalManagerService: ExternalManagerService
  ) {
    super();
  }

  async updateBasicSettings(): Promise<void> {
    setTimeout(async () => {
      const result = await this.externalManagerService.getById("", "/basicsetting/id=1");
      if (result) {
        console.log("result", result);
        this.data = Array.of(result);
      }
    }, 1000);
  }
}
