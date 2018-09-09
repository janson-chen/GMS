import { Component, OnInit } from '@angular/core';
import { ModalContainerComponent } from "../../shared/components/modal-container/modal-container.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ActivatedRoute } from "@angular/router";
import { GroupManagerService } from "./group-manager.service";
import { GROUP_MANAGER_TABLE_COLUMES, GroupResponse, UserGroup } from "./group.data";
import { UserService } from "../../shared/services/user.service";
import { ToastrService } from "ngx-toastr";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'gm-group-manager',
  templateUrl: './group-manager.component.html',
  styleUrls: ['./group-manager.component.scss']
})
export class GroupManagerComponent extends ModalContainerComponent implements OnInit {
  columns = GROUP_MANAGER_TABLE_COLUMES;
  groups: UserGroup[];

  constructor(
    private groupManageService: GroupManagerService,
    private route: ActivatedRoute,
    protected userService: UserService,
    protected fb: FormBuilder,
    protected toastService: ToastrService,
    protected modalService: NgbModal
  ) {
    super();

    route.data.subscribe((data: { groups: { detail: UserGroup[]} }) => {
      this.groups = data.groups.detail;
    });
  }

  async ngOnInit() {

  }

  async updateGroupList(): Promise<void> {
    const result = await <GroupResponse>this.groupManageService.getList("/usermemberlist/page=-1/pageSize=-1");
    this.groups = result.detail;
  }
}
