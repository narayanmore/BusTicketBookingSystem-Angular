import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '../../services/project.service';

@Component({
  selector: 'app-bus-search',
  templateUrl: './bus-search.component.html',
  styleUrls: ['./bus-search.component.css']
})
export class BusSearchComponent implements OnInit {
  searchForm: FormGroup;
  searchResults$: Observable<any[]> | undefined; // Ensure Observable type is correctly defined

  constructor(private formBuilder: FormBuilder, private busService: UserService) {
    this.searchForm = this.formBuilder.group({
      origin: [''],
      destination: ['']
    });
  }

  ngOnInit(): void {
    // Initialize form controls and validation
  }

  searchBuses(): void {
    const { origin, destination } = this.searchForm.value;
    this.searchResults$ = this.busService.searchBuses(origin, destination);
  }
}
