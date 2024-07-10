import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdministratorService } from '../../services/administrator.service';
import { BusOperator } from '../../bus-operator.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-add-bus-operator',
  templateUrl: './add-bus-operator.component.html',
  styleUrls: ['./add-bus-operator.component.css']
})
export class AddBusOperatorComponent implements OnInit {

  addBusOperatorForm!: FormGroup;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private administratorService: AdministratorService
  ) { }

  ngOnInit(): void {
    this.addBusOperatorForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      // Add more fields as per your BusOperator model
    });
  }

  onSubmit(): void {
    if (this.addBusOperatorForm.invalid) {
      return;
    }

    this.isLoading = true;

    const busOperator: BusOperator = {
      name: this.addBusOperatorForm.value.name,
      email: this.addBusOperatorForm.value.email,
      phoneNumber: this.addBusOperatorForm.value.phoneNumber,
      password: this.addBusOperatorForm.value.password
      // Assign more form values to corresponding fields in BusOperator model
    };

    this.administratorService.addBusOperator(busOperator).subscribe(
      addedBusOperator => {
        console.log('Bus operator added successfully:', addedBusOperator);
        // Optionally, reset form, show success message, etc.
        this.isLoading = false;
      },
      error => {
        console.error('Error adding bus operator:', error);
        // Handle error (e.g., show error message to user)
        this.isLoading = false;
      }
    );
  }

}
