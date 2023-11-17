import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SharedModule } from './shared/shared.module';
import { HousesModule } from './houses/houses.module';
import { HttpClientModule } from '@angular/common/http';
import { HouseData } from './data/houses.data';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    HousesModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(HouseData)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
