import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { DataService } from "../../shared/services/data.service";
import { HttpClient } from "@angular/common/http";
import { Party } from "./party.data";
import { PartyService } from "./party.service";

@Injectable()
export class PartyResolver extends DataService<Party> implements Resolve<Party[]> {

  constructor(private partyService: PartyService, protected http: HttpClient) {
    super(http);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Party[]> | Promise<Party[]> | Party[] {
    return this.partyService.query("query/page=-1/pageSize=-1", {});
  }

}
