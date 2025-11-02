import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appValidationFields]'
})
export class ValidationFieldsDirective {


    @Input() validationFieldsType: string;

    constructor(private el: ElementRef) { }
  
    
  @HostListener('keydown', ['$event']) onKeyDown(event) {
    const e = <KeyboardEvent>event;
    const input = this.el.nativeElement.value;
    switch (this.validationFieldsType) {
      case 'alphanumericWithSpace':
        if (!this.isInputValid(event, /[a-zA-Z0-9\s]/)) {
          e.preventDefault();
        }
        break;
      case 'alphanumericWithoutSpace':
        if (!this.isInputValid(event, /[a-zA-Z0-9]/)) {
          e.preventDefault();
        }
        break;
      case 'floatNumber':
        if (!this.isFloatNumberInputValid(event, input)) {
          e.preventDefault();
        }
        break;
      case 'number':
        if (!this.isInputValid(event, /\d/)) {
          e.preventDefault();
        }
        break;
      case 'alphabet':
        if (!this.isInputValid(event, /[a-zA-Z]/)) {
          e.preventDefault();
        }
        break;
      default:
        break;
    }
  }

  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    const clipboardData = event.clipboardData.getData('text/plain');
    const input = this.el.nativeElement.value + clipboardData;
    switch (this.validationFieldsType) {
      case 'alphanumericWithSpace':
        if (!this.isInputValid(null, /[a-zA-Z0-9\s]/, clipboardData)) {
          event.preventDefault();
        }
        break;
      case 'alphanumericWithoutSpace':
        if (!this.isInputValid(null, /[a-zA-Z0-9]/, clipboardData)) {
          event.preventDefault();
        }
        break;
      case 'floatNumber':
        if (!this.isFloatNumberInputValid(null, input)) {
          event.preventDefault();
        }
        break;
      case 'number':
        if (!this.isInputValid(null, /\d/, clipboardData)) {
          event.preventDefault();
        }
        break;
      case 'alphabet':
        if (!this.isInputValid(null, /[a-zA-Z]/, clipboardData)) {
          event.preventDefault();
        }
        break;
      default:
        break;
    }
  }

  isInputValid(event: KeyboardEvent, regex: RegExp, value?: string): boolean {
  const navigationKeys = [
    'Backspace', 'Delete', 'Tab',
    'ArrowLeft', 'ArrowRight', 'Home', 'End'
  ];

  if (event) {
    if (navigationKeys.includes(event.key)) {
      return true;
    }
    return regex.test(event.key);
  } else if (value) {
    return regex.test(value);
  }
  return false;
}


 isFloatNumberInputValid(event: KeyboardEvent, value?: string): boolean {
  const navigationKeys = [
    'Backspace', 'Delete', 'Tab',
    'ArrowLeft', 'ArrowRight', 'Home', 'End'
  ];

  if (event) {
    if (navigationKeys.includes(event.key)) {
      return true;
    }
    return /^\d*\.?\d*$/.test(this.el.nativeElement.value + event.key);
  } else if (value) {
    return /^\d*\.?\d*$/.test(value);
  }
  return false;
}
}
