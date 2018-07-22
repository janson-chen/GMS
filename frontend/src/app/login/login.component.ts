import { Component, OnInit } from '@angular/core';
import { FormBaseComponent } from "../shared/components/form-base/form-base.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormBaseComponent implements OnInit {

  ngOnInit() {
    this.formGroup = this.fb.group({
      userName: "",
      password: ""
    });
  }

  onSubmit() {
    const payload = {
      username: this.formGroup.value.username,
      password: this.formGroup.value.password
    };
    const loginResult = this.userService.login(payload);
    console.log("loginResult", loginResult);
  }

}
