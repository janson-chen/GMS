import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { FormBuilder } from "@angular/forms";
import { Log, LOG_MANAGER_TABLE_COLUMES } from "./log.data";
import { UserService } from "../../shared/services/user.service";
import { LogManagerService } from "./log-manager.service";

@Component({
  selector: 'gm-logs-manager',
  templateUrl: './logs-manager.component.html',
  styleUrls: ['./logs-manager.component.scss']
})
export class LogsManagerComponent implements OnInit {
  columns = LOG_MANAGER_TABLE_COLUMES;
  logs: Log[] = [];

  constructor(
    private route: ActivatedRoute,
    protected userService: UserService,
    protected fb: FormBuilder,
    protected toastService: ToastrService,
    protected modalService: NgbModal,
    private logManagerService: LogManagerService
  ) {
    route.data.subscribe((data: { logs: { detail: Log[] }}) => {
      this.logs = data.logs.detail;
    });

  }

  ngOnInit() {}

}
