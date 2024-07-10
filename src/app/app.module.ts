import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import both FormsModule and ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserRegisterComponent } from './users/user-register/user-register.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserProfileUpdateComponent } from './users/user-profile-update/user-profile-update.component';
import { CreateBookingComponent } from './users/create-booking/create-booking.component';
import { CancelBookingComponent } from './users/cancel-booking/cancel-booking.component';
import { BookingDetailsComponent } from './users/booking-details/booking-details.component';
import { BusSearchComponent } from './users/bus-search/bus-search.component';

import { BusOperatorLoginComponent } from './bus-operators/bus-operator-login/bus-operator-login.component';
import { BusScheduleComponent } from './bus-operators/create-bus-schedule/create-bus-schedule.component';

import { AdminRegisterComponent } from './administrators/admin-register/admin-register.component';
import { AdminLoginComponent } from './administrators/admin-login/admin-login.component';
import { AddBusOperatorComponent } from './administrators/add-bus-operator/add-bus-operator.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoggedUserComponent } from './logged-user/logged-user.component';
import { LoggedBusOperatorComponent } from './logged-bus-operator/logged-bus-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserLoginComponent,
    UserProfileUpdateComponent,
    CreateBookingComponent,
    CancelBookingComponent,
    BookingDetailsComponent,
    BusSearchComponent,
    BusOperatorLoginComponent,
    BusScheduleComponent,
    AdminRegisterComponent,
    AdminLoginComponent,
    AddBusOperatorComponent,
    NavbarComponent,
    HomeComponent,
    LoggedUserComponent,
    LoggedBusOperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Import FormsModule for template-driven forms
    ReactiveFormsModule, // Import ReactiveFormsModule for reactive forms
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
