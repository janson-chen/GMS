import { Component, OnInit } from '@angular/core';
import { ModalContainerComponent } from "../../shared/components/modal-container/modal-container.component";
import { CommunityService } from "../community-manager/community.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Community } from "../community-manager/community.data";
import { RoleManagerService } from "./role-manager.service";
import { Permission, Role, USER_MANAGER_TABLE_COLUMES } from "./role.data";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../../shared/services/user.service";
import { ToastrService } from "ngx-toastr";
import { FormBuilder } from "@angular/forms";
import { ResponseData } from "../../shared/components/core/core.data";

@Component({
  selector: 'gm-role-manager',
  templateUrl: './role-manager.component.html',
  styleUrls: ['./role-manager.component.scss']
})
export class RoleManagerComponent extends ModalContainerComponent implements OnInit {
  columns = USER_MANAGER_TABLE_COLUMES;
  communities: Community[] = [];
  permissions: Permission[];
  roles: Role[] = [];

  constructor(
    private communityService: CommunityService,
    private roleManagerService: RoleManagerService,
    private route: ActivatedRoute,
    protected userService: UserService,
    protected fb: FormBuilder,
    protected toastService: ToastrService,
    protected modalService: NgbModal
  ) {
    super();

    route.data.subscribe((data: { roles: ResponseData<Role>}) => {
      this.roles = data.roles.detail;
      this.queryOptions.totalCount = data.roles.totalCount;
    });
  }

  async ngOnInit() {
    this.permissions = await this.getPermissions();
  }

  private async getPermissions(): Promise<Permission[]> {
    return this.roleManagerService.getPermissions();
  }

  async search(page: number): Promise<void> {
    this.queryOptions.page = page;
    const result = await this.roleManagerService.query(this.queryUrl, {});
    this.permissions = result.detail;
  }

}
