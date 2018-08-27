import { Component, OnInit } from '@angular/core';
import { RISK_MANAGER_TABLE_COLUMES } from "./risk.data";

@Component({
  selector: 'gm-risk-checklist',
  templateUrl: './risk-checklist.component.html',
  styleUrls: ['./risk-checklist.component.scss']
})
export class RiskChecklistComponent implements OnInit {
  columns = RISK_MANAGER_TABLE_COLUMES;

  constructor() { }

  ngOnInit() {
  }

}
