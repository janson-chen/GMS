import { Injectable } from "@angular/core";

import { DataService } from "../../shared/services/data.service";
import { News } from "./news.data";

@Injectable()
export class NewsService extends DataService<News> {
  modelType: string = "/system";

  async addNews(payload): Promise<News> {
    return this.http.post(`${this.endpoint}/news`, payload).toPromise();
  }

  async updateNews(id: string, payload: any): Promise<void> {
     this.http.put(`${this.endpoint}/news/id=${id}`, payload).toPromise();
  }

  async uploadAttachment(id: string, payload: any): Promise<void> {
    this.http.post(`${this.endpoint}/news/uploadfile/id=${id}`, payload).toPromise();
  }

  async getNewsAttachment(id: string): Promise<any> {
    return this.http.get(`${this.endpoint}/file/id=${id}`, {responseType: 'blob'}).toPromise();
  }
}
