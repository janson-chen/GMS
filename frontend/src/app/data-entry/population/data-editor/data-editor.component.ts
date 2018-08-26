import { Component, Input, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { FormComponent } from "../../../shared/components/core/form-component";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { UserService } from "../../../shared/services/user.service";
import { POPULATION_TABLE_COLUMES } from "../../../shared/components/core/core.data";
import { Insurance } from "../population.data";
import { Permission } from "../../../settings/role-manager/role.data";
import { Community } from "../../../settings/community-manager/community.data";


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

  constructor(protected userService: UserService, protected fb: FormBuilder, protected toastService: ToastrService) {
    super(userService, fb, toastService);
  }

  async ngOnInit(): Promise<void> {
    this.formGroup = this.fb.group({
      communityID: "",
      family_Address: "",
      family_Type: "",
      sex: "",
      nationality: "",
      insurances: this.selectedInsurances
    });
    console.log("insurances", this.insurances);
    this.catchSelectedInsurances();
  }

  async submit() {

  }

  // 获取保户类型
  private catchSelectedInsurances() {
    this.insurancesForm = this.fb.group({ insurances: this.fb.array((<any[]>this.insurances).map(() => false)) });
    const insurancesSelection = <FormArray>this.insurancesForm.get("insurances");
    this.insurancesFormArray = (<Insurance[]>this.insurances).map((insurance, i) => ({ insurance: insurance, control: <FormControl>insurancesSelection.controls[i] }));

    insurancesSelection.valueChanges.subscribe((selectedInsurance: Insurance) => {
      this.selectedInsurances = (<any[]>this.insurances).filter((insurance, i) => selectedInsurance[i]).map(insurance => insurance);
      console.log("selected permissions", this.selectedInsurances);
    });
  }

}

