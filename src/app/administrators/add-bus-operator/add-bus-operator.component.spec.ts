import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBusOperatorComponent } from './add-bus-operator.component';

describe('AddBusOperatorComponent', () => {
  let component: AddBusOperatorComponent;
  let fixture: ComponentFixture<AddBusOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBusOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBusOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
