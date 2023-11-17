import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseListComponent } from './houses/house-list/house-list.component';
import { HouseAddComponent } from './houses/house-add/house-add.component';
import { HouseDetailComponent } from './houses/house-detail/house-detail.component';
import { HouseEditComponent } from './houses/house-edit/house-edit.component';
import { HouseFormGuard } from './houses/house-form.guard';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {path : 'houses',component : HouseListComponent,pathMatch:'full'},
  {path : 'houses/add',component :  HouseAddComponent , pathMatch : 'full'},
  {path :  'houses/:id',component :  HouseDetailComponent, pathMatch : 'full'},
  {path :  'houses/edit/:id',canDeactivate:[HouseFormGuard], component :  HouseEditComponent, pathMatch: 'full'},
  {path : 'home',component : HomeComponent,pathMatch:'full'},
  {path : '**', component : Error404Component,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
