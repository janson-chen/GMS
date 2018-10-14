import { faSearch, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from "@angular/core";

import { CoreComponent } from "../../core/core.component";
import { SearchData, SearchType } from "./search-bar.interface";

@Component({
  selector: 'gm-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() searchValueChange: EventEmitter<Object | string> = new EventEmitter<Object | string>();
  @Input() searchData: SearchData[];

  SearchType = SearchType;
  faSearch = faSearch;
  faCalendar = faCalendar;
  searchValue: Object = {};

  constructor() {

  }

  ngOnInit() {

  }

  @HostListener("keyup", ["$event"])
  keyUpChange(event) {
    if (this.searchValue && event.key === "Enter") {
      this.goSearch();
    }
  }

  goSearch(): void {
    this.searchData.forEach(item => {
      if (item.value === "") {
        Reflect.deleteProperty(this.searchValue, item.key);
      } else {
        Object.assign(this.searchValue, { [item.key]: item.value} );
      }
    });
    console.log("data", this.searchValue);

    if (this.searchValue) {
      this.searchValueChange.emit(this.searchValue);
    }
  }
}
