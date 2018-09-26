import { Component } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { BASIC_SETTING_MANAGER_TABLE_COLUMES, BasicSetting } from "./external-manager.data";
import { ModalContainerComponent } from "../../shared/components/modal-container/modal-container.component";
import { UserService } from "../../shared/services/user.service";
import { Dictionary, DICTIONARY_MANAGER_TABLE_COLUMES } from "./dicitonary-manager.data";
import { DictionaryManagerService } from "./dictionary-manager.service";
import { ResponseData } from "../../shared/components/core/core.data";

@Component({
  selector: 'gm-dictionary-manager',
  templateUrl: './dictionary-manager.component.html',
  styleUrls: ['./dictionary-manager.component.scss']
})
export class DictionaryManagerComponent extends ModalContainerComponent {
  dictionaries: Dictionary[];
  columns = DICTIONARY_MANAGER_TABLE_COLUMES;

  constructor(
    private route: ActivatedRoute,
    protected userService: UserService,
    protected fb: FormBuilder,
    protected toastService: ToastrService,
    protected modalService: NgbModal,
    private dictionaryManagerService: DictionaryManagerService
  ) {
    super();
    route.data.subscribe((data: { dictionaries: ResponseData<Dictionary>}) => {
      this.dictionaries = data.dictionaries.detail;
      this.queryOptions.totalCount = data.dictionaries.totalCount;
    });
  }

  async updateDictionaries(): Promise<void> {
    setTimeout(async () => {
      const result = await this.dictionaryManagerService.getList(`/dictionarylist/${this.queryUrl}`);
      if (result) {
        console.log("result", result);
        this.data = result;
        this.dictionaries = result.detail;
      }
    }, 1000);
  }

  async search(page: number): Promise<void> {
    this.queryOptions.page = page;
    const result = await this.dictionaryManagerService.getList(`/dictionarylist/${this.queryUrl}`);
    this.dictionaries = result.detail;
  }

}
