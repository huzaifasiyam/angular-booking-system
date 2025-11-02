import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';

// Reusable Directives
import { FileDragNDropDirective } from './directives/FileDragNDropDirective';
import { ValidationFieldsDirective } from './directives/ValidationFieldsDirective';
import { RequiredLabelDirective } from './directives/requiredLabelDirective';
import { OnlyNumericDirective } from './directives/only-numeric.directive';
import { DecimalDirective } from './directives/decimal.directive';
import { RestrictInputDirective } from './directives/restrict-input.directive';
import { PercentageDirective } from './directives/percentage.directive';
import { TwoDigitDecimaNumberDirective } from './directives/two-digit-decima-number.directive';

// Reusable Pipes
import { TruncatePipe } from './pipes/truncate.pipe';

// Reusable Components
import { CustomTimePickerComponent } from './components/custom-time-picker/custom-time-picker.component';
import { PasswordToggleComponent } from './components/password-toggle/password-toggle.component';
import { MobileInputComponent } from './components/mobile-input/mobile-input.component';
import { BootstrapAccordionComponent } from './components/bootstrap-accordion/bootstrap-accordion.component';
import { PasswordStrengthComponent } from './components/password-strength/password-strength.component';
import { TranslateModule } from '@ngx-translate/core';

const REUSABLE_COMPONENTS = [
  TruncatePipe,
  CustomTimePickerComponent,
  PasswordToggleComponent,
  MobileInputComponent,
  BootstrapAccordionComponent,
  PasswordStrengthComponent
];

const REUSABLE_DIRECTIVES = [
  FileDragNDropDirective,
  ValidationFieldsDirective,
  RequiredLabelDirective,
  OnlyNumericDirective,
  DecimalDirective,
  RestrictInputDirective,
  PercentageDirective,
  TwoDigitDecimaNumberDirective,
];

@NgModule({
  declarations: [
    ...REUSABLE_COMPONENTS,
    ...REUSABLE_DIRECTIVES,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    ...REUSABLE_COMPONENTS,
    ...REUSABLE_DIRECTIVES,
  ],
})
export class SharedModule { }