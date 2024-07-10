import { Component } from '@angular/core';
import { UserService } from '../../services/project.service';
import { User } from '../../user.model'; // Adjust based on your model definition

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  userModel: User = {
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: ''
  };

  successMessage: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService) { }

  onSubmit() {
    this.userService.registerUser(this.userModel)
      .subscribe(response => {
        this.successMessage = 'User registered successfully!';
        this.errorMessage = '';
      }, error => {
        this.errorMessage = 'Error registering user: ' + error.message;
        this.successMessage = '';
      });
  }
}
