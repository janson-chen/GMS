import { Component, Input, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { FormComponent } from "../../../shared/components/core/form-component";
import { FormBuilder } from "@angular/forms";
import { UserService } from "../../../shared/services/user.service";
import { RiskService } from "../risk.service";
import { Risk } from "../risk.data";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Community } from "../../../settings/community-manager/community.data";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "gm-risk-editor",
  templateUrl: "./data-editor.component.html",
  styleUrls: ["./data-editor.component.scss"]
})
export class RiskDataEditorComponent extends FormComponent<Risk> implements OnInit {
  @Input() communities: Community[] = [];
  faCalendar = faCalendarPlus;

  constructor(
    protected userService: UserService,
    protected fb: FormBuilder,
    protected toastService: ToastrService,
    private partyService: RiskService,
    protected modalService: NgbModal
  ) {
    super();
  }

  async ngOnInit(): Promise<void> {
    this.formGroup = this.fb.group({
      communityId: "",
      name: "",
      happenDate: "",
      eventType: "普通",
      area: "",
      content: "",
      isSendMessage: false,
      userMemberId: ""
    });
  }

  async submit() {
    this.isSubmitting = true;
    const payload = {
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
      await this.partyService.addRisk(payload);
      this.isSubmitted = true;
      setTimeout(() => this.close("安全隐患排查表创建成功."), this.successMessageTimeoutInSeconds * 1000);
    } catch (e) {
      this.isSubmitting = false;
      this.spinnerState = "failed";
    }
  }
}

