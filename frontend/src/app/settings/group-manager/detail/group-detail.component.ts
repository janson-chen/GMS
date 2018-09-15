import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { faEdit, faTrash, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

import { CoreComponent } from "../core/core.component";
import { GroupManagerService } from "../group-manager.service";
import { GROUP_MEMBER_MANAGER_TABLE_COLUMES, UserGroup, UserGroupMember } from "../group.data";
import { ModalContainerComponent } from "../../../shared/components/modal-container/modal-container.component";
import { UserInfo } from "../../user-manager/user.data";

@Component({
  selector: 'gm-group-detail-table',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent extends ModalContainerComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;
  faCalendar = faCalendar;
  columns = GROUP_MEMBER_MANAGER_TABLE_COLUMES;
  users: UserInfo[] = [];
  groups: UserGroup[] = [];
  groupId: string = "";

  constructor(
    private route: ActivatedRoute,
    protected modalService: NgbModal,
    protected fb: FormBuilder,
    protected toastrService: ToastrService,
    private groupManageService: GroupManagerService
  ) {
    super();
    this.groupId = this.route.snapshot.params["id"];
    console.log("id", this.groupId);

    route.data.subscribe((data: { groupMembers: { detail: UserGroupMember[] }, groups: { detail: UserGroup[]}, users: { detail: UserInfo[] } }) => {
      this.data = data.groupMembers.detail;
      this.users = data.users.detail;
      this.groups = data.groups.detail;
    });
  }

  ngOnInit() {

  }

  async removeGroupMember(userId: string, userMemberId): Promise<void> {
    await this.groupManageService.deleteGroupMembers([{
      userId: userId,
      userMemberId: userMemberId
    }]);
    void this.updateGroupMembers();
  }

  async submit(): Promise<void> {

  }

  async updateGroupMembers(): Promise<void> {
    const result = await this.groupManageService.getList(`/UserMemberDetailList/UserMemberId=${this.groupId}/page=-1/pageSize=-1`);
    if (result.detail) {
      this.data = result.detail;
    }
  }

}
