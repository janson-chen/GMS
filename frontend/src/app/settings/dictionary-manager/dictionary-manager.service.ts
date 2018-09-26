import { Injectable } from "@angular/core";

import { DataService } from "../../shared/services/data.service";
import { Dictionary } from "./dicitonary-manager.data";

@Injectable()
export class DictionaryManagerService extends DataService<any> {
  modelType: string = "/system";

  async updateDictionary(id: string, payload: any): Promise<void> {
    this.http.put(`${this.endpoint}/dictionarydetail`, payload).toPromise();
  }

  async createDictionary(payload: Dictionary): Promise<void> {
    this.http.post(`${this.endpoint}/dictionary`, payload).toPromise();
  }

  async createDictionaryDetail(payload: Dictionary[]): Promise<void> {
    this.http.post(`${this.endpoint}/dictionarydetail`, payload).toPromise();
  }

  async removeDictionaryDetails (ids: string[]): Promise<void> {
    this.nHttp.delete(`${this.endpoint}/dictionarydetail`, { body: ids }).toPromise();
  }
}
