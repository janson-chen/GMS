import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { DataService } from "../../shared/services/data.service";
import { Dictionary } from "./dicitonary-manager.data";
import { DictionaryManagerService } from "./dictionary-manager.service";

@Injectable()
export class DictionaryDetailResolver extends DataService<Dictionary[]> implements Resolve<Dictionary[]> {

  constructor(private dictionaryManagerService: DictionaryManagerService, protected http: HttpClient) {
    super(http);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Dictionary[]> | Promise<Dictionary[]> | Dictionary[] {
    const dictionaryId = route.paramMap.get("dictionaryId");
    return this.dictionaryManagerService.getList(`/dictionarydetaillist/dictionaryId=${dictionaryId}/page=-1/pagesize=-1`);
  }

}
