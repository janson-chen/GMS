import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataService } from "../../shared/services/data.service";
import { HttpClient } from "@angular/common/http";
import { Community } from "./community.data";
import { CommunityService } from "./community.service";

@Injectable()
export class CommunityResolver extends DataService<Community[]> implements Resolve<Community[]> {

  constructor(private communityService: CommunityService, protected http: HttpClient) {
    super(http);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Community[]> {
    return this.communityService.getList("/childlist/id=1");
  }

}
