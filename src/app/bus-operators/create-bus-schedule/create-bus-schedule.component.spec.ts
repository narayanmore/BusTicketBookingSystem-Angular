import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBusScheduleComponent } from './create-bus-schedule.component';

describe('CreateBusScheduleComponent', () => {
  let component: CreateBusScheduleComponent;
  let fixture: ComponentFixture<CreateBusScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateBusScheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBusScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
