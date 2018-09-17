import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { BasicSetting } from "./external-manager.data";
import { DataService } from "../../shared/services/data.service";
import { ExternalManagerService } from "./external-manager.service";

@Injectable()
export class ExternalResolver extends DataService<BasicSetting> implements Resolve<BasicSetting> {

  constructor(private externalManagerService: ExternalManagerService, protected http: HttpClient) {
    super(http);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BasicSetting> | Promise<BasicSetting> | BasicSetting {
    return this.externalManagerService.getById("", "/basicsetting/id=1");
  }

}
