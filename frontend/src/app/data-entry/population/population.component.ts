import { Component, OnInit } from '@angular/core';

import { ModalContainerComponent } from "../../shared/components/modal-container/modal-container.component";
import { Population, POPULATION_MANAGER_TABLE_COLUMES } from "./population.data";
import { ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { PopulationService } from "./population.service";

@Component({
  selector: 'gm-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.scss']
})
export class PopulationComponent extends ModalContainerComponent implements OnInit {
  columns = POPULATION_MANAGER_TABLE_COLUMES;
  populationList: Population[];

  constructor(
    private populationService: PopulationService,
    protected modalService: NgbModal,
    private route: ActivatedRoute
  ) {
    super(modalService);

    route.data.subscribe((data: { populations: Population[]}) => {
      this.populationList = data.populations;
    });
  }

  ngOnInit() {

  }

}
