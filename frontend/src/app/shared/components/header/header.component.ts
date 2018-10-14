import { Component, OnInit } from '@angular/core';
import { CoreComponent } from "../core/core.component";
import { UserService } from "../../services/user.service";
import { UserInfo } from "../../../settings/user-manager/user.data";
import { faUserCircle, faBell } from '@fortawesome/free-solid-svg-icons';
import { Router } from "@angular/router";

@Component({
  selector: 'gm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends CoreComponent<UserInfo> implements OnInit {
  faUserCircle = faUserCircle;
  faBell = faBell;
  showAvatar: boolean = false;

  constructor(
              private userService: UserService,
              private router: Router
              ) {
    super();
  }

  ngOnInit() {

  }

  logout() {
    void this.userService.logout();
  }

}
