import { Component, OnInit } from '@angular/core';
import { ModalContainerComponent } from "../../shared/components/modal-container/modal-container.component";
import { NewsService } from "./news.service";
import { ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UserService } from "../../shared/services/user.service";
import { ToastrService } from "ngx-toastr";
import { FormBuilder } from "@angular/forms";
import { News, NEWS_TABLE_COLUMES } from "./news.data";

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

    route.data.subscribe((data: { news: { detail: News[] } }) => {
      this.news = data.news.detail;
    });
  }

  async updateNewsList(): Promise<void> {
      const result = await this.newsService.getList("/newslist/page=-1/pagesize=-1");
      this.news = result.detail;
  }

}
