import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService, User } from '../service/httpclient.service';
import { Venue, VenueService } from '../service/venue.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  v !:Venue;
  user!:User;
  venues!:Venue[];
  navbarOpen: any;

  constructor(
    private venueService: VenueService,
    private router: Router,
    private httpClientService: HttpClientService,
  ) { }

  ngOnInit(): void {
    
  }
  
  userprofile(){
    this.user=this.httpClientService.userObj;
    this.router.navigate(['userprofile']);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  logout(){
    sessionStorage.removeItem('user');
    this.router.navigate(['']);
  }
  

}
