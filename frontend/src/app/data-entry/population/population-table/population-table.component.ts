import { Component, OnInit } from '@angular/core';
import { CoreComponent } from "../core/core.component";
import { TableComponent } from "../../../shared/components/table/table.component";
import { CommunityService } from "../../community-manager/community.service";
import { Population } from "../population.data";
import { PopulationService } from "../population.service";

@Component({
  selector: 'gm-population-table',
  templateUrl: './population-table.component.html',
  styleUrls: ['./population-table.component.scss']
})
export class PopulationListComponent extends TableComponent<Population[]> implements OnInit {
  constructor(private populationService: PopulationService) {
    super();
  }

  ngOnInit() {
    console.log("data", this.data);
  }


}
