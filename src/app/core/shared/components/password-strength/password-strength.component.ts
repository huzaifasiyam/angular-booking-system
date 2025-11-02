import { Component, EventEmitter, Input, OnChanges, SimpleChange, Output } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss']
})
export class PasswordStrengthComponent implements OnChanges {
  @Input() public passwordToCheck: string = '';
  @Output() passwordStrength = new EventEmitter<boolean>();

  bars: string[] = ['', '', '', ''];
  msg = '';
  level = 0;

  private colors = ['#dc3545', '#fd7e14', '#ffc107', '#28a745']; // danger, orange, warning, success

  private static checkStrength(p: string): number {
    let force = 0;
    const regex = /[$-/:-?{-~!"^_@`\[\]]/g;

    const lowerLetters = /[a-z]+/.test(p);
    const upperLetters = /[A-Z]+/.test(p);
    const numbers = /[0-9]+/.test(p);
    const symbols = regex.test(p);

    const flags = [lowerLetters, upperLetters, numbers, symbols];

    let passedMatches = 0;
    for (const flag of flags) {
      passedMatches += flag ? 1 : 0;
    }

    force += 2 * p.length + (p.length >= 10 ? 1 : 0);
    force += passedMatches * 10;

    force = p.length <= 6 ? Math.min(force, 10) : force;
    force = passedMatches === 1 ? Math.min(force, 10) : force;
    force = passedMatches === 2 ? Math.min(force, 20) : force;
    force = passedMatches === 3 ? Math.min(force, 30) : force;
    force = passedMatches === 4 ? Math.min(force, 40) : force;

    return force;
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    const password = changes['passwordToCheck']?.currentValue || '';
    this.bars = ['', '', '', ''];
    if (password) {
      const strength = PasswordStrengthComponent.checkStrength(password);
      const c = this.getColor(strength);
      this.level = c.idx;
      this.setBars(c.idx, c.col);

      this.passwordStrength.emit(strength === 40);

      switch (c.idx) {
        case 1:
          this.msg = 'Weak';
          break;
        case 2:
          this.msg = 'Fair';
          break;
        case 3:
          this.msg = 'Good';
          break;
        case 4:
          this.msg = 'Strong';
          break;
        default:
          this.msg = '';
      }
    } else {
      this.msg = '';
      this.level = 0;
    }
  }

  private getColor(s: number) {
    let idx = 0;
    if (s <= 10) idx = 0;
    else if (s <= 20) idx = 1;
    else if (s <= 30) idx = 2;
    else if (s <= 40) idx = 3;
    return {
      idx: idx + 1,
      col: this.colors[idx]
    };
  }

  private setBars(count: number, col: string) {
    for (let i = 0; i < count; i++) {
      this.bars[i] = col;
    }
  }
}
