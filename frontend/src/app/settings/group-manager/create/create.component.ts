import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { UserService } from "../../../shared/services/user.service";
import { FormComponent } from "../../../shared/components/core/form-component";
import { GroupManagerService } from "../group-manager.service";
import { Permission, Role } from "../../role-manager/role.data";
import { Community } from "../../community-manager/community.data";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

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
              private groupManagerService: GroupManagerService,
              protected modalService: NgbModal
  ) {
    super();
  }

  async ngOnInit(): Promise<void> {
    this.formGroup = this.fb.group({
      userName: "",
      name: "",
      communityId: "",
      isEnabled: false,
      roles: []
    });
  }

  async submit() {
    console.log(this.formGroup.value);
    this.isSubmitting = true;
    const payload = {

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
