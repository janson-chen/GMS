import { Component, OnInit } from '@angular/core';
import { ModalContainerComponent } from "../../shared/components/modal-container/modal-container.component";
import { CommunityService } from "../community-manager/community.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Community } from "../community-manager/community.data";
import { USER_MANAGER_TABLE_COLUMES, UserInfo } from "./user.data";
import { Role } from "../role-manager/role.data";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'gm-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent extends ModalContainerComponent implements OnInit {
  columns = USER_MANAGER_TABLE_COLUMES;
  communities: Community[] = [];
  userList: UserInfo[];

  constructor(
    private communityService: CommunityService,
    protected modalService: NgbModal,
    private route: ActivatedRoute
  ) {
    super(modalService);

    route.data.subscribe((data: { users: { Detail: UserInfo[]} }) => {
      this.userList = data.users.Detail;
      console.log("users", data);
    });
  }

  async ngOnInit() {
    this.communities = await this.getCommunities();
    this.communityService.saveCommunities(this.communities);
    console.log("communities", this.communityService.communitiesMap);
  }

  async getCommunities(): Promise<Community[]> {
    return this.communityService.getList("/childList/id=1");
  }

}
