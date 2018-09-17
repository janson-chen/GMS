import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import { GROUP_MANAGER_TABLE_COLUMES, GroupResponse, UserGroup } from "../group.data";
import { CoreComponent } from "../core/core.component";
import { TableComponent } from "../../../shared/components/table/table.component";
import { GroupManagerService } from "../group-manager.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'gm-group-table',
  templateUrl: './group-table.component.html',
  styleUrls: ['./group-table.component.scss']
})
export class GroupListComponent extends TableComponent<UserGroup[]> implements OnInit {
  columns = GROUP_MANAGER_TABLE_COLUMES;
  faTrash = faTrash;
  faEdit = faEdit;
  currentEditItem: UserGroup = null;

  constructor(
    private groupManageService: GroupManagerService,
              protected modalService: NgbModal
    ) {
    super();
  }

  ngOnInit() {
    console.log("data", this.data);
  }

  async removeItem(id: string): Promise<void> {
    await this.groupManageService.removeItem(id, "/usermember");
    const result = await <GroupResponse>this.groupManageService.getList("/usermemberlist/page=-1/pageSize=-1");
    this.data = result.detail;
  }

}
