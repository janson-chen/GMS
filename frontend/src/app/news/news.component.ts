import { ToastrService } from "ngx-toastr";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Component, forwardRef, Inject, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { Menu } from "../core/models/menu.data";
import { News } from "../settings/news-manager/news.data";
import { MenusService } from "../core/service/menus.service";
import { UserService } from "../shared/services/user.service";
import { NewsService } from "../settings/news-manager/news.service";

@Component({
  selector: "gm-news",
  styleUrls: ["./news.component.scss"],
  templateUrl: "./news.component.html"
})
export class NewsComponent implements OnInit {
  menus: Menu[] = <Menu[]>[];
  news: News[] = [];

  constructor(
    private userService: UserService,
    private menusService: MenusService,
    private route: ActivatedRoute,
    protected fb: FormBuilder,
    protected toastService: ToastrService,
    protected modalService: NgbModal,
    @Inject(forwardRef(() => NewsService)) private newsService: NewsService
  ) {
    route.data.subscribe((data: { news: { detail: News[] }}) => {
      this.news = data.news.detail;
    });
  }

  public ngOnInit() {
    this.menusService.behavierSubject.subscribe((data: Menu[]) => {
      this.menus = data;
    });
  }
}
