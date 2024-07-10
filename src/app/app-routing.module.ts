import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { HomeComponent } from './home/home.component';
import { LoggedUserComponent } from './logged-user/logged-user.component';
import {LoggedBusOperatorComponent } from './logged-bus-operator/logged-bus-operator.component';

const routes: Routes = [
  { path: 'user/register', component: UserRegisterComponent },
  { path: 'user/login', component: UserLoginComponent },
  { path: 'user/profile-update', component: UserProfileUpdateComponent },
  { path: 'user/create-booking', component: CreateBookingComponent },
  { path: 'user/create-order', component: CancelBookingComponent },
  { path: 'user/booking-details', component: BookingDetailsComponent },
  { path: 'user/bus-search', component: BusSearchComponent },
  { path: 'bus-operator/login', component: BusOperatorLoginComponent },
  { path: 'bus-operator/create-schedule', component: BusScheduleComponent },
  { path: 'admin/register', component: AdminRegisterComponent },
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'admin/add-bus-operator', component: AddBusOperatorComponent },
  { path: 'logged-users', component: LoggedUserComponent },
  { path: 'logged-bus-operator', component: LoggedBusOperatorComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
