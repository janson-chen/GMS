import { Component, OnInit } from '@angular/core';
import { CoreComponent } from "../core/core.component";
import { TableComponent } from "../../../shared/components/table/table.component";
import { CommunityService } from "../community.service";

@Component({
  selector: 'gm-community-table',
  templateUrl: './community-table.component.html',
  styleUrls: ['./community-table.component.scss']
})
export class CommunityListComponent<T> extends TableComponent<T> implements OnInit {
  constructor(private communityService: CommunityService) {
    super();
  }

  ngOnInit() {

  }

  getCommunityNameById(id: string): string {
    return this.communityService.communitiesMap[id];
  }

}