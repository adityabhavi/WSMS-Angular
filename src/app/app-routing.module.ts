import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminCustomerComponent } from './Admin/admin-customer/admin-customer.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';

import { AdminVendorComponent } from './Admin/admin-vendor/admin-vendor.component';
import { CatererComponent } from './caterer/caterer.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { DjComponent } from './dj/dj.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PanditComponent } from './pandit/pandit.component';
import { PhotographyComponent } from './photography/photography.component';
import { RegistrationComponent } from './registration/registration.component';
import { User } from './service/httpclient.service';
import { Venue } from './service/venue.service';
import { UserCaterersComponent } from './user-caterers/user-caterers.component';
import { UserDecoratorComponent } from './user-decorator/user-decorator.component';
import { UserDJComponent } from './user-dj/user-dj.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserPanditComponent } from './user-pandit/user-pandit.component';
import { UserPhotographyComponent } from './user-photography/user-photography.component';
import { UserProfileUpdateComponent } from './user-profile-update/user-profile-update.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CatererDetailsComponent } from './user-service-details/caterer-details/caterer-details.component';
import { DecoratorDetailsComponent } from './user-service-details/decorator-details/decorator-details.component';
import { DjDetailsComponent } from './user-service-details/dj-details/dj-details.component';
import { PanditDetailsComponent } from './user-service-details/pandit-details/pandit-details.component';
import { PhotoghrapherDetailsComponent } from './user-service-details/photoghrapher-details/photoghrapher-details.component';
import { VenueDetailsComponent } from './user-service-details/venue-details/venue-details.component';
import { UserVenueComponent } from './user-venue/user-venue.component';
import { UsercartComponent } from './usercart/usercart.component';
import { VendorNavbarComponent } from './vendor-navbar/vendor-navbar.component';
import { DecoratorhomeComponent } from './vendorshome/decoratorhome/decoratorhome.component';
import { DjhomeComponent } from './vendorshome/djhome/djhome.component';
import { PandithomeComponent } from './vendorshome/pandithome/pandithome.component';
import { PhotographerhomeComponent } from './vendorshome/photographerhome/photographerhome.component';
import { VenuehomeComponent } from './vendorshome/venuehome/venuehome.component';
import { VenueComponent } from './venue/venue.component';

const routes: Routes = [
  {path:'',component:IndexComponent, pathMatch: 'full' },
  { path: 'register', component: RegistrationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path:'venue', component: VenueComponent },
  {path:'pandit', component: PanditComponent },
  {path:'photography',component:PhotographyComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'decorator',component:DecoratorComponent},
  {path:'dj',component:DjComponent},
  {path:'caterer',component:CatererComponent},
  {path:'venuehome',component:VenuehomeComponent},
  {path:'vendornavbar',component:VendorNavbarComponent},
  {path:'decoratorhome',component:DecoratorhomeComponent},
  {path:'djhome',component:DjhomeComponent},
  {path:'pandithome',component:PandithomeComponent},
  {path:'photographerhome',component:PhotographerhomeComponent},
  {path:'catererhome',component:DecoratorhomeComponent},


  {path:'userhome',component:UserHomeComponent},
  {path:'uservenue',component:UserVenueComponent},
  {path:'userpandit', component:UserPanditComponent},
  {path:'userphotography',component:UserPhotographyComponent},
  {path:'userdecorator', component:UserDecoratorComponent},
  {path:'usercaterers', component:UserCaterersComponent},
  {path:'userdj', component:UserDJComponent},
  {path:'uservenuedetails',component:VenueDetailsComponent},
  {path:'userphotographerdetails',component:PhotoghrapherDetailsComponent},
  {path:'userpanditdetails',component:PanditDetailsComponent},
  {path:'userdjdetails',component:DjDetailsComponent},
  {path:'userdecoratordetails',component:DecoratorDetailsComponent},
  {path:'userprofile',component:UserProfileComponent},
  {path:'userprofileupdate',component:UserProfileUpdateComponent},
  {path:'usercart',component:UsercartComponent},
  {path:'usercatererdetails',component:CatererDetailsComponent},

  {path:'admincustomer',component:AdminCustomerComponent},
  {path:'adminvendor',component:AdminVendorComponent},
  {path:'adminnavbar',component:AdminNavbarComponent},
  {path:'adminlogin',component:AdminLoginComponent},
  
  {path:'error', component: PagenotfoundComponent},
  {path:'**', redirectTo:'/error',pathMatch:'full'},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
