import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

import { UserService } from "../../../shared/services/user.service";
import { FormComponent } from "../../../shared/components/core/form-component";
import { RoleManagerService } from "../role-manager.service";
import { CommunityService } from "../community.service";

@Component({
  selector: 'gm-community-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateCommunityComponent<Community> extends FormComponent<Community> implements OnInit {
  @Input() communities: Community[] = [];

  constructor(protected userService: UserService,
              protected fb: FormBuilder,
              protected toastService: ToastrService,
              private communityService: CommunityService
  ) {
    super(userService, fb, toastService);
  }

  async ngOnInit(): Promise<void> {
    this.formGroup = this.fb.group({
      name: "",
      parentId: ""
    });

  }

  async submit() {
    console.log(this.formGroup.value);
    this.isSubmitting = true;
    const payload = {
      name: this.formGroup.value.name,
      parentId: this.formGroup.value.parentId
    };

    const result = await this.communityService.addCommunity(payload);

    this.isSubmitted = true;
    setTimeout(() => this.close("角色创建成功."), this.successMessageTimeoutInSeconds * 1000);
  }

}
