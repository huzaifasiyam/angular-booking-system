// src/app/change-password/change-password.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';

export function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const newPassword = control.get('newPassword');
  const confirmNewPassword = control.get('confirmNewPassword');

  if (newPassword?.value !== confirmNewPassword?.value) {
    return { 'passwordMismatch': true };
  }
  return null;
}

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  passwordForm!: FormGroup;
  showCurrentPassword = false;
  showNewPassword = false;
  showConfirmPassword = false;
  isStrongPassword = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.passwordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmNewPassword: ['', Validators.required]
    }, { validators: passwordMatchValidator });
  }

  isInvalid(controlName: string): boolean {
    const control = this.passwordForm.get(controlName);
    return !!(control?.invalid && (control?.touched || control?.dirty));
  }

  get currentPasswordType(): string {
    return this.showCurrentPassword ? 'text' : 'password';
  }

  get newPasswordType(): string {
    return this.showNewPassword ? 'text' : 'password';
  }

  get confirmPasswordType(): string {
    return this.showConfirmPassword ? 'text' : 'password';
  }

    get newPassword(): AbstractControl | null {
    return this.passwordForm.get('newPassword');
  }


  toggleCurrentPassword(): void {
    this.showCurrentPassword = !this.showCurrentPassword;
  }

  toggleNewPassword(): void {
    this.showNewPassword = !this.showNewPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onSubmit(): void {
    if (this.passwordForm.valid) {
      console.log('Password form submitted:', this.passwordForm.value);
      // Here you would call your service to update the password
    } else {
      this.passwordForm.markAllAsTouched();
    }
  }
}