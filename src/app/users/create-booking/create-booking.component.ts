// create-booking.component.ts

import { Component } from '@angular/core';
import { UserService } from '../../services/project.service';
import { Booking } from '../../booking.model'; // Ensure correct path to Booking interface

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent {

  bookingModel: Booking = {
    userId: 0,
    scheduleId: 0, // Initialize scheduleId as a number
    seatNumbers: '',
    bookingDate: '',
    totalFare: '',
    status: ''
  };

  successMessage: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService) { }

  onSubmit() {
    this.userService.createBooking(this.bookingModel)
      .subscribe(
        response => {
          this.successMessage = 'Booking created successfully!';
          this.errorMessage = '';
        },
        error => {
          console.error('Error creating booking:', error);
          this.errorMessage = 'Error creating booking: ' + (error.error?.message || error.message || 'Unknown Error');
          this.successMessage = '';
        }
      );
  }
}
