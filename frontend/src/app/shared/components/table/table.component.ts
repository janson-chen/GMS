import { Component, Input, OnInit } from '@angular/core';
import { CoreComponent } from "../core/core.component";

@Component({
  selector: 'gm-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> extends CoreComponent<T> implements OnInit {
  @Input() columns: string[] = [];

  constructor() {
    super();
  }

  ngOnInit() {

  }

}
