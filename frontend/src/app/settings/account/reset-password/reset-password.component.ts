import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { FormBuilder } from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { FormComponent } from "../../../shared/components/core/form-component";
import { UserInfo } from "../../user-manager/user.data";
import { UserService } from "../../../shared/services/user.service";
import { MenuManagerService } from "../../menus-manager/menu-manager.service";
import { MenusService } from "../../../core/service/menus.service";
import { CustomValidators } from "../../../shared/utils/custom-validators";
import { isValidForm } from "../../../shared/utils/form-validator";

@Component({
  selector: 'gm-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent extends FormComponent<UserInfo> implements OnInit {
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
      userName: this.userService.myAccount.userName,
      currentPassword: ["", CustomValidators.password()],
      newPassword: ["", CustomValidators.password()]
    });
  }

  async submitData(): Promise<void> {
    console.log(this.formGroup);
    if (isValidForm(this.formGroup)) {
      const payload = {
        userName: this.formGroup.value.userName,
        currentPassword: this.formGroup.value.currentPassword,
        newPassword: this.formGroup.value.newPassword
      };

      await this.userService.resetPassword(payload);
    }
  }
}
