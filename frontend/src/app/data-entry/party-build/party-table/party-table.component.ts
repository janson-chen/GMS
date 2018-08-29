import { Component, OnInit } from '@angular/core';
import { CoreComponent } from "../core/core.component";
import { TableComponent } from "../../../shared/components/table/table.component";
import { Party } from "../party.data";
import { PartyService } from "../party.service";
import { CommunityService } from "../../../settings/community-manager/community.service";

@Component({
  selector: 'gm-party-table',
  templateUrl: './party-table.component.html',
  styleUrls: ['./party-table.component.scss']
})
export class PartyListComponent extends TableComponent<Party> implements OnInit {
  constructor(
    private partyService: PartyService,
    private communityService: CommunityService
  ) {
    super();
  }

  ngOnInit() {
    console.log("data", this.data);
  }

  getCommunityNameById(id: string): string {
    return this.communityService.communitiesMap[id];
  }


}
