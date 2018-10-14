import { ToastrService } from "ngx-toastr";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { Party, PARTY_MANAGER_TABLE_COLUMES, SEARCH_DATA } from "./party.data";
import { ModalContainerComponent } from "../../shared/components/modal-container/modal-container.component";
import { Community } from "../../settings/community-manager/community.data";
import { CommunityService } from "../../settings/community-manager/community.service";
import { PartyService } from "./party.service";
import { UserService } from "../../shared/services/user.service";
import { ResponseData } from "../../shared/components/core/core.data";

@Component({
  selector: 'gm-party-build',
  templateUrl: './party-build.component.html',
  styleUrls: ['./party-build.component.scss']
})
export class PartyBuildComponent extends ModalContainerComponent implements OnInit {
  columns = PARTY_MANAGER_TABLE_COLUMES;
  communities: Community[] = [];
  partyActivitiesList: Party[];
  searchData = SEARCH_DATA;

  constructor(
    private communityService: CommunityService,
    private route: ActivatedRoute,
    private partyService: PartyService,
    protected userService: UserService,
    protected fb: FormBuilder,
    protected toastService: ToastrService,
    protected modalService: NgbModal
  ) {
    super();
    route.data.subscribe((data: { partyActivities: ResponseData<Party>, communities: ResponseData<Community> }) => {
      this.partyActivitiesList = data.partyActivities.detail;
      this.queryOptions.totalCount = data.partyActivities.totalCount;
      this.communities = data.communities.detail;
      this.communityService.saveCommunities(this.communities);
    });
  }

  async ngOnInit() {

  }

  async getCommunities(): Promise<Community[]> {
    return this.communityService.getList("/childList/id=1");
  }

  async updateParties(): Promise<void> {
    const result = await this.partyService.query(`query/${this.queryUrl}`, {});
    this.partyActivitiesList = result && result.detail;
  }

  async search(page: number, searchValue: Object): Promise<void> {
    this.queryOptions.page = page;
    const result = await this.partyService.query(`query/${this.queryUrl}`, searchValue);
    this.partyActivitiesList = result.detail;
    this.queryOptions.totalCount = result.totalCount;
  }

  async query(searchValue: Object): Promise<void> {
    const result = await this.partyService.query(`query/${this.queryUrl}`, searchValue);
    this.partyActivitiesList = result.detail;
    this.queryOptions.totalCount = result.totalCount;
  }

}
