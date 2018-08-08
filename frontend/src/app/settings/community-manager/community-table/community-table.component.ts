import { Component, OnInit } from '@angular/core';
import { CoreComponent } from "../core/core.component";
import { TableComponent } from "../../../shared/components/table/table.component";

@Component({
  selector: 'gm-community-table',
  templateUrl: './community-table.component.html',
  styleUrls: ['./community-table.component.scss']
})
export class CommunityListComponent<T> extends TableComponent<T> implements OnInit {

  ngOnInit() {

  }

}
