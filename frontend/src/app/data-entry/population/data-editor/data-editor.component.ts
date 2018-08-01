import { Component, Input, OnInit } from "@angular/core";
import { FormComponent } from "../../../shared/components/core/form-component";
import { FormBuilder } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { UserService } from "../../../shared/services/user.service";
import { POPULATION_TABLE_COLUMES } from "../../../shared/components/core/core.data";


@Component({
  selector: "gm-population-editor",
  templateUrl: "./data-editor.component.html",
  styleUrls: ["./data-editor.component.scss"]
})
export class PopulationDataEditorComponent extends FormComponent<any> implements OnInit {
  columns = POPULATION_TABLE_COLUMES;

  constructor(protected userService: UserService, protected fb: FormBuilder, protected toastService: ToastrService) {
    super(userService, fb, toastService);
  }

  async ngOnInit(): Promise<void> {
    this.formGroup = this.fb.group({
      title: ""
    });
  }

  async submit() {

  }
}

