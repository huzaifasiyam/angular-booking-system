import { Directive, ElementRef, HostListener, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appDecimal]',
})
export class DecimalDirective implements AfterViewInit {
  @Input() timeOut: number = 3000;

  constructor(private el: ElementRef<HTMLInputElement>) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.formatInitialValue();
    }, this.timeOut);
  }

  private formatInitialValue(): void {
    const input = this.el.nativeElement;
    const value = input.value;

    if (value) {
      const numericValue = parseFloat(value);
      input.value = isNaN(numericValue) ? '' : numericValue.toFixed(2);
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    const allowedKeys = [
      'Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete', 'Home', 'End',
    ];

    // Allow: navigation keys
    if (allowedKeys.includes(event.key)) {
      return;
    }

    // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
    if ((event.ctrlKey || event.metaKey) &&
      ['a', 'c', 'v', 'x'].includes(event.key.toLowerCase())) {
      return;
    }

    // Allow: numbers
    if (/^[0-9]$/.test(event.key)) {
      return;
    }

    // Allow: single dot
    if (event.key === '.') {
      if (this.el.nativeElement.value.includes('.')) {
        event.preventDefault();
      }
      return;
    }

    // Otherwise prevent
    event.preventDefault();
  }

  @HostListener('blur')
  onBlur(): void {
    const input = this.el.nativeElement;
    let value = input.value;

    value = value.replace(/[^0-9.]/g, '');

    const parts = value.split('.');
    if (parts.length > 2) {
      value = parts[0] + '.' + parts.slice(1).join('');
    }

    if (parts[1]) {
      parts[1] = parts[1].substring(0, 2);
      value = parts.join('.');
    }

    if (value) {
      const numericValue = parseFloat(value);
      input.value = isNaN(numericValue) ? '' : numericValue.toFixed(2);
    } else {
      input.value = '';
    }
  }
}
