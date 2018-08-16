import { Component, OnInit } from '@angular/core';
import { CoreComponent } from "../core/core.component";
import { TableComponent } from "../../../shared/components/table/table.component";
import { MenuManagerService } from "../menu-manager.service";

@Component({
  selector: 'gm-menu-table',
  templateUrl: './menu-table.component.html',
  styleUrls: ['./menu-table.component.scss']
})
export class MenuListComponent<T> extends TableComponent<T> implements OnInit {
  constructor(
    private menuManagerService: MenuManagerService
  ) {
    super();
  }

  ngOnInit() {

  }

  async removeMenu(id: string): Promise<void> {
    await this.menuManagerService.removeMenu(id);
  }

  editMenu(id: string) {

  }

}
