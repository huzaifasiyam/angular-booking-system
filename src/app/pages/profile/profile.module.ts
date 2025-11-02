import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileLayoutComponent } from './profile-layout/profile-layout.component';
import { ProfileDetailsComponent } from './profile-layout/profile-details/profile-details.component';
import { AppointmentListComponent } from './profile-layout/appointment-list/appointment-list.component';
import { ChangePasswordComponent } from './profile-layout/change-password/change-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ProfileLayoutComponent,
    ProfileDetailsComponent,
    AppointmentListComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    NgbAccordionModule,
    NgSelectModule,
    FormsModule,
    SharedModule,
    TranslateModule,
    NgxSkeletonLoaderModule
  ]
})
export class ProfileModule { }
