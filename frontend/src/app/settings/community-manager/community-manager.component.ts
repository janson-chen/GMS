import { Component } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { CommunityService } from "./community.service";
import { UserService } from "../../shared/services/user.service";
import { ResponseData } from "../../shared/components/core/core.data";
import { Community, COMMUNITY_TABLE_COLUMES } from "./community.data";
import { ModalContainerComponent } from "../../shared/components/modal-container/modal-container.component";

@Component({
  selector: 'gm-community-manager',
  templateUrl: './community-manager.component.html',
  styleUrls: ['./community-manager.component.scss']
})
export class CommunityManagerComponent extends ModalContainerComponent {
  columns = COMMUNITY_TABLE_COLUMES;
  communities: Community[] = [];

  constructor(
              private communityService: CommunityService,
              private route: ActivatedRoute,
              protected userService: UserService,
              protected fb: FormBuilder,
              protected toastService: ToastrService,
              protected modalService: NgbModal
  ) {
    super();

    route.data.subscribe((data: {communities: ResponseData<Community>}) => {
      this.communities = data.communities.detail;
      this.communityService.saveCommunities(this.communities);
      this.queryOptions.totalCount = data.communities.totalCount;
    });
  }

  async updateCommunities(): Promise<void> {
    const result = await this.communityService.query(`query/${this.queryUrl}`, {});
    this.communities = result.detail;
    this.communityService.saveCommunities(this.communities);
    this.queryOptions.totalCount = result.totalCount;
  }

  async search(page: number): Promise<void> {
    this.queryOptions.page = page;
    const result = await this.communityService.query(`query/${this.queryUrl}`, {});
    this.communities = result.detail;
    this.queryOptions.totalCount = result.totalCount;
  }
}
