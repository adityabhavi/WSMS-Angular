import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DJ, DjService } from '../service/dj.service';
import { HttpClientService } from '../service/httpclient.service';



@Component({
  selector: 'app-dj',
  templateUrl: './dj.component.html',
  styleUrls: ['./dj.component.css']
})
export class DjComponent implements OnInit {

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
  dj:DJ=new DJ();

  constructor(
    private router: Router,
    private djService:DjService,
    private httpClientService:HttpClientService,
  ) { }

  ngOnInit(): void {
    
  }

  addDetails(){
    this.vendorId=this.httpClientService.vendorObj.vendorId;
    this.dj=new DJ(0,this.venueName,this.venueAddress,this.zipCode,
      this.officeNumber,this.emailId,this.perDayResnt,this.vendorId,this.venueCity);
    
    this.djService.addDJ(this.dj).subscribe(res => {
      this.djService.djObj=res;
      
    });

    this.router.navigate(['djhome']);
  }

}
