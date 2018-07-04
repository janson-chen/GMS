import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'gm-modal-container',
    templateUrl: './modal-container.component.html',
    styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements OnInit {
    constructor(private modalService: NgbModal) { }
    private modalContainerOptions: NgbModalOptions = {
        centered: true,
        size: "lg",
        windowClass: "ngb-modal"
    };

    ngOnInit() {

    }

    open(templateRef: TemplateRef<any>): void {
        this.modalService.open(templateRef, this.modalContainerOptions);
    }

}
