import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HouseEditComponent } from './house-edit/house-edit.component';

@Injectable({
  providedIn: 'root'
})
export class HouseFormGuard implements CanDeactivate<HouseEditComponent> {
  canDeactivate(
    component: HouseEditComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!component.houseForm) {
        const cityName = component.house.address;
  
        return confirm(
          `Would you like to navigate away and lose all the changes to ${cityName}`
        );
      }
      return true;
  }
  
}
