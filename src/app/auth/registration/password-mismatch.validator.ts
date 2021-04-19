import { AbstractControl, ValidatorFn } from '@angular/forms';

export class MismatchValidator {
  static mismatch(otherInputControl: AbstractControl): ValidatorFn {
    return (inputControl: AbstractControl): { [key: string]: boolean } | null => {
      if (inputControl.value !== undefined && inputControl.value?.trim() != '' && inputControl.value !== otherInputControl.value) {
        return { mismatch: true };
      }
      return null;
    };
  }
}
