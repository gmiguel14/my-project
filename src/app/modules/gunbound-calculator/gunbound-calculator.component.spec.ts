import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunboundCalculatorComponent } from './gunbound-calculator.component';

describe('GunboundCalculatorComponent', () => {
  let component: GunboundCalculatorComponent;
  let fixture: ComponentFixture<GunboundCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GunboundCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GunboundCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
