import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BusSchedule } from '../schedule.model';

@Injectable({
  providedIn: 'root'
})
export class BusScheduleService {

  private baseUrl = 'http://localhost:8080/api'; // Replace with your backend base URL

  constructor(private http: HttpClient) { }

  createBusSchedule(busSchedule: BusSchedule): Observable<any> {
    const token = localStorage.getItem('authToken'); // Retrieve the token from localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); // Set the Authorization header

    return this.http.post<any>(`${this.baseUrl}/createBusSchedule`, busSchedule, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}
export { BusSchedule };

