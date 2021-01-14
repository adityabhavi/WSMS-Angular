import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venue, VenueService } from '../service/venue.service';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {

  venue !:Venue;
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


  constructor(
    private venueService: VenueService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  addVenueDetails(){
    alert(this.venueAddress);
    this.venueService.addVenue
    (new Venue(this.venueName, this.venueType, this.perDayResnt,this.seatingCapacity,this.kitchenAvailability,
      this.samplePhotos,this.venueAddress,this.zipCode,this.emailId,this.officeNumber,this.vendorId)).subscribe(res => {
    //  this.getAllUser();
       
      this.venueName = "";
      this.venueType = "";
      this.perDayResnt = 0;
      this.seatingCapacity=0;
      this.kitchenAvailability = "";
      this.samplePhotos="";
      this.venueAddress="";
      this.zipCode =0;
      this.emailId = "";
      this.officeNumber="";
      this.vendorId=0;
    }
    )
    this.router.navigate(['login']);
  }

}
