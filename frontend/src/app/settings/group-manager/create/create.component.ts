import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { UserService } from "../../../shared/services/user.service";
import { FormComponent } from "../../../shared/components/core/form-component";
import { GroupManagerService } from "../group-manager.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CustomValidators } from "../../../shared/utils/custom-validators";
import { isValidForm } from "../../../shared/utils/form-validator";

@Component({
  selector: 'gm-group-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [FormComponent.provide(CreateGroupComponent)]
})
export class CreateGroupComponent<UserGroup> extends FormComponent<UserGroup> implements OnInit {

  constructor(protected userService: UserService,
              protected fb: FormBuilder,
              protected toastService: ToastrService,
              private groupManagerService: GroupManagerService,
              protected modalService: NgbModal
  ) {
    super();
  }

  async ngOnInit(): Promise<void> {
    this.formGroup = this.fb.group({
      name: ["", CustomValidators.ModelTitle()],
    });
  }

  async submit(): Promise<void> {
    if (isValidForm(this.formGroup)) {
      this.isSubmitting = true;
      const payload = {
        name: this.formGroup.value.name
      };
      try {
        await this.groupManagerService.addGroup(payload);
        this.isSubmitted = true;
        setTimeout(() => this.close("用户组创建成功."), this.successMessageTimeoutInSeconds * 1000);
      } catch (e) {
        this.isSubmitting = false;
        this.spinnerState = "failed";
      }
    }
  }
}
