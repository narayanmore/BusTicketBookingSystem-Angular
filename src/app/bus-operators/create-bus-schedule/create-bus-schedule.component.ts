import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusSchedule, BusScheduleService } from '../../services/bus.service';

@Component({
  selector: 'app-bus-schedule',
  templateUrl: './create-bus-schedule.component.html',
  styleUrls: ['./create-bus-schedule.component.css']
})
export class BusScheduleComponent implements OnInit {
  busScheduleForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private busScheduleService: BusScheduleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.busScheduleForm = this.formBuilder.group({
      busName: ['', Validators.required],
      busNumber: ['', Validators.required],
      busType: ['', Validators.required],
      numofSeats: ['', Validators.required],
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      timings: ['', Validators.required],
      fare: ['', Validators.required]
    });
  }

  // Convenience getter for easy access to form fields
  get f() { return this.busScheduleForm.controls; }

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.busScheduleForm.invalid) {
      return;
    }

    // Prepare BusSchedule object from form data
    const busSchedule: BusSchedule = this.busScheduleForm.value;

    // Call service method to create bus schedule
    this.busScheduleService.createBusSchedule(busSchedule).subscribe(
      (response) => {
        // Handle successful creation, maybe show a success message
        console.log('Bus schedule created successfully:', response);

        // Redirect to another route (e.g., list of schedules)
        this.router.navigate(['/schedules']);
      },
      (error) => {
        // Handle error, show error message or log it
        console.error('Error creating bus schedule:', error);
        // Optionally, handle error in UI (e.g., show error message)
      }
    );
  }
}
