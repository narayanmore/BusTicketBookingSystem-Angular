import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedBusOperatorComponent } from './logged-bus-operator.component';

describe('LoggedBusOperatorComponent', () => {
  let component: LoggedBusOperatorComponent;
  let fixture: ComponentFixture<LoggedBusOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoggedBusOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggedBusOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

export { LoggedBusOperatorComponent };
