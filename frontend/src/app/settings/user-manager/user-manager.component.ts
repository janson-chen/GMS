import { Component, OnInit } from '@angular/core';
import { ModalContainerComponent } from "../../shared/components/modal-container/modal-container.component";
import { CommunityService } from "../community-manager/community.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Community } from "../community-manager/community.data";
import { USER_MANAGER_TABLE_COLUMES } from "./user.data";

@Component({
  selector: 'gm-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent extends ModalContainerComponent implements OnInit {
  columns = USER_MANAGER_TABLE_COLUMES;
  communities: Community[] = [];

  constructor(private communityService: CommunityService, protected modalService: NgbModal) {
    super(modalService);
  }

  async ngOnInit() {
    this.communities = await this.getCommunities();
    console.log("communities", this.communities);
  }

  async getCommunities(): Promise<Community[]> {
    return this.communityService.getList();
  }

}
