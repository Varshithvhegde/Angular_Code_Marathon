import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NgForm,
  NgModel,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IRentalHouse } from 'src/app/data/house.model';
import { HouseApiService } from 'src/app/services/house-api.service';

@Component({
  selector: 'app-house-add',
  templateUrl: './house-add.component.html',
  styleUrls: ['./house-add.component.css'],
})
export class HouseAddComponent {
  // houseForm! : FormGroup;
  house: IRentalHouse = {
    id: 0,
    address: '',
    numberOfRooms: 0,
    monthlyRent: 0,
    isOccupied: false,
  };

  constructor(private houseService: HouseApiService , private router : Router) {}
  ngOnInit() {}

  submitForm(form: NgForm) {
    if (form.valid) {
      this.houseService.addNewHouse(this.house).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/houses'])
        },
      });
    }
  }

  getValidationMessages(state: NgModel) {
    let name = state.path;
    let errors = state.errors;
    let messages: string[] = [];
    for (let error in errors) {
      switch (error) {
        case 'required':
          messages.push(`${name} is must required cannot be Empty`);
          break;

        case 'minlength':
          messages.push(
            `${name} must have atleast ${errors['minlength'].requiredLength} characters`
          );
          break;
        case 'pattern':
          messages.push(`The ${name} has illegal characters`);
          break;
      }
    }

    return messages;
  }
}
