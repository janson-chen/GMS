import { Component, OnInit } from "@angular/core";
import { UserService } from "../shared/services/user.service";
import { MenusService } from "../core/service/menus.service";
import { Menu } from "../core/models/menu.data";

@Component({
  selector: "gm-home",
  styleUrls: ["./home.component.scss"],
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  menus: Menu[] = <Menu[]>[];

  constructor(
    private userService: UserService,
    private menusService: MenusService
  ) {

  }

  public ngOnInit() {
    this.menusService.behavierSubject.subscribe((data: Menu[]) => {
      this.menus = data;
    });
  }
}
