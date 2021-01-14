import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/service/httpclient.service';
import { Venue, VenueService } from 'src/app/service/venue.service';

@Component({
  selector: 'app-venue-mumbai',
  templateUrl: './venue-mumbai.component.html',
  styleUrls: ['./venue-mumbai.component.css']
})
export class VenueMumbaiComponent implements OnInit {

  v !:Venue;
  user!:User;
  venues!:Venue[];
  
  constructor(
    private venueService: VenueService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.venueService.getAllVenue().subscribe(res => {
      this.venues=res;
    });
  }

}
