import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../service/httpclient.service';
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

  constructor(
    private venueService: VenueService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    
  }

  

}
