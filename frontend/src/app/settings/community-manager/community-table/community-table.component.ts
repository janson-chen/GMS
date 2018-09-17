import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import { CoreComponent } from "../core/core.component";
import { TableComponent } from "../../../shared/components/table/table.component";
import { CommunityService } from "../community.service";

@Component({
  selector: 'gm-community-table',
  templateUrl: './community-table.component.html',
  styleUrls: ['./community-table.component.scss']
})
export class CommunityListComponent<T> extends TableComponent<T> {
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(private communityService: CommunityService) {
    super();
  }

  getCommunityNameById(id: string): string {
    return this.communityService.communitiesMap[id];
  }

  async removeItem(id: string): Promise<void> {
    await this.communityService.removeItem(id);
    const result  = await this.communityService.getList("/childlist/id=1");
    this.data = result;
  }

}
