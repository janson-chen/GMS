import { Component, OnInit } from '@angular/core';
import { CoreComponent } from "../core/core.component";
import { TableComponent } from "../../../shared/components/table/table.component";

@Component({
  selector: 'gm-role-table',
  templateUrl: './role-table.component.html',
  styleUrls: ['./role-table.component.scss']
})
export class RoleListComponent<T> extends TableComponent<T> implements OnInit {

  ngOnInit() {

  }

}
