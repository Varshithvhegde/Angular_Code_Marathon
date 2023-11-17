import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from '../material/material.module';
import { OccupiedStatusPipe } from './Pipes/occupied-status.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavigationComponent,
    OccupiedStatusPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    NavigationComponent,
    OccupiedStatusPipe
  ]
})
export class SharedModule { }
