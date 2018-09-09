import { Injectable } from "@angular/core";

import { DataService } from "../../shared/services/data.service";
import { Member, Population } from "./population.data";
import { RequestOptions } from "@angular/http";

@Injectable()
export class PopulationService extends DataService<any> {
  modelType: string = "/business/population";

  addPopulation(payload: Population): Promise<Population> {
    return <Promise<Population>>this.http.post(`${this.endpoint}`, payload).toPromise();
  }

  // 添加家庭成员
  addMembers(code: string, payload: Member[]): Promise<any> {
    return this.http.post(`${this.endpoint}/families/code=${code}`, payload).toPromise();
  }

  // 家庭成员信息修改(/Business/Population/Family/Id={Id})
  updateMembers(code: string, payload: Member[]): Promise<any> {
    return this.http.put(`${this.endpoint}/families/code=${code}`, payload).toPromise();
  }

  // 删除家庭成员信息 /Business/Population/Families
  deleteMembers(ids: any[]): Promise<any> {
    return this.nHttp.delete(`${this.endpoint}/families`, new RequestOptions({ body: ids })).toPromise();
  }

  // 兵役信息修改 /Business/Population/Armies
  updateArmies(payload: any[]): Promise<any> {
    return this.http.put(`${this.endpoint}/armies`, payload).toPromise();
  }

  // 残疾信息修改 /Business/Population/Disabilities
  updateDisableInfo(payload: any[]): Promise<any> {
    return this.http.put(`${this.endpoint}/disabilities`, payload).toPromise();
  }

  // 网格登记表修改(/Business/Population/Id={Id})
  updatePopulation(id: string, payload: Population): Promise<any> {
    return this.http.put(`${this.endpoint}/id=${id}`, payload).toPromise();
  }

  // 删除网格登记表 /Business/Population/Id={Id}
  deletePopulation(id: string): Promise<any> {
    return this.http.delete(`${this.endpoint}/id=${id}`).toPromise();
  }

  // 党派信息修改 /Business/Population/Parties
  updateParty(payload: any[]): Promise<any> {
    return this.http.put(`${this.endpoint}/parties`, payload).toPromise();
  }
}
