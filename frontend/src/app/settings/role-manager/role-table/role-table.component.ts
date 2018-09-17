import { Component } from '@angular/core';
import { faEdit, faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";

import { Role } from "../role.data";
import { CoreComponent } from "../core/core.component";
import { TableComponent } from "../../../shared/components/table/table.component";

@Component({
  selector: 'gm-role-table',
  templateUrl: './role-table.component.html',
  styleUrls: ['./role-table.component.scss']
})
export class RoleListComponent extends TableComponent<Role> {
  faEdit =faEdit;
  faTrash=faTrash;
  faUpload=faUpload;
}
