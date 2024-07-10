import { Component } from '@angular/core';
import { UserService } from '../../services/project.service';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  loginModel = {
    email: '',
    password: ''
  };

  successMessage: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) { }

  onSubmit() {
    this.userService.loginUser(this.loginModel.email, this.loginModel.password)
      .subscribe(token => {
        // Save the token (you might want to use a more secure storage mechanism)
        localStorage.setItem('authToken', token);
        this.successMessage = 'User logged in successfully!';
        this.errorMessage = '';
        this.router.navigate(['/logged-users']); // Navigate to create booking page
      }, error => {
        this.errorMessage = 'Error logging in: ' + error.message;
        this.successMessage = '';
      });
  }
}
