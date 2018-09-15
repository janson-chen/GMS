import { Injectable } from "@angular/core";
import { DataService } from "../../shared/services/data.service";
import { UserGroup, UserGroupMember } from "./group.data";
import { RequestOptions } from "@angular/http";

@Injectable()
export class GroupManagerService extends DataService<any> {
  modelType: string = "/system";

  addGroup(payload: UserGroup): Promise<UserGroup> {
    return <Promise<UserGroup>>this.http.post(`${this.endpoint}/usermember`, payload).toPromise();
  }

  addGroupMembers(payload: UserGroupMember[]): Promise<UserGroupMember> {
    return <Promise<UserGroupMember>>this.http.post(`${this.endpoint}/usermemberdetail`, payload).toPromise();
  }

  async deleteGroupMembers(ids: any[]): Promise<void> {
     this.nHttp.delete(`${this.endpoint}/UserMemberDetail`, new RequestOptions({ body: ids })).toPromise();
  }

}
