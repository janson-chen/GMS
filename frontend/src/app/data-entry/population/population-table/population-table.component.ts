import { Component, OnInit } from '@angular/core';
import { CoreComponent } from "../core/core.component";
import { TableComponent } from "../../../shared/components/table/table.component";
import { Population } from "../population.data";
import { PopulationService } from "../population.service";
import { CommunityService } from "../../../settings/community-manager/community.service";
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'gm-population-table',
  templateUrl: './population-table.component.html',
  styleUrls: ['./population-table.component.scss']
})
export class PopulationListComponent extends TableComponent<Population> implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(
    private populationService: PopulationService,
    private communityService: CommunityService
  ) {
    super();
  }

  ngOnInit() {
    console.log("data", this.data);
  }

  getCommunityNameById(id: string): string {
    console.log(this.communityService.communitiesMap);
    return this.communityService.communitiesMap[id];
  }

  async removeItem(id: string): Promise<void> {
    await this.populationService.removeItem(id);
  }


}
