import { Component, Input, OnInit } from '@angular/core';
import { CoreComponent } from "../core/core.component";
import { RiskService } from "../risk.service";
import { faEdit, faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";
import { Party, PARTY_MANAGER_TABLE_COLUMES } from "../../party-build/party.data";
import { Community } from "../../../settings/community-manager/community.data";
import { CommunityService } from "../../../settings/community-manager/community.service";
import { ModalContainerComponent } from "../../../shared/components/modal-container/modal-container.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UserGroup } from "../../../settings/group-manager/group.data";

@Component({
  selector: 'gm-risk-table',
  templateUrl: './risk-table.component.html',
  styleUrls: ['./risk-table.component.scss']
})
export class RiskListComponent extends ModalContainerComponent implements OnInit {
  @Input() communities: Community[] = [];
  @Input() groups: UserGroup[] = [];

  columns = PARTY_MANAGER_TABLE_COLUMES;
  faTrash = faTrash;
  faEdit = faEdit;
  faUpload = faUpload;
  currentEditItem: Party = null;

  constructor(
              private riskService: RiskService,
              private communityService: CommunityService,
              protected modalService: NgbModal
              ) {
    super();
  }

  ngOnInit() {
    console.log("data", this.data);
  }

  async removeItem(id: string): Promise<void> {
    await this.riskService.removeItem(id);
    const result = await this.riskService.query("query/page=-1/pageSize=-1", {});
    this.data = result && result.detail;
  }

  getCommunityNameById(id: string): string {
    return this.communityService.communitiesMap[id];
  }

  getGroupNameById(id: string): string {
    const group =  this.groups.filter(group => group.id === id);
    return group && group[0] && group[0].name || "";
  }

  async updateRiskList(): Promise<void> {
    setTimeout(async () => {
      const result = await this.riskService.query("query/page=-1/pageSize=-1", {});
      this.data = result && result.detail;
    }, 1000);
  }
}
