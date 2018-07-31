import { Component, OnInit } from '@angular/core';
import { CoreComponent } from "../core/core.component";
import { UserInfo } from "../core/core.data";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'gm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends CoreComponent<UserInfo> implements OnInit {

  constructor(private userService: UserService) {
    super();
  }

  ngOnInit() {

  }

  logout() {
    void this.userService.logout();
  }

}
