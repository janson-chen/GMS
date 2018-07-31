import {
  AfterViewInit, Component, ContentChildren, ElementRef, EventEmitter, Host, Input, OnDestroy, OnInit,
  Optional,
  Output,
  QueryList, Renderer2, SkipSelf, TemplateRef, ViewChild
} from "@angular/core";
import { ControlContainer, NG_VALUE_ACCESSOR } from "@angular/forms";
import { animate, style, transition, trigger } from "@angular/animations";

import { FormControlBase } from "../../models/form-control-base";
import { OptionComponent } from "./option.component";
import { guid } from "../../utils/guid";
import { BaseFormControl } from "../core/base-form-control";

@Component({
  selector: "ca-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectComponent,
      multi: true
    }
  ],
  animations: [
    trigger("toggle", [
      transition(":enter", [style({height: 0}), animate(150, style({height: "*"}))]),
      transition(":leave", [style({height: "*"}), animate(150, style({height: 0}))])
    ])
  ]
})
export class SelectComponent extends BaseFormControl<string> implements OnInit, AfterViewInit, OnDestroy {
  @Input() disabled: boolean = false;
  @Input() title: string = "";
  @Input() theme: "cadetblue" | "light" = "light";
  @ContentChildren(OptionComponent) options: QueryList<OptionComponent>;
  @ViewChild("content", {read: TemplateRef}) content: TemplateRef<any>;
  @Output() selectChange: EventEmitter<string> = new EventEmitter<string>(null);
  optionDefaultHeight: number = 36;
  uuid: string = guid();

  window = window;
  optionListOpened = false;
  isFirstTime = true;
  openOptionList = (event: MouseEvent): void => {
    this.optionListOpened = true;
  };
  closeOptionList = (): void => {
    this.optionListOpened = false;
  };

  get selectedOptionText(): string {
    return this.selectedOption ? this.selectedOption.label : "";
  }

  get value(): string {
    return this.value_;
  }

  set value(value: string) {
    this.value_ = value || "";
    this.propagateChange(this.value_);
  }

  private selectedOption: OptionComponent = null;
  private value_: string;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2,
              @Host()
              @Optional()
              @SkipSelf()
                controlContainer: ControlContainer) {
    super(controlContainer);
  }

  toggleOptionList(event: MouseEvent): void {
    this.optionListOpened ? this.closeOptionList() : this.openOptionList(event);
  }

  writeValue(value: string): void {
    this.value_ = value || "";
  }

  ngOnInit(): void {
    super.ngOnInit();

    if (this.elementRef.nativeElement.hasAttribute("disabled")) {
      this.disabled = true;
    }

    this.renderer.listen(document.body, "click", (event) => {
      if (event.target.id !== this.uuid) {
        this.closeOptionList();
      } else {
        const modalDialog = document.querySelector(".modal-dialog");
        if (modalDialog) {
          const optionHeight = this.options.first.elementRef.nativeElement.offsetHeight || this.optionDefaultHeight;
          const isOverflow = event.clientY + optionHeight * this.options.length > modalDialog.getBoundingClientRect().bottom - optionHeight;
          if (isOverflow && document.querySelector(".options")) {
            this.renderer.setStyle(document.querySelector(".options"), "transform", `translateY(-100%) translateY(-${optionHeight - 2 + "px"})`);
          }
        }
      }
    });
  }

  ngAfterViewInit(): void {
    this.options.forEach(option => option.select.subscribe((selectedOption: OptionComponent) => this.selectOption(selectedOption)));

    if (this.options.length) {
      // Prevent "value changed after it was checked" error.
      setTimeout(() => {
        const value = this.controlContainer ? this.controlContainer.control.get(this.formControlName).value : this.value_;
        this.selectOption(this.options.find(item => item.selected) || this.options.find(item => item.value === value) || this.options.first);
      });
    }
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  private selectOption(option: OptionComponent): void {
    if (this.selectedOption) {
      this.selectedOption.selected = false;
    }

    this.selectedOption = option;
    this.selectedOption.selected = true;
    if (this.isFirstTime) {
      this.value_ = option.value;
      this.isFirstTime = false;
    } else {
      this.value = option.value;
    }

    this.selectChange.emit(this.value);
    this.closeOptionList();
  }
}
