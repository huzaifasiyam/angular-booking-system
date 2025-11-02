import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[onlyNumeric]',
})
export class OnlyNumericDirective {
  constructor(private _el: ElementRef<HTMLInputElement>) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    // Allow special keys: backspace, delete, tab, escape, enter, home, end, arrows
    const specialKeys: string[] = [
      'Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'Home', 'End',
      'ArrowLeft', 'ArrowRight'
    ];

    if (specialKeys.includes(e.key) ||
      (e.key === 'a' && (e.ctrlKey || e.metaKey)) || // Allow Ctrl+A or Cmd+A
      (e.key === 'c' && (e.ctrlKey || e.metaKey)) || // Allow Ctrl+C or Cmd+C
      (e.key === 'v' && (e.ctrlKey || e.metaKey)) || // Allow Ctrl+V or Cmd+V
      (e.key === 'x' && (e.ctrlKey || e.metaKey))) { // Allow Ctrl+X or Cmd+X
      return;
    }

    // Explicitly block the space key and check if the key is a digit
    const isNumber = /^\d$/.test(e.key);
    const isSpace = e.key === ' ';

    if (!isNumber || isSpace) {
      e.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(e: ClipboardEvent) {
    const pasteData = e.clipboardData?.getData('text');
    // The regex `^\d+$` checks if the entire string consists of one or more digits.
    // It will fail if the string contains spaces, periods, or other non-numeric characters.
    if (pasteData && !/^\d+$/.test(pasteData)) {
      e.preventDefault();
    }
  }
}