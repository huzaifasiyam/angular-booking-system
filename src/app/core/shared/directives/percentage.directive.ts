import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appPercentageDirective]"
})
export class PercentageDirective {
  private regex: RegExp = /^\d{0,3}(\.\d{0,2})?$/g;
  private specialKeys: Array<string> = [
    "Backspace", "Tab", "End", "Home",
    "ArrowLeft", "ArrowRight", "Del", "Delete"
  ];

  constructor(private el: ElementRef) {}

  @HostListener("keydown", ["$event"])
  onKeyDown(event: KeyboardEvent) {
    if (this.specialKeys.includes(event.key)) {
      return;
    }

    const input = this.el.nativeElement;
    const currentValue: string = input.value;
    const selectionStart = input.selectionStart;
    const selectionEnd = input.selectionEnd;

    let next: string;
    if (selectionStart === 0 && selectionEnd === currentValue.length) {
      next = event.key;
    } else {
      next = [
        currentValue.slice(0, selectionStart),
        event.key,
        currentValue.slice(selectionEnd)
      ].join("");
    }

    // Do not allow input starting with '.'
    if (next.startsWith(".")) {
      event.preventDefault();
      return;
    }

    const beforeDecimal = next.split(".")[0];
    const afterDecimal = next.split(".")[1];

    // Prevent >100
    if (beforeDecimal) {
      const numValue = parseInt(beforeDecimal, 10);
      if (numValue > 100) {
        event.preventDefault();
        return;
      }
    }

    // Limit to 2 decimals
    if (afterDecimal && afterDecimal.length > 2) {
      event.preventDefault();
      return;
    }

    // ✅ Allow decimal if matches pattern
    if (!String(next).match(this.regex)) {
      event.preventDefault();
      return;
    }
  }

  // 🔧 Fix on blur for leading zeros
  @HostListener("blur")
  onBlur() {
    const input = this.el.nativeElement;
    let val = input.value;

    if (val) {
      if (val.startsWith("0") && !val.startsWith("0.") && val !== "0") {
        // Remove leading zeros, keep '0' or '0.x'
        val = parseFloat(val).toString();
      }

      if (val.startsWith(".")) {
        val = "0" + val; // Fix input like '.5' to '0.5'
      }

      // Ensure max is 100
      if (parseFloat(val) > 100) {
        val = "100";
      }

      input.value = val;
    }
  }
}
