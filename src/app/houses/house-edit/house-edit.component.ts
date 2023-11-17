import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IRentalHouse } from 'src/app/data/house.model';
import { HouseApiService } from 'src/app/services/house-api.service';

@Component({
  selector: 'app-house-edit',
  templateUrl: './house-edit.component.html',
  styleUrls: ['./house-edit.component.css'],
})
export class HouseEditComponent {
  houseForm!: FormGroup;

  house!: IRentalHouse;
  id: number = 0;

  constructor(
    private houseService: HouseApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.initForm();
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.houseService.getSingleHouse(this.id).subscribe({
      next: (data) => {
        this.house = data;
        console.log(data);
        this.houseForm.patchValue(this.house);
      },
    });
  }

  initForm() {
    this.houseForm = new FormGroup({
      address: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(3)])
      ),
      numberOfRooms: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.pattern('[0-9]+')])
      ),
      monthlyRent: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.pattern('[0-9]+')])
      ),

      isOccupied : new FormControl(
        '',
        Validators.required
      )
    });
  }

  onSubmit() {
    if (this.houseForm.invalid) {
      alert('Form Invalid');
    } else {
      var updatedHouse = this.house;
      if (updatedHouse) {
        updatedHouse.address = this.houseForm.controls['address'].value;
        updatedHouse.numberOfRooms =
          this.houseForm.controls['numberOfRooms'].value;
        updatedHouse.monthlyRent = this.houseForm.controls['monthlyRent'].value;
        updatedHouse.isOccupied = this.houseForm.controls['isOccupied'].value;

        this.houseService.updateHouse(updatedHouse).subscribe({
          next: (data) => {
            console.log(data);
            this.router.navigate(['/houses'])
          },
        });
      }
    }
  }
}
