import { Component, OnInit } from '@angular/core';
import { CoreComponent } from "../core/core.component";
import { UserService } from "../../services/user.service";
import { UserInfo } from "../../../settings/user-manager/user.data";
import { faUserCircle, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'gm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends CoreComponent<UserInfo> implements OnInit {
  faUserCircle = faUserCircle;
  faBell = faBell;

  constructor(private userService: UserService) {
    super();
  }

  ngOnInit() {

  }

  logout() {
    void this.userService.logout();
  }

}
