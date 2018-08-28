import { Injectable } from "@angular/core";
import { DataService } from "../../shared/services/data.service";
import { UserGroup } from "./group.data";

@Injectable()
export class GroupManagerService extends DataService<UserGroup> {
  modelType: string = "/system/usermemberlist";

  addGroup(payload: UserGroup): Promise<UserGroup> {
    return <Promise<UserGroup>>this.http.post(`${this.endpoint}`, payload).toPromise();
  }

}
