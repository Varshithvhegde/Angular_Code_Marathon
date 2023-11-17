import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseAddComponent } from './house-add/house-add.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { HouseEditComponent } from './house-edit/house-edit.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HouseListComponent,
    HouseAddComponent,
    HouseDetailComponent,
    HouseEditComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports : [
    HouseListComponent,
    HouseAddComponent,
    HouseDetailComponent,
    HouseEditComponent
  ]
})
export class HousesModule { }
