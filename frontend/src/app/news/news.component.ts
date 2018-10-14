import { ToastrService } from "ngx-toastr";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Component, forwardRef, Inject, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { Menu } from "../core/models/menu.data";
import { News, SEARCH_DATA } from "../settings/news-manager/news.data";
import { MenusService } from "../core/service/menus.service";
import { UserService } from "../shared/services/user.service";
import { NewsService } from "../settings/news-manager/news.service";
import { ModalContainerComponent } from "../shared/components/modal-container/modal-container.component";
import { SearchData } from "../shared/components/search-bar/search-bar.interface";
import { Log } from "../settings/logs-manager/log.data";
import { ResponseData } from "../shared/components/core/core.data";

@Component({
  selector: "gm-news",
  styleUrls: ["./news.component.scss"],
  templateUrl: "./news.component.html"
})
export class NewsComponent extends ModalContainerComponent implements OnInit {
  menus: Menu[] = <Menu[]>[];
  news: News[] = [];
  searchData = SEARCH_DATA;

  constructor(
    private userService: UserService,
    private menusService: MenusService,
    private route: ActivatedRoute,
    protected fb: FormBuilder,
    protected toastService: ToastrService,
    protected modalService: NgbModal,
    @Inject(forwardRef(() => NewsService)) private newsService: NewsService
  ) {
    super();
    route.data.subscribe((data: { news: ResponseData<News>}) => {
      this.news = data.news.detail;
      this.queryOptions.totalCount = data.news.totalCount;
    });
  }

  public ngOnInit() {
    this.menusService.behavierSubject.subscribe((data: Menu[]) => {
      this.menus = data;
    });
  }

  async search(page: number, searchValue: Object): Promise<void> {
    this.queryOptions.page = page;
    const result = await this.newsService.getList(`/newslist/${this.queryUrl}`, searchValue);
    this.news = result.detail;
  }

  async query(searchValue: SearchData): Promise<void> {
    const result = await this.newsService.getList(`/newslist/${this.queryUrl}`, searchValue);
    this.news = result.detail;
    this.queryOptions.totalCount = result.totalCount;
  }
}
