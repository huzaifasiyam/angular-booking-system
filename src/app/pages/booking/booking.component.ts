import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { DateTimeHelper } from 'src/app/core/helpers/date-time.helper';
import { CommonData } from 'src/app/core/models/common-data';
import { AuthService } from 'src/app/core/service/auth.service';
import { Router } from '@angular/router';
import { BookingModalComponent } from '../modals/booking-modal/booking-modal.component';
import { LoaderService } from 'src/app/core/service/loader.service'; // Import the new service

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  // Add a new boolean to track if categories are loading
  isCategoriesLoading = true;
  isServicesLoading = false;

  categories = [
    {
      listId: 1,
      listValue: 'Hair',
      icon: 'fa fa-cut',
      subCategories: [
        { listId: 101, listValue: 'Hair Styling' },
        { listId: 102, listValue: 'Hair Treatment' },
      ] as CommonData[],
    },
    {
      listId: 2,
      listValue: 'Skin',
      icon: 'fa fa-user-circle',
      subCategories: [
        { listId: 201, listValue: 'Facials' },
        { listId: 202, listValue: 'Waxing' },
      ] as CommonData[],
    },
    {
      listId: 3,
      listValue: 'Massage',
      icon: 'fa fa-spa',
      subCategories: [{ listId: 301, listValue: 'Body Massage' }] as CommonData[],
    },
    // New categories
    {
      listId: 4,
      listValue: 'Nails',
      icon: 'fa fa-hand-sparkles',
      subCategories: [
        { listId: 401, listValue: 'Manicure' },
        { listId: 402, listValue: 'Pedicure' },
      ] as CommonData[],
    },
    {
      listId: 5,
      listValue: 'Makeup',
      icon: 'fa fa-brush',
      subCategories: [
        { listId: 501, listValue: 'Bridal Makeup' },
        { listId: 502, listValue: 'Evening Makeup' },
      ] as CommonData[],
    },
    {
      listId: 6,
      listValue: 'Spa',
      icon: 'fa fa-water',
      subCategories: [
        { listId: 601, listValue: 'Body Wraps' },
        { listId: 602, listValue: 'Hydrotherapy' },
      ] as CommonData[],
    },
    {
      listId: 7,
      listValue: 'Tanning',
      icon: 'fa fa-sun',
      subCategories: [{ listId: 701, listValue: 'Sunless Tanning' }] as CommonData[],
    },
    {
      listId: 8,
      listValue: 'Aesthetics',
      icon: 'fa fa-syringe',
      subCategories: [
        { listId: 801, listValue: 'Aesthetic Services' },
      ] as CommonData[],
    },
  ];

  therapists = [
    { listId: 1, listValue: 'Jane Doe', genderId: 1},
    { listId: 2, listValue: 'Lissie Smith', genderId: 2 },
    { listId: 3, listValue: 'Alice Johnson', genderId: 1 },
    { listId: 4, listValue: 'Jessy Williams', genderId: 2 },
  ];

  timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM'];

  expandedCategory: any = null;
  selectedSubCategory: CommonData | null = null;
  servicesMap: { [subCategoryId: number]: any[] } = {};

  selectedService: any;
  cart: any[] = [];
  subtotalAmount = 0;
  taxPercentage = 18;
  taxAmount = 0;
  totalAmount = 0;

  bookingToEdit: any | null = null;
  editingItemIndex: number | null = null;

  constructor(
    private modalService: NgbModal,
    private authService: AuthService,
    private router: Router,
    private loaderService: LoaderService // Inject the loader service
  ) {}

  ngOnInit() {
    // Simulate API call for categories
    this.loaderService.show();
    setTimeout(() => {
      this.isCategoriesLoading = false;
      this.loaderService.hide();
    }, 1500); // Simulate a 1.5-second load time
  }

  toggleCategory(category: any) {
    this.expandedCategory = this.expandedCategory?.listId === category.listId ? null : category;
  }

  selectSubCategory(subCategory: CommonData) {
    this.isServicesLoading = true;
    this.selectedSubCategory = subCategory;

    // Simulate API call for services
    setTimeout(() => {
      if (!this.servicesMap[subCategory.listId]) {
        this.servicesMap[subCategory.listId] = this.loadServices(subCategory.listId);
      }
      this.isServicesLoading = false;
      const servicesSection = document.querySelector('#service-section');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 1000); // Simulate a 1-second load time
  }

  loadServices(subCategoryId: number) {
    switch (subCategoryId) {
      case 101:
        return [
          { listId: 1, listValue: 'Haircut', price: 30, duration: 45, description: 'Classic haircut and styling.' },
          { listId: 2, listValue: 'Hair Coloring', price: 90, duration: 120, description: 'Professional hair coloring.' },
        ];
      case 102:
        return [
          { listId: 10, listValue: 'Keratin Treatment', price: 150, duration: 180, description: 'Smooth and straighten hair.' },
        ];
      case 201:
        return [
          { listId: 3, listValue: 'Facial', price: 75, duration: 60, description: 'Rejuvenating facial treatments.' },
        ];
      case 202:
        return [
          { listId: 4, listValue: 'Waxing', price: 40, duration: 30, description: 'Smooth and pain-free waxing.' },
        ];
      case 301:
        return [
          { listId: 5, listValue: 'Swedish Massage', price: 80, duration: 60, description: 'Relaxing full-body massage.' },
          { listId: 6, listValue: 'Deep Tissue', price: 95, duration: 75, description: 'Therapeutic deep tissue work.' },
        ];
      case 401:
        return [
          { listId: 11, listValue: 'Classic Manicure', price: 25, duration: 30, description: 'Essential nail care and polish.' },
          { listId: 12, listValue: 'Gel Manicure', price: 45, duration: 45, description: 'Long-lasting gel polish application.' },
        ];
      case 402:
        return [
          { listId: 13, listValue: 'Classic Pedicure', price: 40, duration: 45, description: 'Foot soak, exfoliation, and nail care.' },
        ];
      case 501:
        return [
          { listId: 14, listValue: 'Bridal Makeup', price: 200, duration: 120, description: 'Full bridal makeup and styling.' },
        ];
      case 502:
        return [
          { listId: 15, listValue: 'Evening Makeup', price: 85, duration: 60, description: 'Perfect for special occasions.' },
        ];
      case 601:
        return [
          { listId: 16, listValue: 'Algae Body Wrap', price: 110, duration: 90, description: 'Detoxifying and nourishing body wrap.' },
          { listId: 17, listValue: 'Mud Body Wrap', price: 100, duration: 90, description: 'Mineral-rich mud wrap for skin health.' },
        ];
      case 602:
        return [
          { listId: 18, listValue: 'Whirlpool Bath', price: 60, duration: 30, description: 'Relaxing hydrotherapy session.' },
        ];
      case 701:
        return [
          { listId: 19, listValue: 'Spray Tan', price: 50, duration: 30, description: 'Quick and even sunless tan application.' },
        ];
      case 801:
        // Category with 8-9 services
        return [
          { listId: 20, listValue: 'Botox Injections', price: 300, duration: 30, description: 'Reduces fine lines and wrinkles.' },
          { listId: 21, listValue: 'Dermal Fillers', price: 500, duration: 45, description: 'Adds volume and smooths skin.' },
          { listId: 22, listValue: 'Microdermabrasion', price: 120, duration: 60, description: 'Exfoliates to reveal smoother skin.' },
          { listId: 23, listValue: 'Chemical Peel', price: 150, duration: 45, description: 'Renews skin for a brighter complexion.' },
          { listId: 24, listValue: 'Microneedling', price: 250, duration: 60, description: 'Stimulates collagen production.' },
          { listId: 25, listValue: 'Laser Hair Removal', price: 180, duration: 30, description: 'Permanent hair reduction.' },
          { listId: 26, listValue: 'IPL Photofacial', price: 200, duration: 45, description: 'Treats sun damage and pigmentation.' },
          { listId: 27, listValue: 'CoolSculpting', price: 800, duration: 60, description: 'Non-surgical fat reduction.' },
        ];
      default:
        return [];
    }
  }

  openBookingModal(service: any, item?: any, index?: number) {

     const offcanvasEl = document.getElementById('cartOffcanvas');

  if (offcanvasEl?.classList.contains('show')) {
    // Use Bootstrap's own event to hide it properly
    offcanvasEl.classList.remove('show');
    const backdrop = document.querySelector('.offcanvas-backdrop');
    if (backdrop) backdrop.remove();

    // Ensure body scroll is restored
    document.body.classList.remove('offcanvas-backdrop', 'modal-open');
    document.body.style.overflow = ''; // important
  }

    this.selectedService = service;
    this.bookingToEdit = item || null;
    this.editingItemIndex = index !== undefined ? index : null;

    const modalRef = this.modalService.open(BookingModalComponent, { centered: true, size: 'lg' });
    modalRef.componentInstance.selectedService = this.selectedService;
    modalRef.componentInstance.initialBookingData = this.bookingToEdit;
    modalRef.componentInstance.therapists = this.therapists;

    modalRef.componentInstance.bookingSubmitted.subscribe((bookingData: any) => {
      this.handleBookingSubmission(bookingData);
      modalRef.close();
    });

    modalRef.componentInstance.modalClosed.subscribe(() => {
      modalRef.dismiss();
    });

    // Ensure scroll is restored after modal closes
  modalRef.result.finally(() => {
    document.body.style.overflow = ''; // remove any scroll lock
  });
  }

  handleBookingSubmission(bookingData: any) {
    const { artist, date, time } = bookingData;
    const formattedDate = DateTimeHelper.getDate(date);
    const newBooking = {
      service: this.selectedService,
      artist,
      date: formattedDate,
      time,
    };

    if (this.editingItemIndex !== null) {
      this.cart[this.editingItemIndex] = newBooking;
      this.editingItemIndex = null;
    } else {
      this.cart.push(newBooking);
    }
    this.calculateTotal();
    this.selectedService = null;
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
    this.calculateTotal();
  }

  calculateTotal() {
    this.subtotalAmount = this.cart.reduce(
      (sum, item) => sum + item.service.price,
      0
    );
    this.taxAmount = this.subtotalAmount * (this.taxPercentage / 100);
    this.totalAmount = this.subtotalAmount + this.taxAmount;
  }

  confirmBooking() {
    if (this.cart.length === 0) {
      Swal.fire('Error', 'Your cart is empty.', 'error');
      return;
    }

    const user = this.authService.getUser();
    if (!user) {
      Swal.fire({
        title: 'Login Required',
        text: 'You need to login before confirming your booking.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Login',
        cancelButtonText: 'Cancel',
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/pages/auth/login']);
        }
      });
      return;
    }

    Swal.fire({
      title: 'Booking Confirmed!',
      html: `Your total booking amount is <strong>$${this.totalAmount.toFixed(2)}</strong>.`,
      icon: 'success',
      confirmButtonText: 'OK',
    });

    this.cart = [];
    this.calculateTotal();
  }
}