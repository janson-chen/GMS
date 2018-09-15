import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { Role } from "./role.data";
import { UserGroup } from "./group.data";
import { UserGroupMember } from "../group.data";
import { GroupManagerService } from "../group-manager.service";
import { DataService } from "../../../shared/services/data.service";

@Injectable()
export class GroupDetailResolver extends DataService<UserGroupMember[]> implements Resolve<UserGroupMember[]> {

  constructor(private groupManagerService: GroupManagerService, protected http: HttpClient) {
    super(http);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserGroupMember[]> | Promise<UserGroupMember[]> | UserGroupMember[] {
    const groupId = route.paramMap.get("id");
    return this.groupManagerService.getList(`/UserMemberDetailList/UserMemberId=${groupId}/page=-1/pageSize=-1`);
  }

}
