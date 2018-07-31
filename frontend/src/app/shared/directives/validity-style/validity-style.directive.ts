/**
 * Add bootstrap validity style automatically when and form control is dirty.
 * Additionally, styles also being applied when form control is touched which is not a good user experience.
 * Please consider make it only applicable to dirty form control.
 */
import { AfterViewChecked, Directive, ElementRef, Input, Renderer2, Optional } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({selector: "[caValidityClass]"})
export class ValidityStyleDirective implements AfterViewChecked {
  private formControlElement: HTMLElement;

  @Input()
  set caValidityClass(element: HTMLElement) {
    this.formControlElement = element;
  }

  constructor(private elementRef: ElementRef, @Optional() private control: NgControl, private renderer: Renderer2) {
  }

  ngAfterViewChecked(): void {
    const formControlElement = this.formControlElement ? this.formControlElement : <HTMLElement>this.elementRef.nativeElement;
    const element = <HTMLElement>this.elementRef.nativeElement;

    if (formControlElement.classList.contains(`ng-dirty`) || formControlElement.classList.contains(`ng-touched`)) {
      if (formControlElement.classList.contains("ng-valid")) {
        this.renderer.removeClass(element, "is-invalid");
        if (this.control) {
          if (this.control.control.validator || this.control.control.asyncValidator) {
            this.renderer.addClass(element, "is-valid");
          }
        } else {
          this.renderer.addClass(element, "is-valid");
        }
      } else {
        this.renderer.addClass(element, "is-invalid");
        this.renderer.removeClass(element, "is-valid");
      }
    } else {
      this.renderer.removeClass(element, "is-invalid");
      this.renderer.removeClass(element, "is-valid");
    }
  }
}
