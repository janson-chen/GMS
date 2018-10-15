import { Injectable } from "@angular/core";

import { DataService } from "../../shared/services/data.service";
import { Community } from "./community.data";

@Injectable()
export class CommunityService extends DataService<Community> {
  modelType: string = "/community";

  communitiesMap: {
    [key: string]: string;
  } = {};

  addCommunity(payload): Promise<Community> {
    return this.http.post(`${this.endpoint}`, payload).toPromise();
  }

  saveCommunities(communities: Community[]): void {
    communities.forEach(community => {
      this.communitiesMap[community.id] = community.name;
    });
  }
}
