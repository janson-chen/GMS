import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { FormBuilder } from "@angular/forms";
import { Log, LOG_MANAGER_TABLE_COLUMES } from "./log.data";
import { UserService } from "../../shared/services/user.service";
import { LogManagerService } from "./log-manager.service";
import { CoreComponent } from "../../shared/components/core/core.component";
import { PageData, ResponseData } from "../../shared/components/core/core.data";

@Component({
  selector: 'gm-logs-manager',
  templateUrl: './logs-manager.component.html',
  styleUrls: ['./logs-manager.component.scss']
})
export class LogsManagerComponent extends CoreComponent<Log> implements OnInit {
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
    super();
    route.data.subscribe((data: { logs: ResponseData<Log> }) => {
      this.logs = data.logs.detail;
      this.queryOptions.totalCount = data.logs.totalCount;
    });
  }

  ngOnInit() {}

  async search(page: number): Promise<void> {
    this.queryOptions.page = page;
    const result = await this.logManagerService.query(this.queryUrl, {});
    this.logs = result.detail;
  }

}
