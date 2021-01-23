import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Caterer, CatererService } from '../service/caterer.service';
import { HttpClientService } from '../service/httpclient.service';

@Component({
  selector: 'app-caterer',
  templateUrl: './caterer.component.html',
  styleUrls: ['./caterer.component.css']
})
export class CatererComponent implements OnInit {

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
  caterer:Caterer=new Caterer();

  constructor(
    private httpClientService:HttpClientService, 
    private router: Router,
    private catererService:CatererService,
  ) { }

  ngOnInit(): void {
  }

  addDetails(){
    this.vendorId=this.httpClientService.vendorObj.vendorId;
    this.caterer= new Caterer(0,this.venueName,this.venueAddress,this.venueCity,
      this.zipCode,this.officeNumber,this.emailId,this.perDayResnt,this.vendorId);
    
    this.catererService.addCaterer(this.caterer).subscribe(res=>{
      this.catererService.catererObje=res;
    });
    this.router.navigate(['catererhome']);
  }

}
