import { Component, OnInit } from '@angular/core';
import { CoreComponent } from "../core/core.component";
import { TableComponent } from "../../../shared/components/table/table.component";
import { CommunityService } from "../../community-manager/community.service";
import { Risk } from "../risk.data";
import { RiskService } from "../risk.service";

@Component({
  selector: 'gm-risk-table',
  templateUrl: './risk-table.component.html',
  styleUrls: ['./risk-table.component.scss']
})
export class PartyListComponent extends TableComponent<Risk[]> implements OnInit {
  constructor(private riskService: RiskService) {
    super();
  }

  ngOnInit() {
    console.log("data", this.data);
  }


}
