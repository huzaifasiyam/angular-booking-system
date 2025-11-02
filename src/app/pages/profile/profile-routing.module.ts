import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileLayoutComponent } from './profile-layout/profile-layout.component';
import { ProfileDetailsComponent } from './profile-layout/profile-details/profile-details.component';
import { AppointmentListComponent } from './profile-layout/appointment-list/appointment-list.component';
import { ChangePasswordComponent } from './profile-layout/change-password/change-password.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'details',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ProfileLayoutComponent,
    children: [
      { path: 'details', component: ProfileDetailsComponent },
      { path: 'appointments', component: AppointmentListComponent },
      { path: 'change-password', component: ChangePasswordComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
