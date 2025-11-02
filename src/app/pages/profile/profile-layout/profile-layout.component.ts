// src/app/pages/profile/profile-layout/profile-layout.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.scss']
})
export class ProfileLayoutComponent {
  currentUser: User | null = null;
  menu = [
    { path: 'details', label: 'Edit Details', icon: 'fa-user' },
    { path: 'appointments', label: 'My Appointments', icon: 'fa-calendar' },
    { path: 'change-password', label: 'Change Password', icon: 'fa-lock' }
  ];

  constructor(
    public readonly router: Router,
    private readonly authService: AuthService,
  ) {
    this.currentUser = this.authService.getUser();
  }
}
