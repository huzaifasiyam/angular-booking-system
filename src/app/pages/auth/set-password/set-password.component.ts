import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent implements OnInit {
  setPasswordForm!: FormGroup;
  showPassword = false;
  showConfirmPassword = false;
 isStrongPassword = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.setPasswordForm = this.fb.group(
      {
        newPassword: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  // Getters for controls
  get newPassword(): AbstractControl | null {
    return this.setPasswordForm.get('newPassword');
  }

  get confirmPassword(): AbstractControl | null {
    return this.setPasswordForm.get('confirmPassword');
  }

  // Custom Validator
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('newPassword')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password && confirmPassword && password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      return null;
    }
  }

  onSetPassword(): void {
    if (this.setPasswordForm.valid) {
      const { newPassword } = this.setPasswordForm.value;
Swal.fire({
            title: 'Password Set!',
            text: 'Your password has been updated successfully.',
            icon: 'success',
            confirmButtonText: 'Continue',
            customClass: { confirmButton: 'swal2-confirm' }
          }).then(() => {
            this.router.navigate(['/login']);
          });
      // Call API
      // this.authService.setPassword(newPassword).subscribe({
      //   next: () => {
      //     Swal.fire({
      //       title: 'Password Set!',
      //       text: 'Your password has been updated successfully.',
      //       icon: 'success',
      //       confirmButtonText: 'Continue',
      //       customClass: { confirmButton: 'swal2-confirm' }
      //     }).then(() => {
      //       this.router.navigate(['/login']);
      //     });
      //   },
      //   error: () => {
      //     Swal.fire({
      //       title: 'Error!',
      //       text: 'Something went wrong. Please try again.',
      //       icon: 'error',
      //       confirmButtonText: 'Retry'
      //     });
      //   }
      // });
    } else {
      this.setPasswordForm.markAllAsTouched();
    }
  }
}
