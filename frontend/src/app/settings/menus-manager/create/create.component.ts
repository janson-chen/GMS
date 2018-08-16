import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { FormComponent } from "../../../shared/components/core/form-component";
import { UserManagerService } from "../user-manager.service";
import { Community } from "../../community-manager/community.data";
import { MenuManagerService } from "../menu-manager.service";
import { UserService } from "../../../shared/services/user.service";

@Component({
  selector: 'gm-menu-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateMenuComponent<Menu> extends FormComponent<Menu> implements OnInit {
  @Input() communities: Community[] = [];
  @Input() menus: Menu[] = [];

  constructor(
              protected userService: UserService,
              protected fb: FormBuilder,
              protected toastService: ToastrService,
              private menuService: MenuManagerService
  ) {
    super(userService, fb, toastService);
  }

  async ngOnInit(): Promise<void> {
    this.formGroup = this.fb.group({
      name: "",
      menuType: "",
      parentID: -1,
      icon: "class",
      url: ""
    });
  }

  async submit() {
    console.log(this.formGroup.value);
    this.isSubmitting = true;
    const payload = {
      name: this.formGroup.value.name,
      menuType: this.formGroup.value.menuType,
      parentID: this.formGroup.value.parentID,
      icon: "class",
      url: this.formGroup.value.url
    };

    try {
      await this.menuService.addMenu(payload);
      this.isSubmitted = true;
      setTimeout(() => this.close("菜单创建成功."), this.successMessageTimeoutInSeconds * 1000);
    } catch (e) {
      this.isSubmitting = false;
      this.spinnerState = "failed";
    }
  }

}
