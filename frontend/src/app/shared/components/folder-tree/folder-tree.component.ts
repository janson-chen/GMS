import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from "@angular/core";

import { FolderTreeService } from "./folder-tree.service";
import { FolderState, FolderTree } from "./folder-tree.data";

@Component({
  selector: "ca-folder-tree",
  templateUrl: "./folder-tree.component.html",
  styleUrls: ["./folder-tree.component.scss"],
  providers: [FolderTreeService]
})
export class FolderTreeComponent implements OnInit {
  type: string;
  selected: boolean = false;
  FolderState = FolderState;
  folderState: FolderState = FolderState.Folded;
  @Input() folder: FolderTree;
  @Output() folderChange: EventEmitter<FolderTree> = new EventEmitter<FolderTree>();

  constructor(private render: Renderer2, private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.getSubFolderTress();
  }

  toggleFolderState(): void {
    const isFolded = this.folderState === FolderState.Folded;
    isFolded ? (this.folderState = FolderState.Expanded) : (this.folderState = FolderState.Folded);
  }

  selectedFolder(el: HTMLElement): void {
    const folders = Array.from(document.querySelectorAll(".folder-title"));
    folders.forEach((folder: HTMLElement): void => {
      this.render.removeClass(folder, "selected");
    });
    this.render.addClass(el, "selected");
  }

  folderClick(event: MouseEvent, data: FolderTree): void {
    event.stopPropagation();
    this.folderChange.emit(data);
  }

  async getSubFolderTress(): Promise<void> {
    const folderTree = await this.getSubFolderTreeById(this.folder.id);
    if (folderTree) {
      this.folder = folderTree;
    }
  }

  async getSubFolderTreeById(id: string): Promise<FolderTree> {
    return null;
  }
}
