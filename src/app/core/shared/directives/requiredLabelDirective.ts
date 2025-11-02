import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appRequiredLabel]'
})
export class RequiredLabelDirective implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const labelElement: HTMLLabelElement = this.el.nativeElement;
    const labelText: string = labelElement.innerText;
    const requiredMarker = document.createElement('span');
    requiredMarker.innerText = ' *';
    requiredMarker.style.color = 'red';
    labelElement.appendChild(requiredMarker);
  }

}
