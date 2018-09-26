import { Component } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { FormBuilder } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { CoreComponent } from "../core/core.component";
import { ModalContainerComponent } from "../../../shared/components/modal-container/modal-container.component";
import { UserService } from "../../../shared/services/user.service";
import {
  Dictionary,
  DICTIONARY_MANAGER_TABLE_COLUMES,
} from "../dicitonary-manager.data";
import { DictionaryManagerService } from "../dictionary-manager.service";

@Component({
  selector: 'gm-dictionary-table',
  templateUrl: './dictionary-table.component.html',
  styleUrls: ['./dictionary-table.component.scss']
})
export class DictionaryListComponent extends ModalContainerComponent {
  columns = DICTIONARY_MANAGER_TABLE_COLUMES;
  faTrash = faTrash;
  faEdit = faEdit;
  currentEditItem: Dictionary = null;

  constructor(
    protected userService: UserService,
    protected fb: FormBuilder,
    protected toastService: ToastrService,
    protected modalService: NgbModal,
    private dictionaryManagerService: DictionaryManagerService
  ) {
    super();
  }

  async updateDictionaries(): Promise<void> {
    setTimeout(async () => {
      const result = await this.dictionaryManagerService.getList("/dictionarylist", this.queryUrl);
      if (result) {
        console.log("result", result);
        this.data = result.detail;
      }
    }, 1000);
  }

  async removeItem(id: string): Promise<void> {
    await this.dictionaryManagerService.removeItem(id, `/dictionary`);
    const result = await this.dictionaryManagerService.getList("/dictionarylist/page=-1/pagesize=-1");
    this.data = result.detail;
  }
}
