import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusOperatorLoginComponent } from './bus-operator-login.component';

describe('BusOperatorLoginComponent', () => {
  let component: BusOperatorLoginComponent;
  let fixture: ComponentFixture<BusOperatorLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusOperatorLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusOperatorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
