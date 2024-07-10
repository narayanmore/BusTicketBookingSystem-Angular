import { Component } from '@angular/core';
import { UserService } from '../../services/project.service';
import { Administrator } from '../../adminitrator.model';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrl: './admin-register.component.css'
})
export class AdminRegisterComponent {
  administrator: Administrator = {
    name: '',
    email: '',
    password: ''
  };

  successMessage: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService) { }

  onSubmit() {
    this.userService.registerAdministrator(this.administrator).subscribe(
      response => {
        console.log('Administrator registered successfully', response);
        this.successMessage = 'Administrator registered successfully!';
        this.errorMessage = '';
      },
      error => {
        console.error('Error registering administrator', error);
        this.errorMessage = 'Error registering administrator: ' + error.message;
        this.successMessage = '';
      }
    );
  }

}
