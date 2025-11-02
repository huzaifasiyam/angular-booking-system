import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-password-toggle',
  template: `
    <button
      type="button"
      class="btn btn-outline-secondary"
      (click)="togglePassword()"
    >
      <i class="fa" [ngClass]="show ? 'fa-eye-slash' : 'fa-eye'"></i>
    </button>
  `,
  styleUrls: ['./password-toggle.component.scss']
})
export class PasswordToggleComponent {
  @Input() show: boolean = false;
  @Output() toggle = new EventEmitter<boolean>();

  togglePassword(): void {
    this.show = !this.show;
    this.toggle.emit(this.show);
  }
}