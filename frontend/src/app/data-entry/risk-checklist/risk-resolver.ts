import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DataService } from "../../shared/services/data.service";
import { HttpClient } from "@angular/common/http";
import { Risk } from "./risk.data";
import { RiskService } from "./risk.service";

@Injectable()
export class RiskResolver extends DataService<Risk> implements Resolve<Risk[]> {

  constructor(private riskService: RiskService, protected http: HttpClient) {
    super(http);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Risk[]> | Promise<Risk[]> | Risk[] {
    return this.riskService.query("query/page=-1/pageSize=-1", {});
  }

}
