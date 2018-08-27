import { Component, Input, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { FormComponent } from "../../../shared/components/core/form-component";
import { FormBuilder } from "@angular/forms";
import { UserService } from "../../../shared/services/user.service";
import { POPULATION_TABLE_COLUMES } from "../../../shared/components/core/core.data";
import { Party } from "../party.data";
import { PartyService } from "../party.service";
import { Community } from "../../../settings/community-manager/community.data";


@Component({
  selector: "gm-party-editor",
  templateUrl: "./data-editor.component.html",
  styleUrls: ["./data-editor.component.scss"]
})
export class PartyDataEditorComponent extends FormComponent<Party> implements OnInit {
  @Input() communities: Community[] = [];

  columns = POPULATION_TABLE_COLUMES;

  constructor(
              protected userService: UserService,
              protected fb: FormBuilder,
              protected toastService: ToastrService,
              private partyService: PartyService
  ) {
    super(userService, fb, toastService);
  }

  async ngOnInit(): Promise<void> {
    this.formGroup = this.fb.group({
      communityID: "",
      subject: "",
      activitiesDate: "",
      activitiesPlace: "",
      joinAmount: 0,
      realAmount: 0,
      leaveAmount: 0,
      form: "",
      content: ""
    });
  }

  async submit() {
    this.isSubmitting = true;
    const payload = {
      communityID: this.formGroup.value.communityID,
      subject: this.formGroup.value.subject,
      activitiesDate: this.formGroup.value.activitiesDate,
      activitiesPlace: this.formGroup.value.activitiesPlace,
      joinAmount: this.formGroup.value.joinAmount,
      realAmount: this.formGroup.value.realAmount,
      leaveAmount: this.formGroup.value.leaveAmount,
      form: this.formGroup.value.form,
      content: this.formGroup.value.content
    };

    try {
      await this.partyService.addParty(payload);
      this.isSubmitted = true;
      setTimeout(() => this.close("创建党建活动表成功."), this.successMessageTimeoutInSeconds * 1000);
    } catch (e) {
      this.isSubmitting = false;
      this.spinnerState = "failed";
    }
  }


}

