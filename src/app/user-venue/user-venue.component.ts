import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../service/httpclient.service';
import { Venue, VenueService } from '../service/venue.service';

@Component({
  selector: 'app-user-venue',
  templateUrl: './user-venue.component.html',
  styleUrls: ['./user-venue.component.css']
})
export class UserVenueComponent implements OnInit {


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
