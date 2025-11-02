import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookingModalComponent } from 'src/app/pages/modals/booking-modal/booking-modal.component';
import { DateTimeHelper } from 'src/app/core/helpers/date-time.helper';
import { CommonData } from 'src/app/core/models/common-data';
import { RatingModalComponent } from 'src/app/pages/modals/rating-modal/rating-modal.component';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {
  activeTab: 'upcoming' | 'past' = 'upcoming';
  searchTerm: string = '';
  protected loading: boolean = true;
  // Note: For a real app, this data would come from a backend service.
  upcomingAppointments = [
    { 
      id: 1,
      date: new Date('2025-09-20T10:00:00'), 
      time: '10:00 AM', 
      service: { listId: 1, listValue: 'Haircut & Styling', price: 30, duration: 45 },
      artist: { listId: 1, listValue: 'Jane Doe' },
    },
    { 
      id: 2,
      date: new Date('2025-10-05T14:30:00'), 
      time: '02:30 PM', 
      service: { listId: 2, listValue: 'Coloring', price: 90, duration: 120 },
      artist: { listId: 2, listValue: 'John Smith' },
    },
  ];

  pastAppointments = [
    { 
      id: 3,
      date: new Date('2025-08-15T11:00:00'), 
      time: '11:00 AM', 
      service: 'Manicure', 
      artist: 'Sara', 
      rating: 4.5,
      comment: 'Loved the service!'
    },
    { 
      id: 4,
      date: new Date('2025-07-22T09:00:00'), 
      time: '09:00 AM', 
      service: 'Massage Therapy', 
      artist: 'John', 
      rating: null,
      comment: null
    },
  ];

  filteredUpcomingAppointments: any[] = [];
  filteredPastAppointments: any[] = [];

  // Assuming you have access to the full list of therapists from the BookingComponent
  therapists = [
    { listId: 1, listValue: 'Jane Doe' },
    { listId: 2, listValue: 'John Smith' },
  ];

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
        setTimeout(() => {
      this.filterAppointments();
      this.loading = false;  // hide loader after data ready
    }, 1000);
  }

  setActiveTab(tab: 'upcoming' | 'past'): void {
    this.activeTab = tab;
    this.loading = true;
       setTimeout(() => {
      this.filterAppointments();
      this.loading = false;  // hide loader after data ready
    }, 1000);
  }

  filterAppointments(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredUpcomingAppointments = this.upcomingAppointments.filter(app => 
      app.service.listValue.toLowerCase().includes(term) || app.artist.listValue.toLowerCase().includes(term)
    );
    this.filteredPastAppointments = this.pastAppointments.filter(app => 
      app.service.toLowerCase().includes(term) || app.artist.toLowerCase().includes(term)
    );
  }

  rescheduleAppointment(appointment: any, index: number) {
    const modalRef = this.modalService.open(BookingModalComponent, { centered: true, size: 'lg' });

    // Pass the existing appointment data to the modal for pre-filling the form
    modalRef.componentInstance.selectedService = appointment.service;
    modalRef.componentInstance.initialBookingData = {
        artist: appointment.artist,
        date: new Date(appointment.date),
        time: appointment.time
    };
    modalRef.componentInstance.therapists = this.therapists;

    // Handle the updated booking from the modal
    modalRef.componentInstance.bookingSubmitted.subscribe((updatedBooking: any) => {
      // Create the updated appointment object
      const updatedAppointment = {
        ...appointment, // Keep the original ID and any other properties
        date: DateTimeHelper.getDate(updatedBooking.date),
        time: updatedBooking.time,
        artist: updatedBooking.artist,
        service: updatedBooking.service
      };

      // Update the appointment in the original array
      this.upcomingAppointments[index] = updatedAppointment;

      // Re-filter the list to reflect the change
      this.filterAppointments();
      
      modalRef.close();
      Swal.fire('Rescheduled!', 'Your appointment has been successfully rescheduled.', 'success');
    });

    modalRef.componentInstance.modalClosed.subscribe(() => {
      modalRef.dismiss();
    });
  }

  // New function to open the rating modal
  openRatingModal(appointment: any): void {
    const modalRef = this.modalService.open(RatingModalComponent, {
      centered: true,
      size: 'md',
      windowClass: 'rating-modal'
    });

    // Pass data to the modal
    modalRef.componentInstance.serviceName = appointment.service;
    modalRef.componentInstance.initialRating = appointment.rating;
    modalRef.componentInstance.initialComment = appointment.comment;

    // Listen for the rating submission
    modalRef.componentInstance.ratingSubmitted.subscribe((result: { rating: number, comment: string }) => {
      // Find the appointment and update its rating
      const foundAppointment = this.pastAppointments.find(app => app.id === appointment.id);
      if (foundAppointment) {
        foundAppointment.rating = result.rating;
        foundAppointment.comment = result.comment;
        this.filterAppointments(); // Refresh the list to show the new rating
      }
      Swal.fire('Thank you!', 'Your rating has been submitted.', 'success');
    });
  }

  // Helper function to get star classes for display
  getStarClass(rating: number, star: number): string {
    if (rating >= star) {
      return 'fa-star'; // Full star
    } else if (rating >= star - 0.5) {
      return 'fa-star-half-alt'; // Half star
    } else {
      return 'fa-star-o'; // Empty star
    }
  }

  confirmCancel(appointment: any): void {
    Swal.fire({
      title: 'Cancel Appointment?',
      html: `Are you sure you want to cancel your appointment for **${appointment.service.listValue}** with **${appointment.artist.listValue}**?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, cancel it!',
      cancelButtonText: 'No, keep it',
      showLoaderOnConfirm: true,
      input: 'textarea',
      inputLabel: 'Please provide a reason for cancellation (optional)',
      inputPlaceholder: 'e.g., I have a scheduling conflict...',
      preConfirm: (reason) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log(`Cancelling appointment ID ${appointment.id} with reason: ${reason}`);
            resolve(true);
          }, 1500);
        });
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Cancelled!',
          'Your appointment has been successfully cancelled.',
          'success'
        );
        this.upcomingAppointments = this.upcomingAppointments.filter(app => app.id !== appointment.id);
        this.filterAppointments();
      }
    });
  }
}