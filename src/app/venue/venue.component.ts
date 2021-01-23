import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../service/httpclient.service';
import { Venue, VenueService } from '../service/venue.service';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {

  venue !:Venue;
  venue1 !:Venue;
  venueName: string;
  venueType: string;
  perDayResnt: Number;
  seatingCapacity : Number;
  kitchenAvailability:string;
  samplePhotos:string;
  venueAddress : string;
  zipCode : Number;
  emailId:string;
  officeNumber: string;
  vendorId:Number;
  venueCity:string;
  

  constructor(
    private venueService: VenueService,
    private httpClientService:HttpClientService, 
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.venue=this.venueService.venueObj;
    console.log(this.venue);
  }

  addVenueDetails(){
   // alert(this.httpClientService.vendorObj);

    this.vendorId=this.httpClientService.vendorObj.vendorId;
    alert(this.vendorId);
    this.venue = new Venue(0,this.venueName, this.venueType, this.perDayResnt,this.seatingCapacity,this.kitchenAvailability,
      this.samplePhotos,this.venueAddress,this.zipCode,this.emailId,this.officeNumber,this.vendorId,this.venueCity);
    this.venueService.addVenue(this.venue).subscribe(res => {
      this.venue1=res;
    });
    this.venueService.venueObj=this.venue1;

    this.router.navigate(['venuehome']);
  }

}
