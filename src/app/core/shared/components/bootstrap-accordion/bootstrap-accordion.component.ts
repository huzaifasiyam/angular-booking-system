import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-bootstrap-accordion',
  templateUrl: './bootstrap-accordion.component.html',
  styleUrls: ['./bootstrap-accordion.component.scss']
})
export class BootstrapAccordionComponent {
  @Input() title: string;
  @Input() titleTemplate: TemplateRef<any> | null = null;

  @Input() alwaysOpen: boolean = true;

  isOpen = true; // default open

 toggle() {
  console.log(this.isOpen, 'Out')
  if (this.alwaysOpen && this.isOpen) {
    this.isOpen = false;
  } else {
    this.isOpen = true;
  }
}
}
