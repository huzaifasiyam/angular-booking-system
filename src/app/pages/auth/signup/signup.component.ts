import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from 'src/app/core/service/auth.service';
import { mobileNumberValidator } from 'src/app/core/helpers/mobileNumberValidator.helper';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService // Inject the AuthService
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, mobileNumberValidator]],
      gender: ['', Validators.required],
      // Captcha
      recaptchaReactive: [null, Validators.required]
    });
  }

  // Getters for easy access to form controls in the template
  get recaptchaReactive() { return this.signupForm.get('recaptchaReactive'); }
  get firstName() { return this.signupForm.get('firstName'); }
  get lastName() { return this.signupForm.get('lastName'); }
  get email() { return this.signupForm.get('email'); }
  get mobileNumber() { return this.signupForm.get('mobileNumber'); }
  get gender() { return this.signupForm.get('gender'); }

 onSignup(): void {
    if (this.signupForm.valid) {
      const userData = this.signupForm.value;
      console.log('Signup data:', userData);

      // Extract the reCAPTCHA token before sending to the server
      const recaptchaToken = userData.recaptchaReactive;

      // You would typically send the recaptchaToken to your backend API
      // for server-side verification. The code below is a placeholder.

      this.authService.signup(userData).subscribe({
        next: () => {
          Swal.fire({
            title: 'Registration Successful!',
            text: 'You have been successfully signed up and logged in.',
            icon: 'success',
            confirmButtonText: 'OK',
            customClass: {
              confirmButton: 'swal2-confirm'
            }
          }).then(() => {
            this.router.navigate(['/pages/auth/login']);
          });
        },
        error: (err) => {
          Swal.fire({
            title: 'Error!',
            text: 'Something went wrong during signup. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      });
    } else {
      this.signupForm.markAllAsTouched();
    }
  }
}