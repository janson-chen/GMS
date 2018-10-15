import { FormArray, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export class CustomValidators {
    static CheckedCountValidator(min: number = 0, max: number = -1, isChecked: boolean = true): ValidatorFn {
        return (array: FormArray): ValidationErrors => {
            const checkedCount = (<Array<boolean>>array.value).filter(checked => checked === isChecked).length, errorObj: ValidationErrors = {};

            if (max < 0) {
                max = array.length;
            }
            if (checkedCount < min) {
                errorObj["minLength"] = `Number of ${isChecked ? "" : "un"}checked items is less than [${min}].`;
            } else if (checkedCount > max) {
                errorObj["maxLength"] = `Number of ${isChecked ? "" : "un"}checked items is more than [${max}].`;
            } else {
                return null;
            }

            return errorObj;
        };
    }

    static ModelTitle(maxLength: number = 100): ValidatorFn {
        return Validators.compose([
            Validators.required,
            Validators.maxLength(maxLength),
            Validators.pattern(/^\S+$/)
        ]);
    }

    static ModelDescription(maxLength: number = 2500): ValidatorFn {
        return Validators.compose([Validators.required, Validators.maxLength(maxLength)]);
    }

    static VersionNumber(): ValidatorFn {
        return Validators.compose([Validators.required, Validators.pattern(/^(\d+\.)(\d+\.)(\*|\d+)|draft$/)]);
    }

    static FileName(): ValidatorFn {
        return Validators.pattern(/\S?.\S+$/);
    }

    static Tags(): ValidatorFn {
        return Validators.pattern(/^(([a-zA-Z0-9]+\s*){0,5})$/);
    }

    static password(): ValidatorFn {
      return Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern(/[A-Z]+/)]);
    }
}
