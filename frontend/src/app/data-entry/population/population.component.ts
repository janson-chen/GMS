import { Component, OnInit } from '@angular/core';
import { ModalContainerComponent } from "../../shared/components/modal-container/modal-container.component";

@Component({
  selector: 'gm-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.scss']
})
export class PopulationComponent extends ModalContainerComponent implements OnInit {

  ngOnInit() {

  }

}
