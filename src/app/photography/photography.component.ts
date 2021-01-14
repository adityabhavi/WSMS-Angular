import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Photography, PhotographyService } from '../service/photography.service';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent implements OnInit {

  photography : Photography;
  photographerName!:string;
  photographerAddress: string;
  zipcode:Number;
  officeNumber: string;
  emailId:string;
  perDayPrice:Number;
  samplePhoto: string;
  vendorId:Number;


  constructor(
    private photographyService: PhotographyService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  addPhotographerDetails(){
    alert(this.photographerName);
    this.photographyService.addPhotographer
    (new Photography(this.photographerName,this.photographerAddress,this.zipcode,this.officeNumber,
      this.emailId,this.perDayPrice,this.samplePhoto,this.vendorId)).subscribe(res => {
    //  this.getAllUser();
   /*  
      this.venueName = "";
      this.venueType = "";
      this.perDayResnt = 0;
      this.seatingCapacity=0;
      this.kitchenAvalibility = "";
      this.samplePhotos="";
      this.VenueAddress="";
      this.zipCode =0;
      this.emailId = "";
      this.officeNumber="";
      this.VendorId=0;*/
    }
    )
    this.router.navigate(['login']);
  }

}
