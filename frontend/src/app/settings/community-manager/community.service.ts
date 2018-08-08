import { Injectable } from "@angular/core";

import { DataService } from "../../shared/services/data.service";
import { Community } from "./community.data";

@Injectable()
export class CommunityService extends DataService<Community> {
  modelType: string = "/community";

  getCommunities(): Promise<Community[]> {
    return this.getList();
  }

  addCommunity(payload) {
    return this.http.post(`${this.endpoint}`, payload).toPromise();
  }
}
