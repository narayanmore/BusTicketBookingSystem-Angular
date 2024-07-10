import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BusOperator } from '../bus-operator.model'; // Ensure you have defined your BusOperator model

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  private apiUrl = 'http://localhost:8080/api/administrator'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  addBusOperator(busOperator: BusOperator): Observable<BusOperator> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<BusOperator>(`${this.apiUrl}/addBusOperators`, busOperator, { headers: headers })
      .pipe(
        catchError(error => {
          console.error('Error adding bus operator:', error);
          return throwError(error);
        })
      );
  }
}
