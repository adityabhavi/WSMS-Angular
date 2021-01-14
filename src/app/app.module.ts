import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { VenueComponent } from './venue/venue.component';
import { PanditComponent } from './pandit/pandit.component';
import { PhotographyComponent } from './photography/photography.component';
import { IndexComponent } from './index/index.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserVenueComponent } from './user-venue/user-venue.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { VenueMumbaiComponent } from './VenueLocations/venue-mumbai/venue-mumbai.component';
import { UserPanditComponent } from './user-pandit/user-pandit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    VenueComponent,
    PanditComponent,
    PhotographyComponent,
    IndexComponent,
    PagenotfoundComponent,
    UserHomeComponent,
    UserVenueComponent,
    UserNavbarComponent,
    VenueMumbaiComponent,
    UserPanditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
