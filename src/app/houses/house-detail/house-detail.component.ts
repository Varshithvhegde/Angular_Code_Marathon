import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRentalHouse } from 'src/app/data/house.model';
import { HouseApiService } from 'src/app/services/house-api.service';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent {

  id : number =0;

  house! :IRentalHouse;
  constructor(private houseService : HouseApiService , private route : ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe((params)=>{
      this.id = +params['id']
      console.log(this.id);
    })

    this.houseService.getSingleHouse(this.id).subscribe({
      next :  (data)=>{this.house = data;console.log(this.house,"My House")}
    })
  }
}
