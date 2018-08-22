import { Component, OnInit } from '@angular/core';
import { Log, LOG_MANAGER_TABLE_COLUMES } from "./log.data";

@Component({
  selector: 'gm-logs-manager',
  templateUrl: './logs-manager.component.html',
  styleUrls: ['./logs-manager.component.scss']
})
export class LogsManagerComponent implements OnInit {
  columns = LOG_MANAGER_TABLE_COLUMES;
  logs: Log[] = [];

  constructor() { }

  ngOnInit() {}

}
