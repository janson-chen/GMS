import { Component, OnInit } from '@angular/core';
import { CoreComponent } from "../core/core.component";
import { TableComponent } from "../../../shared/components/table/table.component";
import { CommunityService } from "../../community-manager/community.service";
import { Party } from "../party.data";
import { PartyService } from "../party.service";

@Component({
  selector: 'gm-party-table',
  templateUrl: './party-table.component.html',
  styleUrls: ['./party-table.component.scss']
})
export class PartyListComponent extends TableComponent<Party[]> implements OnInit {
  constructor(private partyService: PartyService) {
    super();
  }

  ngOnInit() {
    console.log("data", this.data);
  }


}
