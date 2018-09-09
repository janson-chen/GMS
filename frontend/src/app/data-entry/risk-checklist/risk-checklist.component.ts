import { Component, OnInit } from '@angular/core';
import { Risk, RISK_MANAGER_TABLE_COLUMES } from "./risk.data";
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

@Component({
  selector: 'gm-risk-checklist',
  templateUrl: './risk-checklist.component.html',
  styleUrls: ['./risk-checklist.component.scss']
})
export class RiskChecklistComponent extends ModalContainerComponent implements OnInit {
  columns = RISK_MANAGER_TABLE_COLUMES;
  riskEvents: Risk[] = [];
  communities: Community[] = [];

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
    route.data.subscribe((data: { riskEvents: { detail: Risk[] }, communities: Community[] }) => {
      this.riskEvents = data.riskEvents.detail;
      this.communities = data.communities;
      this.communityService.saveCommunities(this.communities);
    });
  }

  ngOnInit() {

  }

  async updateRiskList(): Promise<void> {
    const result = await this.riskService.query("query/page=-1/pageSize=-1", {});
    this.riskEvents = result.detail;
  }

}
