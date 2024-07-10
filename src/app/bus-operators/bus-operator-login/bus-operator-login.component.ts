import { Component } from '@angular/core';
import { UserService } from '../../services/project.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './bus-operator-login.component.html',
  styleUrls: ['./bus-operator-login.component.css']
})
export class BusOperatorLoginComponent {

  loginModel = {
    email: '',
    password: ''
  };

  successMessage: string = '';
  errorMessage: string = '';
  router: any;

  constructor(private userService: UserService) { }

  onSubmit() {
    this.userService.loginBusOperator(this.loginModel.email, this.loginModel.password)
      .subscribe(token => {
        // Save the token (you might want to use a more secure storage mechanism)
        localStorage.setItem('authToken', token);
        this.successMessage = 'User logged in successfully!';
        this.errorMessage = '';
        this.router.navigate(['/home']); // Navigate to home or any desired route
      }, error => {
        this.errorMessage = 'Error logging in: ' + error.message;
        this.successMessage = '';
      });
  }
}
