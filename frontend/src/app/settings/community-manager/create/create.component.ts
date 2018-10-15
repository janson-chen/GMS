import { ToastrService } from "ngx-toastr";
import { FormBuilder, Validators } from "@angular/forms";
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { CommunityService } from "../community.service";
import { RoleManagerService } from "../role-manager.service";
import { isValidForm } from "../../../shared/utils/form-validator";
import { UserService } from "../../../shared/services/user.service";
import { CustomValidators } from "../../../shared/utils/custom-validators";
import { FormComponent } from "../../../shared/components/core/form-component";
import { Community } from "../community.data";

@Component({
  selector: 'gm-community-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateCommunityComponent extends FormComponent<Community> implements OnInit {
  @Input() communities: Community[] = [];

  constructor(protected userService: UserService,
              protected fb: FormBuilder,
              protected toastService: ToastrService,
              private communityService: CommunityService,
              protected modalService: NgbModal
  ) {
    super();
  }

  async ngOnInit(): Promise<void> {
    this.formGroup = this.fb.group({
      name: ["", CustomValidators.ModelTitle()],
      parentId: [this.communities[0].id, Validators.required]
    });
  }

  async submit(): Promise<void> {
    if (isValidForm(this.formGroup)) {
      this.isSubmitting = true;
      try {
        const payload = {
          name: this.formGroup.value.name,
          parentId: this.formGroup.value.parentId
        };
        await this.communityService.addCommunity(payload);
        this.isSubmitted = true;
        setTimeout(() => this.close("社区创建成功."), this.successMessageTimeoutInSeconds * 1000);
      } catch (e) {
        console.error(e);
        this.isSubmitted = true;
      }

    }
  }
}
