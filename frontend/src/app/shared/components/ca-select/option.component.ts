import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";

@Component({
    selector: "ca-option",
    template: `
        <button #option type="button" class="option" [class.selected]="selected" (click)="setValue($event)">
            <ng-content></ng-content>
        </button>
    `,
    styleUrls: ["./option.component.scss"]
})
export class OptionComponent implements OnInit {
    @Input() value: any;
    @Input() selected = false;
    @Output() select: EventEmitter<OptionComponent> = new EventEmitter();
    @ViewChild("option") option: ElementRef;

    get label(): string {
        return (<HTMLButtonElement>this.option.nativeElement).innerText.trim();
    }

    constructor(public elementRef: ElementRef) {}

    ngOnInit(): void {
        if ((<HTMLElement>this.elementRef.nativeElement).hasAttribute("selected")) {
            this.selected = true;
        }
    }

    setValue(event: MouseEvent): void {
        if ((<HTMLElement>this.elementRef.nativeElement).hasAttribute("disabled")) {
            event.stopPropagation();
        } else {
            this.select.emit(this);
        }
    }
}
