import { Component, OnInit } from '@angular/core';
import { FormBaseComponent } from "../shared/components/form-base/form-base.component";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { UserService } from "../shared/components/core/user.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormBaseComponent implements OnInit {

  constructor(private router: Router, protected userService: UserService, protected fb: FormBuilder, protected toastService: ToastrService) {
    super(userService, fb, toastService);
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      userName: "",
      password: ""
    });
  }

  async onSubmit(): Promise<void> {
    const payload = {
      userName: this.formGroup.value.userName,
      passwordHash: this.formGroup.value.password,
      rememberMe: true
    };
    const loginResult = await this.userService.login(payload);
    this.router.navigate(["/home"]);
    console.log("loginResult", loginResult);
  }

}
