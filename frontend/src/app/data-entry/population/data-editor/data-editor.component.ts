import { Component, Input, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { FormComponent } from "../../../shared/components/core/form-component";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { UserService } from "../../../shared/services/user.service";
import { POPULATION_TABLE_COLUMES } from "../../../shared/components/core/core.data";
import { Insurance } from "../population.data";
import { Community } from "../../../settings/community-manager/community.data";
import { PopulationService } from "../population.service";
import { timestamp } from "../../../shared/utils/timestamp";


@Component({
  selector: "gm-population-editor",
  templateUrl: "./data-editor.component.html",
  styleUrls: ["./data-editor.component.scss"]
})
export class PopulationDataEditorComponent extends FormComponent<Insurance> implements OnInit {
  @Input() insurances: Insurance[] = [];
  @Input() communities: Community[] = [];

  selectedInsurances: Insurance[] = [];

  columns = POPULATION_TABLE_COLUMES;
  insurancesForm: FormGroup = this.fb.group({});
  insurancesFormArray: Array<{ insurance: Insurance; control: FormControl }> = [];

  constructor(
    protected userService: UserService,
    protected fb: FormBuilder,
    protected toastService: ToastrService,
    private populationService: PopulationService
  ) {
    super(userService, fb, toastService);
  }

  async ngOnInit(): Promise<void> {
    this.formGroup = this.fb.group({
      communityID: "",
      family_Address: "",
      family_Type: "",
      sex: "",
      nationality: "",
      insurances: this.selectedInsurances,
      family_Content: "",
      family_Phone: ""
    });

    this.catchSelectedInsurances();
  }

  async submit() {
    this.isSubmitting = true;
    const payload = {
      code: "Code" + timestamp(),
      communityID: this.formGroup.value.communityID,
      family_Address: this.formGroup.value.family_Address,
      family_Type: this.formGroup.value.family_Type,
      sex: this.formGroup.value.sex,
      nationality: this.formGroup.value.nationality,
      family_Content: this.formGroup.value.family_Content,
      family_Phone: this.formGroup.value.family_Phone
    };

    try {
      await this.populationService.addPopulation(payload);
      this.isSubmitted = true;
      setTimeout(() => this.close("创建网格成功."), this.successMessageTimeoutInSeconds * 1000);
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
      console.log("selected permissions", this.selectedInsurances);
    });
  }

}

