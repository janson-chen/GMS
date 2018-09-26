import { Component, OnInit } from '@angular/core';
import { ModalContainerComponent } from "../../shared/components/modal-container/modal-container.component";
import { NewsService } from "./news.service";
import { ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UserService } from "../../shared/services/user.service";
import { ToastrService } from "ngx-toastr";
import { FormBuilder } from "@angular/forms";
import { News, NEWS_TABLE_COLUMES } from "./news.data";
import { ResponseData } from "../../shared/components/core/core.data";

@Component({
  selector: 'gm-news-manager',
  templateUrl: './news-manager.component.html',
  styleUrls: ['./news-manager.component.scss']
})
export class NewsManagerComponent extends ModalContainerComponent {
  columns = NEWS_TABLE_COLUMES;
  news: News[] = [];

  constructor(
              private newsService: NewsService,
              private route: ActivatedRoute,
              protected userService: UserService,
              protected fb: FormBuilder,
              protected toastService: ToastrService,
              protected modalService: NgbModal
  ) {
    super();

    route.data.subscribe((data: { news: ResponseData<News> }) => {
      this.news = data.news.detail;
      this.queryOptions.totalCount = data.news.totalCount;
    });
  }

  async updateNewsList(): Promise<void> {
      const result = await this.newsService.getList(`/newslist/${this.queryUrl}`);
      this.news = result.detail;
  }

  async search(page: number): Promise<void> {
    this.queryOptions.page = page;
    const result = await this.newsService.getList(`/newslist/${this.queryUrl}`);
    this.news = result.detail;
  }

}
