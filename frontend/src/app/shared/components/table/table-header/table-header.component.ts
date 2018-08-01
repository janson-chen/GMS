import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gm-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent implements OnInit {
  @Input() columns: string[] = [];

  constructor() { }

  ngOnInit() {
  }

}
