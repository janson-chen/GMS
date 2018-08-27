import { Component, OnInit } from '@angular/core';
import { Party, PARTY_MANAGER_TABLE_COLUMES } from "./party.data";
import { ModalContainerComponent } from "../../shared/components/modal-container/modal-container.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Community } from "../../settings/community-manager/community.data";
import { CommunityService } from "../../settings/community-manager/community.service";
import { Role } from "../../settings/role-manager/role.data";
import { ActivatedRoute } from "@angular/router";

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
    private route: ActivatedRoute
  ) {
    super(modalService);
    route.data.subscribe((data: { partyActivities: { detail: Party[] } }) => {
      this.partyActivitiesList = data.partyActivities.detail;
      console.log("partyActivities", this.partyActivitiesList);
    });
  }

  async ngOnInit() {
    this.communities = await this.getCommunities();
  }

  async getCommunities(): Promise<Community[]> {
    return this.communityService.getList("/childList/id=1");
  }

}
