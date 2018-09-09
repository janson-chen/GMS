import { Component, Input, OnInit } from '@angular/core';
import { CoreComponent } from "../core/core.component";
import { Party, PARTY_MANAGER_TABLE_COLUMES } from "../party.data";
import { PartyService } from "../party.service";
import { CommunityService } from "../../../settings/community-manager/community.service";
import { Community } from "../../../settings/community-manager/community.data";
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ModalContainerComponent } from "../../../shared/components/modal-container/modal-container.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'gm-party-table',
  templateUrl: './party-table.component.html',
  styleUrls: ['./party-table.component.scss']
})
export class PartyListComponent extends ModalContainerComponent implements OnInit {
  @Input() communities: Community[] = [];

  columns = PARTY_MANAGER_TABLE_COLUMES;
  faTrash = faTrash;
  faEdit = faEdit;
  currentEditItem: Party = null;

  constructor(
    private partyService: PartyService,
    private communityService: CommunityService,
    protected modalService: NgbModal
  ) {
    super(modalService);
  }

  ngOnInit() {
    this.communityService.saveCommunities(this.communities);
    console.log("comumity", this.communityService.communitiesMap);
  }

  getCommunityNameById(id: string): string {
    return this.communityService.communitiesMap[id];
  }

  async removeItem(id: string): Promise<void> {
    await this.partyService.removeItem(id);
    const result = await this.partyService.query("query/page=-1/pageSize=-1", {});
    this.data = result && result.detail;
  }


}
