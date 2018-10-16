import { Component, Input, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { FormBuilder, Validators } from "@angular/forms";
import { POPULATION_TABLE_COLUMES } from "../../../shared/components/core/core.data";
import { FormComponent } from "../../../../shared/components/core/form-component";
import { PopulationService } from "../../population.service";
import { faEdit, faTrash, faCalendar, faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { GroupMembersResponse, UserGroup, UserGroupMember } from "../../group.data";
import { GroupManagerService } from "../../group-manager.service";
import { UserInfo } from "../../../user-manager/user.data";
import { ActivatedRoute } from "@angular/router";
import { isValidForm } from "../../../../shared/utils/form-validator";

@Component({
  selector: "gm-group-member-editor",
  templateUrl: "./data-editor.component.html",
  styleUrls: ["./data-editor.component.scss"],
  providers: [FormComponent.provide(GroupMemberEditorComponent)]
})
export class GroupMemberEditorComponent extends FormComponent<UserGroupMember> implements OnInit {
  @Input() code: string = "";
  @Input() populationId: string = "";
  @Input() users: UserInfo[] = [];
  @Input() groups: UserGroup[] = [];

  private editMember_: UserGroupMember;

  faCalendar = faCalendarPlus;

  set currentEditMember(value: UserGroupMember) {
    this.editMember_ = value;
  };

  constructor(
    protected fb: FormBuilder,
    protected toastService: ToastrService,
    protected modalService: NgbModal,
    private groupManageService: GroupManagerService,
    private route: ActivatedRoute
  ) {
    super();

  }

  async ngOnInit(): Promise<void> {
    this.formGroup = this.fb.group({
      userId: ["", Validators.required],
      userMemberId: ["", Validators.required]
    });
  }

  async submit(): Promise<void> {
    if (isValidForm(this.formGroup)) {
      this.isSubmitting = true;
      const payload = [
        {
          userId: this.formGroup.value.userId,
          userMemberId: this.formGroup.value.userMemberId
        }
      ];

      await this.groupManageService.addGroupMembers(payload);

      try {
        this.isSubmitted = true;
      } catch (e) {
        this.isSubmitting = false;
        this.spinnerState = "failed";
      }
    }
  }
}

