// src/app/administrators/admin-login/admin-login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    // Simulate successful login
    this.authService.login();
    this.router.navigate(['/home']); // Navigate to home or any desired route
  }
}
