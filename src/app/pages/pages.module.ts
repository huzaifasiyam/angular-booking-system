import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgbAccordionModule, NgbAlertModule, NgbDatepickerModule, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesRoutingModule } from './pages-routing.module';
import { BookingComponent } from './booking/booking.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CenterSelectionModalComponent } from './modals/center-selection-modal/center-selection-modal.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../core/shared/shared.module';
import { BookingModalComponent } from './modals/booking-modal/booking-modal.component';
import { RatingModalComponent } from './modals/rating-modal/rating-modal.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    HomeComponent,
    BookingComponent,
    CenterSelectionModalComponent,
    BookingModalComponent,
    RatingModalComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    NgbModule,
    NgbAccordionModule,
    NgbNavModule,
    NgbAlertModule,
    NgSelectModule,
    NgbDatepickerModule,
    FlatpickrModule.forRoot(),
    TranslateModule,
    ReactiveFormsModule,
    SharedModule,
    NgxSkeletonLoaderModule
  ],
  exports: [RouterModule]
})
export class PagesModule { }