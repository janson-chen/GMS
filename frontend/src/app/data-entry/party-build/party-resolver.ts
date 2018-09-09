import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DataService } from "../../shared/services/data.service";
import { HttpClient } from "@angular/common/http";
import { Party, PartyResponse } from "./party.data";
import { PartyService } from "./party.service";

@Injectable()
export class PartyResolver extends DataService<Party> implements Resolve<PartyResponse> {

  constructor(private partyService: PartyService, protected http: HttpClient) {
    super(http);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PartyResponse> | Promise<PartyResponse> | PartyResponse {
    return this.partyService.query("query/page=-1/pageSize=-1", {});
  }

}
