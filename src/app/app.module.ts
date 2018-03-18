import { BrowserModule } from  '@angular/platform-browser';
import { NgModule } from  '@angular/core';
import {HolidayService} from './services/data.service';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    HomeComponent,
    NavbarComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [HolidayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
