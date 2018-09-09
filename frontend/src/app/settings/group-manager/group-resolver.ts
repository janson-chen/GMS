import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { Role } from "./role.data";
import { UserGroup } from "./group.data";
import { DataService } from "../../shared/services/data.service";
import { GroupManagerService } from "./group-manager.service";

@Injectable()
export class GroupResolver extends DataService<UserGroup[]> implements Resolve<UserGroup[]> {

  constructor(private groupManagerService: GroupManagerService, protected http: HttpClient) {
    super(http);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserGroup[]> | Promise<UserGroup[]> | UserGroup[] {
    return this.groupManagerService.getList("/usermemberlist/page=-1/pageSize=-1");
  }

}
