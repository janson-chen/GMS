import { Component, OnInit } from "@angular/core";
import { UserService } from "../shared/services/user.service";
import { MenusService } from "../core/service/menus.service";
import { Menu } from "../core/models/menu.data";
import { News } from "../settings/news-manager/news.data";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "gm-home",
  styleUrls: ["./home.component.scss"],
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  menus: Menu[] = <Menu[]>[];
  news: News[] = [];

  constructor(
    private userService: UserService,
    private menusService: MenusService,
    private route: ActivatedRoute,
    protected fb: FormBuilder,
    protected toastService: ToastrService,
    protected modalService: NgbModal,
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
