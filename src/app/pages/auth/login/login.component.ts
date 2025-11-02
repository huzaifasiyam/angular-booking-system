import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService // Inject the AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  // Getters for easy access to form controls in the template
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.authService.login(email, password).subscribe({
        next: () => {
          Swal.fire({
            title: 'Success!',
            text: 'You have been logged in successfully.',
            icon: 'success',
            confirmButtonText: 'OK',
            customClass: {
              confirmButton: 'swal2-confirm'
            }
          }).then(() => {
            this.router.navigate(['/']); // Navigate to a dashboard or home page
          });
        },
        error: (err) => {
          Swal.fire({
            title: 'Error!',
            text: 'Invalid email or password. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}