// userService.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../user.model'; // Define this based on your backend User entity
import {Booking } from '../booking.model';
import { Administrator } from '../adminitrator.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/auth'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/signup`, user);
  }

  loginUser(email: string, password: string): Observable<string> {
    const loginData = { email, password };
    return this.http.post<any>(`${this.baseUrl}/login`, loginData)
      .pipe(
        map(response => {
          // Assuming the response contains a token
          if (response && response.token) {
            return response.token;
          } else {
            throw new Error('Token not found in the response');
          }
        })
      );
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/update`, user);
  }

  deleteUser(email: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteUser?email=${email}`);
  }

  createBooking(booking: Booking): Observable<any> {
    
    const token = localStorage.getItem('authToken'); // Retrieve the token from localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); // Set the Authorization header

    // return this.http.post<any>(`${this.baseUrl}/bookings`, bookingData, { headers }); // Include headers in the request
    // return this.http.post<any>(`http://localhost:8080/api/bookings/createBooking`, bookingData, { headers });
    return this.http.post<any>(`${this.baseUrl}/createBooking`, booking) 
    .pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError(error);
  }

  

  searchBuses(origin: string, destination: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/users/busSearch?origin=${origin}&destination=${destination}`);
  }

  registerAdministrator(administrator: Administrator): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(`http://localhost:8080/api/administrator/registerAdmin`, administrator, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  loginBusOperator(email: string, password: string): Observable<string> {
    const loginData = { email, password };
    return this.http.post<any>(`http://localhost:8080/api/busOperator/loginBusOperator`, loginData)
      .pipe(
        map(response => {
          // Assuming the response contains a token
          if (response && response.token) {
            return response.token;
          } else {
            throw new Error('Token not found in the response');
          }
        })
      );
  }


}
