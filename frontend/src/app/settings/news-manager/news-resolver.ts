import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataService } from "../../shared/services/data.service";
import { HttpClient } from "@angular/common/http";
import { Community } from "./community.data";
import { NewsService } from "./news.service";
import { News } from "./news.data";

@Injectable()
export class NewsResolver extends DataService<News[]> implements Resolve<News[]> {

  constructor(private newsService: NewsService, protected http: HttpClient) {
    super(http);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<News[]> {
    return this.newsService.getList("/newslist/page=1/pagesize=10");
  }

}
