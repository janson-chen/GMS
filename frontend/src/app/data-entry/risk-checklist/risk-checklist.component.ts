import { Component, OnInit } from '@angular/core';
import { Risk, RISK_MANAGER_TABLE_COLUMES, SEARCH_DATA } from "./risk.data";
import { Community } from "../../settings/community-manager/community.data";
import { UserService } from "../../shared/services/user.service";
import { ToastrService } from "ngx-toastr";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ActivatedRoute } from "@angular/router";
import { CommunityService } from "../../settings/community-manager/community.service";
import { FormBuilder } from "@angular/forms";
import { PartyService } from "../party-build/party.service";
import { ModalContainerComponent } from "../../shared/components/modal-container/modal-container.component";
import { RiskService } from "./risk.service";
import { UserGroup } from "../../settings/group-manager/group.data";
import { ResponseData } from "../../shared/components/core/core.data";

@Component({
  selector: 'gm-risk-checklist',
  templateUrl: './risk-checklist.component.html',
  styleUrls: ['./risk-checklist.component.scss']
})
export class RiskChecklistComponent extends ModalContainerComponent implements OnInit {
  columns = RISK_MANAGER_TABLE_COLUMES;
  riskEvents: Risk[] = [];
  communities: Community[] = [];
  groups: UserGroup[] = [];
  searchData = SEARCH_DATA;

  constructor(
    private communityService: CommunityService,
    private route: ActivatedRoute,
    private partyService: PartyService,
    protected userService: UserService,
    protected fb: FormBuilder,
    protected toastService: ToastrService,
    protected modalService: NgbModal,
    private riskService: RiskService
  ) {
    super();
    route.data.subscribe((data: { riskEvents: ResponseData<Risk> , communities: ResponseData<Community>, groups: ResponseData<UserGroup>}) => {
      this.riskEvents = data.riskEvents.detail;
      this.communities = data.communities.detail;
      this.queryOptions.totalCount = data.riskEvents.totalCount;
      this.groups = data.groups.detail;
      this.communityService.saveCommunities(this.communities);
    });
  }

  ngOnInit() {

  }

  async updateRiskList(): Promise<void> {
    const result = await this.riskService.query(`query/${this.queryUrl}`, {});
    this.riskEvents = result.detail;
  }

  async search(page: number, searchValue: Object): Promise<void> {
    this.queryOptions.page = page;
    const result = await this.riskService.query(`query/${this.queryUrl}`, searchValue);
    this.riskEvents = result.detail;
    this.queryOptions.totalCount = result.totalCount;
  }

  async query(searchValue: Object): Promise<void> {
    const result = await this.riskService.query(`query/${this.queryUrl}`, searchValue);
    this.riskEvents = result.detail;
    this.queryOptions.totalCount = result.totalCount;
  }

}
