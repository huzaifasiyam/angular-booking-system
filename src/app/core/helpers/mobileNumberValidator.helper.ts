import { AbstractControl, ValidationErrors } from '@angular/forms';

export function mobileNumberValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;
  console.log(value, 'value');

  if (!value) {
    return { required: true };
  }

  // Use a more robust regex to handle cases with or without the leading '+'
  const num = value.trim().replace(/^(\+\d{1,4}\s?)?(\d+)/, '$2');
  console.log(num, 'num');

  // Check if the number is empty or has a length less than the standard number length
  if (!num || num.length < 7) { // A common standard for phone number length
    return { invalidMobileNumber: true };
  }

  return null;
}