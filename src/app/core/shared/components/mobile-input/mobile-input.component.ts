import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { getCountries, getCountryCallingCode } from 'libphonenumber-js';

// Define a type for the country data for better type safety
interface CountryData {
  code: string;
  dialCode: string;
  country: string;
}

@Component({
  selector: 'app-mobile-input',
  templateUrl: './mobile-input.component.html',
  styleUrls: ['./mobile-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MobileInputComponent),
      multi: true
    }
  ]
})
export class MobileInputComponent implements OnInit, ControlValueAccessor {
  @Input() label: string = 'Mobile Number';
  @Input() ngClass: any = '';

  countryCodes: CountryData[] = [];
  countryCode: string = '+91'; // default
  mobileNumber: string = '';

  private onChange: any = () => {};
  private onTouched: any = () => {};

  ngOnInit(): void {
    // Dynamically load country codes with country names for ng-select
    this.countryCodes = getCountries().map(c => ({
      code: c,
      dialCode: '+' + getCountryCallingCode(c),
      country: new Intl.DisplayNames(['en'], { type: 'region' }).of(c) as string
    }));
  }

  updateValue() {
    const combined = this.countryCode + this.mobileNumber;
    this.onChange(combined);
    this.onTouched();
  }

  writeValue(value: string): void {
    if (value) {
      const found = this.countryCodes.find(c => value.startsWith(c.dialCode));
      if (found) {
        this.countryCode = found.dialCode;
        this.mobileNumber = value.replace(found.dialCode, '');
      } else {
        this.mobileNumber = value;
      }
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}