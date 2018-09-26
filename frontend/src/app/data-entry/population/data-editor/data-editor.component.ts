import { Component, Input, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";

import { FormComponent } from "../../../shared/components/core/form-component";
import { UserService } from "../../../shared/services/user.service";
import { POPULATION_TABLE_COLUMES } from "../../../shared/components/core/core.data";
import { Insurance, Population } from "../population.data";
import { Community } from "../../../settings/community-manager/community.data";
import { PopulationService } from "../population.service";
import { timestamp } from "../../../shared/utils/timestamp";
import { Dictionary } from "../../../settings/dictionary-manager/dicitonary-manager.data";

@Component({
  selector: "gm-population-editor",
  templateUrl: "./data-editor.component.html",
  styleUrls: ["./data-editor.component.scss"],
  providers: [FormComponent.provide(PopulationDataEditorComponent)]
})
export class PopulationDataEditorComponent extends FormComponent<Population> implements OnInit {
  @Input() insurances: Insurance[] = [];
  @Input() communities: Community[] = [];
  @Input() relations: Dictionary[] = [];
  @Input() peopleTypes: Dictionary[] = [];

  selectedInsurances: Insurance[] = [];

  columns = POPULATION_TABLE_COLUMES;
  insurancesForm: FormGroup = this.fb.group({});
  insurancesFormArray: Array<{ insurance: Insurance; control: FormControl }> = [];

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
    // console.log("data", this.data);
    this.formGroup = this.fb.group({
      communityId: this.data && this.data.communityId || "",
      familyAddress: this.data && this.data.familyAddress || "",
      familyType: this.data && this.data.familyType || "",
      insurances: this.data && this.selectedInsurances || "",
      familyContent: this.data && this.data.familyContent || "",
      familyPhone: this.data && this.data.familyPhone || ""
    });

    console.log("formgroupd", this.formGroup);

    this.catchSelectedInsurances();
  }

  async submit() {
    this.isSubmitting = true;
    let payload = {
      code: "Code" + timestamp(),
      communityId: this.formGroup.value.communityId,
      familyAddress: this.formGroup.value.familyAddress,
      familyType: this.formGroup.value.familyType,
      familyContent: this.formGroup.value.familyContent,
      familyPhone: this.formGroup.value.familyPhone
    };

    if (this.data) {
      payload['id'] = this.data.id;
    }

    try {
      if (this.data) {
        await this.populationService.updatePopulation(this.data.id, payload);
      } else {
        await this.populationService.addPopulation(payload);
      }

      this.isSubmitted = true;
      setTimeout(() => this.close("修改成功."), this.successMessageTimeoutInSeconds * 1000);
    } catch (e) {
      this.isSubmitting = false;
      this.spinnerState = "failed";
    }
  }

  // 获取保户类型
  private catchSelectedInsurances() {
    this.insurancesForm = this.fb.group({insurances: this.fb.array((<any[]>this.insurances).map(() => false))});
    const insurancesSelection = <FormArray>this.insurancesForm.get("insurances");
    this.insurancesFormArray = (<Insurance[]>this.insurances).map((insurance, i) => ({
      insurance: insurance,
      control: <FormControl>insurancesSelection.controls[i]
    }));

    insurancesSelection.valueChanges.subscribe((selectedInsurance: Insurance) => {
      this.selectedInsurances = (<any[]>this.insurances).filter((insurance, i) => selectedInsurance[i]).map(insurance => insurance);
    });
  }
}

