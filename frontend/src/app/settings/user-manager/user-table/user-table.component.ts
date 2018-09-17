import { Component, OnInit } from '@angular/core';
import { CoreComponent } from "../core/core.component";
import { TableComponent } from "../../../shared/components/table/table.component";
import { CommunityService } from "../../community-manager/community.service";
import { faEdit, faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'gm-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserListComponent<T> extends TableComponent<T> implements OnInit {
  faTrash = faTrash;

  constructor(private communityService: CommunityService) {
    super();
  }

  ngOnInit() {

  }

  getCommunityNameById(id: string): string {
    return this.communityService.communitiesMap[id];
  }

}
