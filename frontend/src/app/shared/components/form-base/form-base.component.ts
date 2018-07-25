import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserService } from "../core/user.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'gm-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.css']
})
export class FormBaseComponent implements OnInit {
  formGroup: FormGroup;

  constructor(protected userService: UserService, protected fb: FormBuilder, protected toastService: ToastrService) { }

  ngOnInit() {

  }

}
