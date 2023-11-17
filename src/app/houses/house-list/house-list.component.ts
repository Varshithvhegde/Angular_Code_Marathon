import { IRentalHouse } from './../../data/house.model';
import { HouseApiService } from './../../services/house-api.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css'],
})
export class HouseListComponent {
  newHouses!:IRentalHouse[];
  allHouses!: IRentalHouse[];

  constructor(private houseService: HouseApiService) {}
  search : string ="";
  ngOnInit() {
    this.houseService.getHouses().subscribe({
      next: (data) => {
        console.log(JSON.stringify(data));
        this.allHouses= data;
        this.newHouses = data;
      },
    });
  }

  deleteHouse(id : number){
    this.houseService.deleteHouse(id).subscribe({
      next : (data)=>{
        console.log(data);
        this.allHouses =this.newHouses.filter((house)=>house.id!==id);
      }
    })
  }

  searchByAddress(){
    console.log("Hi")
    this.allHouses =  this.newHouses.filter((allHouses)=>allHouses.address.match(this.search))

  }
}
