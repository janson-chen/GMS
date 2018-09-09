import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DataService } from "../../shared/services/data.service";
import { HttpClient } from "@angular/common/http";
import { Member } from "./population.data";
import { PopulationService } from "./population.service";

@Injectable()
export class PopulationFamilyResolver extends DataService<Member> implements Resolve<Member[]> {

  constructor(private populationService: PopulationService, protected http: HttpClient) {
    super(http);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Member[]> | Promise<Member[]> | Member[] {
    const id = route.paramMap.get("id");
    return this.populationService.getById("", `/families/populationid=${id}/page=-1/pagesize=-1`);
  }

}
