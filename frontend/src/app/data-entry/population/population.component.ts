import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { Insurance, Population, POPULATION_MANAGER_TABLE_COLUMES } from "./population.data";
import { PopulationService } from "./population.service";
import { Community } from "../../settings/community-manager/community.data";
import { CommunityService } from "../../settings/community-manager/community.service";
import { FormComponent } from "../../shared/components/core/form-component";
import { UserService } from "../../shared/services/user.service";
import { ToastrService } from "ngx-toastr";
import { FormBuilder } from "@angular/forms";
import { ResponseData } from "../../shared/components/core/core.data";

@Component({
  selector: 'gm-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.scss']
})
export class PopulationComponent extends FormComponent<Population> implements OnInit {
  communities: Community[] = [];
  columns = POPULATION_MANAGER_TABLE_COLUMES;
  populationList: Population[];
  insurances: Insurance[];

  constructor(
    private populationService: PopulationService,
    protected modalService: NgbModal,
    private route: ActivatedRoute,
    private communityService: CommunityService,
    protected userService: UserService,
    protected fb: FormBuilder,
    protected toastService: ToastrService
  ) {
    super();
    route.data.subscribe((data: { populations: ResponseData<Population>, communities: ResponseData<Community> }) => {
      this.populationList = data.populations.detail;
      this.queryOptions.totalCount = data.populations.totalCount;
      this.communities = data.communities.detail;
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
    this.communityService.saveCommunities(this.communities);
    console.log("communities", this.communities);
  }

  async updatePopulation(): Promise<void> {
    const result = await  this.populationService.query(`query/${this.queryUrl}`, {});
    this.populationList = result.detail;
  }

  async search(page: number): Promise<void> {
    this.queryOptions.page = page;
    const result = await this.populationService.query(`query/${this.queryUrl}`, {});
    this.populationList = result.detail;
  }
}
