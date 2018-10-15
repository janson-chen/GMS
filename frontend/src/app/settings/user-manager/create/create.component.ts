import { ToastrService } from "ngx-toastr";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";

import { UserManagerService } from "../user-manager.service";
import { Permission, Role } from "../../role-manager/role.data";
import { Community } from "../../community-manager/community.data";
import { isValidForm } from "../../../shared/utils/form-validator";
import { UserService } from "../../../shared/services/user.service";
import { CustomValidators } from "../../../shared/utils/custom-validators";
import { FormComponent } from "../../../shared/components/core/form-component";

@Component({
  selector: 'gm-user-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [FormComponent.provide(CreateUserComponent)]
})
export class CreateUserComponent<UserInfo> extends FormComponent<UserInfo> implements OnInit {
  @Input() communities: Community[] = [];
  @Input() roles: Role[] = [];

  roleArray: Array<{ role: Role; control: FormControl }> = [];
  selectedRoles: Permission[] = [];
  roleForm: FormGroup = this.fb.group({});

  constructor(protected userService: UserService,
              protected fb: FormBuilder,
              protected toastService: ToastrService,
              private userManagerService: UserManagerService,
              protected modalService: NgbModal
  ) {
    super();
  }

  async ngOnInit(): Promise<void> {
    this.formGroup = this.fb.group({
      userName: ["", CustomValidators.ModelTitle()],
      name: ["", CustomValidators.ModelTitle()],
      communityId: "",
      isEnabled: false,
      roles: []
    });

    this.catchSelectedRoles();
  }

  async submitData(): Promise<void> {
    if (isValidForm(this.formGroup)) {
      this.isSubmitting = true;
      const payload = {
        userName: this.formGroup.value.userName,
        name: this.formGroup.value.name,
        communityId: this.formGroup.value.communityId,
        isEnabled: this.formGroup.value.isEnabled,
        roles: this.selectedRoles.map(role => role.name)
      };

      try {
        await this.userManagerService.addUser(payload);
        this.isSubmitted = true;
        setTimeout(() => this.close("创建成功."), this.successMessageTimeoutInSeconds * 1000);
      } catch (e) {
        this.isSubmitting = false;
        this.spinnerState = "failed";
      }
    }
  }

  private catchSelectedRoles() {
    this.roleForm = this.fb.group({ roles: this.fb.array((<any[]>this.roles).map(() => false)) });
    const roleSelection = <FormArray>this.roleForm.get("roles");
    this.roleArray = (<any[]>this.roles).map((role, i) => ({ role: role, control: <FormControl>roleSelection.controls[i] }));

    roleSelection.valueChanges.subscribe((selectedRole: Role) => {
      this.selectedRoles = (<any[]>this.roles).filter((role, i) => selectedRole[i]).map(role => role);
      console.log("selected permissions", this.selectedRoles);
    });

  }

}
