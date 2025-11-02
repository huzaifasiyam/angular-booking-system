import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterSelectionModalComponent } from './center-selection-modal.component';

describe('CenterSelectionModalComponent', () => {
  let component: CenterSelectionModalComponent;
  let fixture: ComponentFixture<CenterSelectionModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CenterSelectionModalComponent]
    });
    fixture = TestBed.createComponent(CenterSelectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
