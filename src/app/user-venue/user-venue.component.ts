import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService, User } from '../service/httpclient.service';
import { Venue, VenueService } from '../service/venue.service';

@Component({
  selector: 'app-user-venue',
  templateUrl: './user-venue.component.html',
  styleUrls: ['./user-venue.component.css']
})
export class UserVenueComponent implements OnInit {


  venue !:Venue;
  user:User=new User();
  venues!:Venue[];
  city:string;
  cities:string[];
  constructor(
    private venueService: VenueService,
    private httpClientService:HttpClientService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    if (!sessionStorage.getItem('user')) {
      this.router.navigate(['']);
    } else {
      this.user = this.httpClientService.userObj;
      console.log(this.user);
      this.router.navigate(['uservenue']);
    }

    this.venueService.getAllVenue().subscribe(res => {
      this.venues=res;
      console.log(res);
    });

    this.httpClientService.getCities('venue').subscribe(res => {
      this.cities=res;
    })
  }
  
  venuelocation(city){
   this.venueService.getVenue(city).subscribe(res => {
    this.venues=res;
   });

  }

  
  getDetails(venue){
    this.venueService.setVenueObject(venue);
    this.router.navigate(['uservenuedetails']);
  }

}
