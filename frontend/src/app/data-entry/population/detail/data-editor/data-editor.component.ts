import { Component, Input, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { FormBuilder } from "@angular/forms";
import { POPULATION_TABLE_COLUMES } from "../../../shared/components/core/core.data";
import { Member } from "../../population.data";
import { FormComponent } from "../../../../shared/components/core/form-component";
import { UserService } from "../../../../shared/services/user.service";
import { PopulationService } from "../../population.service";
import { faEdit, faTrash, faCalendar, faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Dictionary } from "../../../../settings/dictionary-manager/dicitonary-manager.data";

@Component({
  selector: "gm-member-editor",
  templateUrl: "./data-editor.component.html",
  styleUrls: ["./data-editor.component.scss"],
  providers: [FormComponent.provide(MemberEditorComponent)]
})
export class MemberEditorComponent extends FormComponent<Member> implements OnInit {
  @Input() code: string = "";
  @Input() populationId: string = "";
  @Input() relations: Dictionary[] = [];
  @Input() peopleTypes: Dictionary[] = [];
  @Input() cultures: Dictionary[] = [];
  @Input() maritalStates: Dictionary[] = [];

  private editMember_: Member;

  faCalendar = faCalendarPlus;

  set currentEditMember(value: Member) {
    this.editMember_ = value;
  };

  constructor(
    protected userService: UserService,
    protected fb: FormBuilder,
    protected toastService: ToastrService,
    private populationService: PopulationService,
    protected modalService: NgbModal
  ) {
    super();
  }

  async ngOnInit(): Promise<void> {
    console.log(this.relations);
    this.formGroup = this.fb.group({
      populationId: this.populationId,
      populationCode: this.code,
      personName: this.data && this.data.personName || "",
      cardNo: this.data && this.data.cardNo || "",
      sex: this.data && this.data.sex,
      nation: this.data && this.data.nation || "",
      birthDate: this.data && this.data.birthDate || "",
      politicalStatus: this.data && this.data.politicalStatus || "",
      relation: this.data && this.data.relation || "",
      registeredResidence: this.data && this.data.registeredResidence || "",
      nativePlace: this.data && this.data.nativePlace || "",
      peopleType: this.data && this.data.peopleType || "",
      culture: this.data && this.data.culture || "",
      marriage: this.data && this.data.marriage || "",
      rmks: this.data && this.data.rmks || "",
    });
  }

  async submit() {
    this.isSubmitting = true;
    const payload: Member = {
      populationId: this.populationId,
      personName: this.formGroup.value.personName,
      cardNo: this.formGroup.value.cardNo,
      sex: this.formGroup.value.sex,
      nation: this.formGroup.value.nation,
      birthDate: typeof this.formGroup.value.birthDate === "object" ? Object.values(this.formGroup.value.birthDate).join("-") : this.formGroup.value.birthDate,
      politicalStatus: this.formGroup.value.politicalStatus,
      relation: this.formGroup.value.relation,
      registeredResidence: this.formGroup.value.registeredResidence,
      nativePlace: this.formGroup.value.nativePlace,
      peopleType: this.formGroup.value.peopleType,
      culture: this.formGroup.value.culture,
      marriage: this.formGroup.value.marriage,
      rmks: this.formGroup.value.rmks
    };

    try {
      if (this.data) {
        await this.populationService.updateMembers(this.code, [payload]);
      } else {
        await this.populationService.addMembers(this.code, [payload]);
      }
      this.isSubmitted = true;
      setTimeout(() => this.close("家庭成员信息修改成功."), this.successMessageTimeoutInSeconds * 1000);
    } catch (e) {
      this.isSubmitting = false;
      this.spinnerState = "failed";
    }
  }
}

