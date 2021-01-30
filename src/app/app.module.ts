import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { UserPanditComponent } from './user-pandit/user-pandit.component';
import { UserPhotographyComponent } from './user-photography/user-photography.component';
import { UserDJComponent } from './user-dj/user-dj.component';
import { UserDecoratorComponent } from './user-decorator/user-decorator.component';
import { UserCaterersComponent } from './user-caterers/user-caterers.component';

import { VenueDetailsComponent } from './user-service-details/venue-details/venue-details.component';
import { PhotoghrapherDetailsComponent } from './user-service-details/photoghrapher-details/photoghrapher-details.component';
import { PanditDetailsComponent } from './user-service-details/pandit-details/pandit-details.component';
import { DjDetailsComponent } from './user-service-details/dj-details/dj-details.component';
import { DecoratorDetailsComponent } from './user-service-details/decorator-details/decorator-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileUpdateComponent } from './user-profile-update/user-profile-update.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VendorRegistrationComponent } from './vendor-registration/vendor-registration.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { DjComponent } from './dj/dj.component';
import { CatererComponent } from './caterer/caterer.component';
import { VenuehomeComponent } from './vendorshome/venuehome/venuehome.component';
import { VendorNavbarComponent } from './vendor-navbar/vendor-navbar.component';
import { DecoratorhomeComponent } from './vendorshome/decoratorhome/decoratorhome.component';
import { DjhomeComponent } from './vendorshome/djhome/djhome.component';
import { PandithomeComponent } from './vendorshome/pandithome/pandithome.component';
import { PhotographerhomeComponent } from './vendorshome/photographerhome/photographerhome.component';
import { CatererhomerhomeComponent } from './vendorshome/catererhomerhome/catererhomerhome.component';
import { UsercartComponent } from './usercart/usercart.component';
import { CatererDetailsComponent } from './user-service-details/caterer-details/caterer-details.component';

import { AdminCustomerComponent } from './Admin/admin-customer/admin-customer.component';
import { AdminVendorComponent } from './Admin/admin-vendor/admin-vendor.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpassworddComponent } from './resetpasswordd/resetpasswordd.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

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
    
    UserPanditComponent,
    UserPhotographyComponent,
    UserDJComponent,
    UserDecoratorComponent,
    UserCaterersComponent,
   
    VenueDetailsComponent,
   
    PhotoghrapherDetailsComponent,
   
    PanditDetailsComponent,
   
    DjDetailsComponent,
   
    DecoratorDetailsComponent,
   
    UserProfileComponent,
   
    UserProfileUpdateComponent,
   
    NavbarComponent,
   
    VendorRegistrationComponent,
   
    DecoratorComponent,
   
    DjComponent,
   
    CatererComponent,
   
    VenuehomeComponent,
   
    VendorNavbarComponent,
   
    DecoratorhomeComponent,
   
    DjhomeComponent,
   
    PandithomeComponent,
   
    PhotographerhomeComponent,
   
    CatererhomerhomeComponent,
   
    UsercartComponent,
   
    CatererDetailsComponent,
   

   
    AdminCustomerComponent,
   
    AdminVendorComponent,
   
    AdminLoginComponent,
   
    AdminNavbarComponent,
   
    ForgotpasswordComponent,
   
    ResetpassworddComponent,
   
    FooterComponent,
   
    ContactUsComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
