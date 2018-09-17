import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";

import { CoreComponent } from "../core/core.component";
import { NewsService } from "../news.service";
import { News } from "../news.data";
import { ModalContainerComponent } from "../../../shared/components/modal-container/modal-container.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'gm-news-table',
  templateUrl: './news-table.component.html',
  styleUrls: ['./news-table.component.scss']
})
export class NewsListComponent extends ModalContainerComponent implements OnInit {
  faTrash = faTrash;
  faEdit = faEdit;
  faUpload = faUpload;
  currentEditItem: News;

  constructor(
    private newsService: NewsService,
    protected modalService: NgbModal
  ) {
    super();
  }

  ngOnInit() {

  }

  async removeItem(id: string): Promise<void> {
    await this.newsService.removeItem(id, "/news");
    const result  = this.newsService.getList("/newslist/page=-1/pagesize=-1");
    this.data = result.detail;
  }

  updateNewsList() {

  }

}
