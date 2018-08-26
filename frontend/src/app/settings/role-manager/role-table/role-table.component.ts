import { Component, OnInit } from '@angular/core';
import { CoreComponent } from "../core/core.component";
import { TableComponent } from "../../../shared/components/table/table.component";
import { Role } from "../role.data";

@Component({
  selector: 'gm-role-table',
  templateUrl: './role-table.component.html',
  styleUrls: ['./role-table.component.scss']
})
export class RoleListComponent extends TableComponent<Role> implements OnInit {

  ngOnInit() {

  }

}
