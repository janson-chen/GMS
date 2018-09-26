import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DataService } from "../../shared/services/data.service";
import { HttpClient } from "@angular/common/http";
import { Log } from "./log.data";
import { LogManagerService } from "./log-manager.service";

@Injectable()
export class LogResolver extends DataService<Log[]> implements Resolve<Log[]> {

  constructor(private logManagerService: LogManagerService, protected http: HttpClient) {
    super(http);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Log[]> | Promise<Log[]> | Log[] {
    return this.logManagerService.query(this.queryUrl, {});
  }

}
