import { Component, Input, forwardRef, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-time-picker',
  templateUrl: './custom-time-picker.component.html',
  styleUrls: ['./custom-time-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomTimePickerComponent),
      multi: true,
    },
  ],
})
export class CustomTimePickerComponent implements ControlValueAccessor, OnChanges {
  @Input() selectedDate: Date | null = null;
  @Input() startHour: number = 0;
  @Input() endHour: number = 23;
  @Input() intervalMinutes: number = 15;

  timeSlots: string[] = [];
  filteredSlots: string[] = [];
  searchTerm: string = '';

  value: string | null = null;

  onChange = (_: any) => {};
  onTouched = () => {};

  ngOnChanges() {
    this.generateTimeSlots();
  }

  private generateTimeSlots() {
    const slots: string[] = [];
    const date = this.selectedDate ? new Date(this.selectedDate) : new Date();

    const start = new Date(date);
    start.setHours(this.startHour, 0, 0, 0);

    const end = new Date(date);
    end.setHours(this.endHour, 59, 59, 999);

    let current = new Date(start);

    while (current <= end) {
      const formatted = current.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      slots.push(formatted);
      current = new Date(current.getTime() + this.intervalMinutes * 60000);
    }

    this.timeSlots = slots;
    this.filteredSlots = [...slots]; // initialize filtered slots
  }

filterSlots() {
  let term = this.searchTerm.trim().toLowerCase();

  if (!term) {
    this.filteredSlots = [...this.timeSlots];
    return;
  }

  // Normalize input
  term = term.replace(/\s/g, ''); // remove spaces

  // Handle cases like "9", "930", "2pm"
  this.filteredSlots = this.timeSlots.filter(slot => {
    const normalizedSlot = slot.toLowerCase().replace(/\s/g, '');
    return normalizedSlot.includes(term);
  });
}


  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  selectSlot(slot: string) {
    this.value = slot;
    this.onChange(slot);
    this.onTouched();
  }
}
