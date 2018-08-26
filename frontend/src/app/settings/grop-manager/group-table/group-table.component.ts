import { Component, OnInit } from '@angular/core';

import { UserGroup } from "../group.data";
import { CoreComponent } from "../core/core.component";
import { TableComponent } from "../../../shared/components/table/table.component";

@Component({
  selector: 'gm-group-table',
  templateUrl: './group-table.component.html',
  styleUrls: ['./group-table.component.scss']
})
export class GroupListComponent extends TableComponent<UserGroup> implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {

  }

}
