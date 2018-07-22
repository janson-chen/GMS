import { Component, OnInit } from '@angular/core';
import { ModalContainerComponent } from "../../../shared/components/modal-container/modal-container.component";
import { FormBaseComponent } from "../../../shared/components/form-base/form-base.component";

@Component({
  selector: 'gm-population-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.css']
})
export class PopulationDataEditorComponent extends FormBaseComponent implements OnInit {

  ngOnInit() {

  }

}
