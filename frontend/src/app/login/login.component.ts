import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { UserService } from "../shared/services/user.service";
import { FormBuilder } from "@angular/forms";
import { FormComponent } from "../shared/components/core/form-component";
import { UserInfo } from "../settings/user-manager/user.data";
import { MenusService } from "../core/service/menus.service";
import { MenuManagerService } from "../settings/menus-manager/menu-manager.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormComponent<UserInfo> implements OnInit {

  constructor(
              private router: Router,
              protected userService: UserService,
              protected fb: FormBuilder,
              protected toastService: ToastrService,
              private menusService: MenusService,
              private menuManagerService: MenuManagerService,
              protected modalService: NgbModal
  ) {
    super();
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      userName: "",
      password: ""
    });
  }

  async submitData(): Promise<void> {
    const payload = {
      userName: this.formGroup.value.userName,
      passwordHash: this.formGroup.value.password,
      rememberMe: true
    };
    // const loginResult = await this.userService.login(payload);
     await this.userService.login(payload);
    // get menus
    this.menusService.menus = await this.menuManagerService.getList("/menus");
    // this.router.navigate(["/home"]);
  }

}
