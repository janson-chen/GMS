import { Component, OnInit } from '@angular/core';
import { ModalContainerComponent } from "../../shared/components/modal-container/modal-container.component";
import { CommunityService } from "../community-manager/community.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Community } from "../community-manager/community.data";
import { USER_MANAGER_TABLE_COLUMES, UserInfo } from "./user.data";
import { ActivatedRoute } from "@angular/router";
import { Role } from "../role-manager/role.data";
import { RoleManagerService } from "../role-manager/role-manager.service";
import { UserManagerService } from "./user-manager.service";
import { FormBuilder } from "@angular/forms";
import { UserService } from "../../shared/services/user.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'gm-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent extends ModalContainerComponent implements OnInit {
  columns = USER_MANAGER_TABLE_COLUMES;
  communities: Community[] = [];
  roles: Role[] = [];
  userList: UserInfo[];

  constructor(
    private communityService: CommunityService,
    private roleManageService: RoleManagerService,
    private userManageService: UserManagerService,
    protected modalService: NgbModal,
    private route: ActivatedRoute,
    protected fb: FormBuilder,
    protected userService: UserService,
    protected toastrService: ToastrService
  ) {
    super();

    route.data.subscribe((data: { users: { detail: UserInfo[]} }) => {
      this.userList = data.users.detail;
    });
  }

  async ngOnInit() {
    this.communities = await this.getCommunities();
    this.roles = (await this.getRoles())['detail'];
    this.communityService.saveCommunities(this.communities);
  }

  async getCommunities(): Promise<Community[]> {
    return this.communityService.getList("/childList/id=1");
  }

  async getRoles(): Promise<Role[]> {
    return this.roleManageService.getList("/roles/page=-1/pageSize=-1");
  }


}
