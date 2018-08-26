import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { ModalContainerComponent } from "../../shared/components/modal-container/modal-container.component";
import { Insurance, Population, POPULATION_MANAGER_TABLE_COLUMES } from "./population.data";
import { PopulationService } from "./population.service";
import { Community } from "../../settings/community-manager/community.data";

@Component({
  selector: 'gm-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.scss']
})
export class PopulationComponent extends ModalContainerComponent implements OnInit {
  communities: Community[] = [];
  columns = POPULATION_MANAGER_TABLE_COLUMES;
  populationList: Population[];
  insurances: Insurance[];

  constructor(
    private populationService: PopulationService,
    protected modalService: NgbModal,
    private route: ActivatedRoute,
    private communityService: CommunityService
  ) {
    super(modalService);

    route.data.subscribe((data: { populations: { detail: Population[] } }) => {
      console.log("route data", data.populations.detail);
      this.populationList = data.populations.detail;
    });
  }

  private async getInsurances(): Promise<any> {
    // return this.populationService.getInsurances();

    return new Promise((resolve, reject) => {
      resolve([
        {
          name: "无保户",
          value: "无保户"
        },
        {
          name: "党员",
          value: "党员"
        },
        {
          name: "优抚",
          value: "优抚"
        }
      ]);
    });
  }

  async ngOnInit() {
    this.insurances = await this.getInsurances();
    this.communities = await this.getCommunities();
    this.communityService.saveCommunities(this.communities);
  }

  async getCommunities(): Promise<Community[]> {
    return this.communityService.getList("/childList/id=1");
  }

}
