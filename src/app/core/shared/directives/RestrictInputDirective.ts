import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
    selector: '[appRestrictInput]',
})
export class RestrictInputDirective {
    private regex = /^[-a-zA-Z0-9\s()+#*%?]*$/;

    constructor(private el: ElementRef) { }

    @HostListener('input', ['$event'])
    onInput(): void {
        const inputElement = this.el.nativeElement;
        const inputValue = inputElement.value;

        if (!this.regex.test(inputValue)) {
            inputElement.value = inputValue.slice(0, -1);
        }
    }

    @HostListener('keyup', ['$event']) onInputChange(event) {
        const char = String.fromCharCode(event.which);
        if (this.regex.test(char)) {
            return true;
        }

        event.preventDefault();
        return false;
    }
}
