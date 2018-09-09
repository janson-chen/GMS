import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { UserService } from "../../../shared/services/user.service";
import { FormComponent } from "../../../shared/components/core/form-component";
import { RoleManagerService } from "../role-manager.service";
import { Permission } from "../role.data";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'gm-role-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateRoleComponent<Role> extends FormComponent<Role> implements OnInit {
  @Input() communities: string[] = [];
  @Input() permissions: Permission[] = [];

  selectedPermissions: Permission[] = [];
  permissionForm: FormGroup = this.fb.group({});
  permissionArray: Array<{ permission: Permission; control: FormControl }> = [];

  constructor(protected userService: UserService,
              protected fb: FormBuilder,
              protected toastService: ToastrService,
              private roleManagerService: RoleManagerService,
              protected modalService: NgbModal
  ) {
    super();
  }

  async ngOnInit(): Promise<void> {
    this.formGroup = this.fb.group({
      name: "",
      description: "",
      usersCount: "",
      permissions: this.selectedPermissions
    });

    this.catchSelectedPermissions();
  }

  private catchSelectedPermissions() {
    this.permissionForm = this.fb.group({ permissions: this.fb.array((<any[]>this.permissions).map(() => false)) });
    const permissionSelection = <FormArray>this.permissionForm.get("permissions");
    this.permissionArray = (<any[]>this.permissions).map((permission, i) => ({ permission: permission, control: <FormControl>permissionSelection.controls[i] }));

    permissionSelection.valueChanges.subscribe((selectedPermission: Permission) => {
      this.selectedPermissions = (<any[]>this.permissions).filter((permission, i) => selectedPermission[i]).map(permission => permission);
      console.log("selected permissions", this.selectedPermissions);
    });

  }

  async submit() {
    console.log(this.formGroup.value);
    this.isSubmitting = true;
    const payload = {
      name: this.formGroup.value.name,
      description: this.formGroup.value.description,
      usersCount: this.formGroup.value.usersCount,
      permissions: this.selectedPermissions
    };

    await this.roleManagerService.addRole(payload);
    this.isSubmitted = true;
    setTimeout(() => this.close("角色创建成功."), this.successMessageTimeoutInSeconds * 1000);
  }

}
