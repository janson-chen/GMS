import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { UserService } from "../../../shared/services/user.service";
import { FormComponent } from "../../../shared/components/core/form-component";
import { UserManagerService } from "../user-manager.service";
import { Permission, Role } from "../../role-manager/role.data";
import { Community } from "../../community-manager/community.data";

@Component({
  selector: 'gm-user-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
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
              private userManagerService: UserManagerService
  ) {
    super(userService, fb, toastService);
  }

  async ngOnInit(): Promise<void> {
    this.formGroup = this.fb.group({
      userName: "",
      name: "",
      communityID: "",
      isEnabled: false,
      roles: []
    });

    this.catchSelectedRoles();
  }

  async submit() {
    console.log(this.formGroup.value);
    this.isSubmitting = true;
    const payload = {
      userName: this.formGroup.value.userName,
      name: this.formGroup.value.name,
      communityID: this.formGroup.value.communityID,
      isEnabled: false,
      roles: this.selectedRoles.map(role => role.name)
    };

    try {
      await this.userManagerService.addUser(payload);
      this.isSubmitted = true;
      setTimeout(() => this.close("角色创建成功."), this.successMessageTimeoutInSeconds * 1000);
    } catch (e) {
      this.isSubmitting = false;
      this.spinnerState = "failed";
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
