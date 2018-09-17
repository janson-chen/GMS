import { Component, OnInit } from '@angular/core';

import { CoreComponent } from "../core/core.component";
import { TableComponent } from "../../../shared/components/table/table.component";
import { Log } from "../log.data";

@Component({
  selector: 'gm-log-table',
  templateUrl: './log-table.component.html',
  styleUrls: ['./log-table.component.scss']
})
export class LogListComponent extends TableComponent<Log[]> implements OnInit {

  ngOnInit() {

  }

}
