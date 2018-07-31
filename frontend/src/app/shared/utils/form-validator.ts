import { AbstractControl, FormGroup } from "@angular/forms";

export function isValidForm(formGroup: FormGroup, markAsTouched = false): boolean {
  Object.values(formGroup.controls).forEach((control: AbstractControl) => {
    markAsTouched ? control.markAsTouched({ onlySelf: true }) : control.markAsDirty({ onlySelf: true });
  });

  return formGroup.valid;
}
