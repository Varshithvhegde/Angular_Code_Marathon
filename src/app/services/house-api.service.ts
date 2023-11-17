import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IRentalHouse } from '../data/house.model';

@Injectable({
  providedIn: 'root'
})
export class HouseApiService {
  url : string = "api/rentalHouses"
  constructor(private http : HttpClient) { }

  getHouses(): Observable<IRentalHouse[]>{
    return this.http.get<IRentalHouse[]>(this.url).pipe(
      tap((data) => console.log(data))
    );
  }


  getSingleHouse(id : number):Observable<IRentalHouse>{
    return this.http.get<IRentalHouse>(`${this.url}/${id}`).pipe(
      tap((data) => console.log(data))
    )
  }


  addNewHouse(house : IRentalHouse){
    return this.http.post(this.url,house).pipe(
      tap((data) => console.log(data))
    )
  }

  updateHouse(house : IRentalHouse){
    return this.http.put(`${this.url}/${house.id}`,house).pipe(
      tap((data) => console.log(data))
    )
  }

  deleteHouse(id : number ){
    return this.http.delete(`${this.url}/${id}`).pipe(
      tap((data) => console.log(data))
    )
  }
}
