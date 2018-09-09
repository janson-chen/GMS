import { Component, Input, OnInit } from '@angular/core';
import { CoreComponent } from "../core/core.component";
import { TableComponent } from "../../../shared/components/table/table.component";
import { Risk } from "../risk.data";
import { RiskService } from "../risk.service";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Party, PARTY_MANAGER_TABLE_COLUMES } from "../../party-build/party.data";
import { Community } from "../../../settings/community-manager/community.data";
import { CommunityService } from "../../../settings/community-manager/community.service";

@Component({
  selector: 'gm-risk-table',
  templateUrl: './risk-table.component.html',
  styleUrls: ['./risk-table.component.scss']
})
export class RiskListComponent extends TableComponent<Risk[]> implements OnInit {
  @Input() communities: Community[] = [];

  columns = PARTY_MANAGER_TABLE_COLUMES;
  faTrash = faTrash;
  faEdit = faEdit;
  currentEditItem: Party = null;

  constructor(
              private riskService: RiskService,
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
