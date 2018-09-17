import { Component } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { Community } from "../community-manager/community.data";
import { Party } from "../../data-entry/party-build/party.data";
import { BASIC_SETTING_MANAGER_TABLE_COLUMES, BasicSetting } from "./external-manager.data";
import { ModalContainerComponent } from "../../shared/components/modal-container/modal-container.component";
import { UserService } from "../../shared/services/user.service";
import { ExternalManagerService } from "./external-manager.service";

@Component({
  selector: 'gm-external-manager',
  templateUrl: './external-manager.component.html',
  styleUrls: ['./external-manager.component.scss']
})
export class ExternalManagerComponent extends ModalContainerComponent {
  basicsettings: BasicSetting[];
  columns = BASIC_SETTING_MANAGER_TABLE_COLUMES;

  constructor(
    private route: ActivatedRoute,
    protected userService: UserService,
    protected fb: FormBuilder,
    protected toastService: ToastrService,
    protected modalService: NgbModal,
    private externalService: ExternalManagerService
  ) {
    super();
    route.data.subscribe((data: { basicsettings: BasicSetting }) => {
      this.basicsettings = Array.of(data.basicsettings);
    });
  }

}
