import { Component, Input, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { FormComponent } from "../../../shared/components/core/form-component";
import { FormBuilder, Validators } from "@angular/forms";
import { UserService } from "../../../shared/services/user.service";
import { RiskService } from "../risk.service";
import { Risk } from "../risk.data";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Community } from "../../../settings/community-manager/community.data";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import { UserGroup } from "../../../settings/group-manager/group.data";
import { isValidForm } from "../../../shared/utils/form-validator";

@Component({
  selector: "gm-risk-editor",
  templateUrl: "./data-editor.component.html",
  styleUrls: ["./data-editor.component.scss"]
})
export class RiskDataEditorComponent extends FormComponent<Risk> implements OnInit {
  @Input() communities: Community[] = [];
  @Input() groups: UserGroup[] = [];

  faCalendar = faCalendarPlus;
  successMessage: string = "";

  constructor(
    protected userService: UserService,
    protected fb: FormBuilder,
    protected toastService: ToastrService,
    private riskService: RiskService,
    protected modalService: NgbModal
  ) {
    super();
  }

  async ngOnInit(): Promise<void> {
    this.formGroup = this.fb.group({
      communityId: [this.data && this.data.communityId || "", Validators.required],
      name: [this.data && this.data.name || "", Validators.required],
      happenDate: [this.data && this.data.happenDate || "", Validators.required],
      eventType: [this.data && this.data.eventType || "普通", Validators.required],
      area: [this.data && this.data.area || "", Validators.required],
      content: [this.data && this.data.content || "", Validators.required],
      isSendMessage: [this.data && this.data.isSendMessage || false, Validators.required],
      userMemberId: [this.data && this.data.userMemberId || "", Validators.required]
    });
  }

  async submit(): Promise<void> {
    if (isValidForm(this.formGroup)) {
      this.isSubmitting = true;
      let payload = {
        communityId: this.formGroup.value.communityId,
        name: this.formGroup.value.name,
        happenDate: this.formGroup.value.happenDate,
        eventType: this.formGroup.value.eventType,
        area: this.formGroup.value.area,
        content: this.formGroup.value.content,
        isSendMessage: this.formGroup.value.isSendMessage,
        userMemberId: this.formGroup.value.userMemberId,
      };

      try {
        if (this.data) {
          payload['id'] = this.data.id;
          await this.riskService.updateRisk(this.data.id, payload);
          this.successMessage = "保存成功";
        } else {
          await this.riskService.addRisk(payload);
          this.successMessage = "添加成功";
        }
        this.isSubmitted = true;
        setTimeout(() => this.close(this.successMessage), this.successMessageTimeoutInSeconds * 1000);
      } catch (e) {
        this.isSubmitting = false;
        this.spinnerState = "failed";
      }
    }
  }
}

