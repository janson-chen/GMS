import { Component, OnInit } from '@angular/core';
import { ModalContainerComponent } from "../../shared/components/modal-container/modal-container.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ActivatedRoute } from "@angular/router";
import { GroupManagerService } from "./group-manager.service";
import { GROUP_MANAGER_TABLE_COLUMES, GroupResponse, UserGroup } from "./group.data";
import { UserService } from "../../shared/services/user.service";
import { ToastrService } from "ngx-toastr";
import { FormBuilder } from "@angular/forms";
import { ResponseData } from "../../shared/components/core/core.data";

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

    route.data.subscribe((data: { groups: ResponseData<UserGroup>}) => {
      this.groups = data.groups.detail;
      this.queryOptions.totalCount = data.groups.totalCount;
    });
  }

  async ngOnInit() {

  }

  async search(page: number): Promise<void> {
    this.queryOptions.page = page;
    const result = await this.groupManageService.query(this.queryUrl, `/usermemberlist/${this.queryUrl}`);
    this.groups = result.detail;
  }

  async updateGroupList(): Promise<void> {
    const result = await <GroupResponse>this.groupManageService.getList(`/usermemberlist/${this.queryUrl}`);
    this.groups = result.detail;
  }
}
