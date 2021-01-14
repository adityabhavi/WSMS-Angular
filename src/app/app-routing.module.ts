import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PanditComponent } from './pandit/pandit.component';
import { PhotographyComponent } from './photography/photography.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserPanditComponent } from './user-pandit/user-pandit.component';
import { UserVenueComponent } from './user-venue/user-venue.component';
import { VenueComponent } from './venue/venue.component';
import { VenueMumbaiComponent } from './VenueLocations/venue-mumbai/venue-mumbai.component';

const routes: Routes = [
  {path:'',component:IndexComponent, pathMatch: 'full' },
  { path: 'register', component: RegistrationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path:'venue', component: VenueComponent },
  {path:'pandit', component: PanditComponent },
  {path:'photography',component:PhotographyComponent},
  {path:'userhome',component:UserHomeComponent},
  {path:'uservenue',component:UserVenueComponent},
  {path:'userpandit', component:UserPanditComponent},
  {path:'venuemumbai',component:VenueMumbaiComponent},
  {path:'error', component: PagenotfoundComponent},
  {path:'**', redirectTo:'/error',pathMatch:'full'},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
