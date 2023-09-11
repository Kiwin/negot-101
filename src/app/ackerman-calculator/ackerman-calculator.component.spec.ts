import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AckermanCalculatorComponent } from './ackerman-calculator.component';

describe('AckermanCalculatorComponent', () => {
  let component: AckermanCalculatorComponent;
  let fixture: ComponentFixture<AckermanCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AckermanCalculatorComponent]
    });
    fixture = TestBed.createComponent(AckermanCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
