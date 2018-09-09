import { Component, OnInit } from '@angular/core';
import { Party, PARTY_MANAGER_TABLE_COLUMES } from "./party.data";
import { ModalContainerComponent } from "../../shared/components/modal-container/modal-container.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Community } from "../../settings/community-manager/community.data";
import { CommunityService } from "../../settings/community-manager/community.service";
import { Role } from "../../settings/role-manager/role.data";
import { ActivatedRoute } from "@angular/router";
import { PartyService } from "./party.service";

@Component({
  selector: 'gm-party-build',
  templateUrl: './party-build.component.html',
  styleUrls: ['./party-build.component.scss']
})
export class PartyBuildComponent extends ModalContainerComponent implements OnInit {
  columns = PARTY_MANAGER_TABLE_COLUMES;
  communities: Community[] = [];
  partyActivitiesList: Party[];

  constructor(
    protected modalService: NgbModal,
    private communityService: CommunityService,
    private route: ActivatedRoute,
    private partyService: PartyService
  ) {
    super(modalService);
    route.data.subscribe((data: { partyActivities: { detail: Party[] }, communities: Community[] }) => {
      this.partyActivitiesList = data.partyActivities.detail;
      this.communities = data.communities;
      this.communityService.saveCommunities(this.communities);
    });
  }

  async ngOnInit() {

  }

  async getCommunities(): Promise<Community[]> {
    return this.communityService.getList("/childList/id=1");
  }

  async updateParties(): Promise<void> {
    const result = await this.partyService.query("query/page=-1/pageSize=-1", {});
    this.partyActivitiesList = result && result.detail;
  }

}
