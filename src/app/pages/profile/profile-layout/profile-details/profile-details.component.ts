import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonData } from 'src/app/core/models/common-data';
import { AuthService, User } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  profileForm!: FormGroup;
  currentUser!: User | null;
  genderOptions:CommonData[] = [
  { listId: 1, listValue: 'male' },
  { listId: 2, listValue: 'female' },
  { listId: 3, listValue: 'other' }
];

protected loading: boolean = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    // Get the current user from the AuthService
    this.currentUser = this.authService.getUser();
    
    // Simulate API delay (replace with your real API call)
  setTimeout(() => {
    this.initForm();
    this.loading = false;
  }, 1000);
  }

  private initForm() {
  this.profileForm = this.fb.group({
    personalInfo: this.fb.group({
      firstName: [this.currentUser?.firstName || '', Validators.required],
      middleName: [''],
      lastName: [this.currentUser?.lastName || '', Validators.required],
      gender: ['', Validators.required],
      mobileNumber: [
        this.currentUser?.mobileNumber || '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
      email: [
        { value: this.currentUser?.email || '', disabled: true },
        [Validators.required, Validators.email],
      ],
      phoneNumber: [''],
    }),
    addressDetails: this.fb.group({
      addressLine1: [''],
      addressLine2: [''],
      country: [''],
      city: [''],
      pincode: [''],
    }),
  });
}

  // Convenience getter for easy access to form controls
  get personalInfo() {
    return this.profileForm.get('personalInfo') as FormGroup;
  }

  get addressDetails() {
    return this.profileForm.get('addressDetails') as FormGroup;
  }
  
  // Method to check if a control is invalid and should show an error
  isInvalid(formGroup: FormGroup, controlName: string): boolean {
    const control = formGroup.get(controlName);
    return !!control?.invalid && (control?.dirty || control?.touched);
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log('Form Submitted!', this.profileForm.value);
      // Here you would typically call a service to save the data
      alert('Profile updated successfully!');
    } else {
      this.profileForm.markAllAsTouched(); // Mark all controls as touched to show validation errors
      alert('Please fix the validation errors.');
    }
  }
}