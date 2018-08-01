import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { UserService } from "../../../shared/services/user.service";
import { FormComponent } from "../../../shared/components/core/form-component";
import { UserInfo } from "../user.data";

@Component({
  selector: 'gm-user-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends FormComponent<UserInfo> implements OnInit {

  constructor(protected userService: UserService, protected fb: FormBuilder, protected toastService: ToastrService) {
    super(userService, fb, toastService);
  }

  async ngOnInit(): Promise<void> {
    this.formGroup = this.fb.group({
      userName: "",
      password: "",
      name: "",
      communityID: "",
      isEnabled: false,
      roles: []
    });
  }

  async submit() {

  }

}
