import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonData } from 'src/app/core/models/common-data';

@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrls: ['./booking-modal.component.scss'],
})
export class BookingModalComponent implements OnInit, OnChanges {
  @Input() selectedService: any;
  @Input() initialBookingData: any | null = null;
  @Input() therapists: any[] = [];

  @Output() bookingSubmitted = new EventEmitter<any>();
  @Output() modalClosed = new EventEmitter<void>();

  bookingForm: FormGroup;
  isEditing: boolean = false;

  protected flatPickerOptions: any = {
    inline: window.innerWidth > 767,
    minDate: 'today',
    disableMobile: true,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.bookingForm = this.fb.group({
      artist: [null, Validators.required],
      date: [null, Validators.required],
      time: [null, Validators.required],
    });
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['initialBookingData'] && changes['initialBookingData'].currentValue) {
      this.initializeForm();
    }
  }

  private initializeForm() {
    this.isEditing = !!this.initialBookingData;
    if (this.isEditing) {
      this.bookingForm.patchValue({
        artist: this.initialBookingData.artist,
        date: new Date(this.initialBookingData.date),
        time: this.initialBookingData.time,
      });
    } else {
      this.bookingForm.reset();
    }
  }

  submit() {
    if (this.bookingForm.valid) {
      this.bookingSubmitted.emit({
        ...this.bookingForm.value,
        service: this.selectedService,
      });
    } else {
      this.bookingForm.markAllAsTouched();
    }
  }

  close() {
    this.modalClosed.emit();
  }
}