import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../service/httpclient.service';
import { Photography, PhotographyService } from '../service/photography.service';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent implements OnInit {

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
  photo:Photography=new Photography();


  constructor(
    private photographyService: PhotographyService,
    private router: Router,
    private httClientService:HttpClientService,
  ) { }

  ngOnInit(): void {
    
  }

  addDetails(){
    this.vendorId=this.httClientService.vendorObj.vendorId;
    
    this.photo=new Photography(0,this.venueName,this.venueAddress, this.zipCode,
      this.officeNumber,this.emailId,this.perDayResnt,this.venueCity,this.vendorId);

    this.photographyService.addPhotographer(this.photo).subscribe(res=>{
      this.photographyService.photoObj=res;
      this.router.navigate(['photographerhome']);
    });
  }

}
