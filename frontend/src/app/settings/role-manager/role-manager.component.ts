import { Component, OnInit } from '@angular/core';
import { ModalContainerComponent } from "../../shared/components/modal-container/modal-container.component";
import { CommunityService } from "../community-manager/community.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Community } from "../community-manager/community.data";
import { RoleManagerService } from "./role-manager.service";
import { Permission, Role, USER_MANAGER_TABLE_COLUMES } from "./role.data";
import { ActivatedRoute } from "@angular/router";

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
    protected modalService: NgbModal,
    private roleManagerService: RoleManagerService,
    private route: ActivatedRoute
  ) {
    super(modalService);

    route.data.subscribe((data: { roles: {detail: Role[]}}) => {
      this.roles = data.roles.detail;
      console.log("roles", this.roles);
    });
  }

  async ngOnInit() {
    this.permissions = await this.getPermissions();
  }

  private async getPermissions(): Promise<Permission[]> {
    return this.roleManagerService.getPermissions();
  }


}
