import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../service/httpclient.service';
import { Pandit, PanditService } from '../service/pandit.service';

@Component({
  selector: 'app-pandit',
  templateUrl: './pandit.component.html',
  styleUrls: ['./pandit.component.css']
})
export class PanditComponent implements OnInit {

  
  pandit:Pandit=new Pandit();
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
    private panditService: PanditService,
    private router: Router,
    private httpCllientService:HttpClientService,
  ) { }

  ngOnInit(): void {
  }

  addDetails(){
    this.vendorId=this.httpCllientService.vendorObj.vendorId;
    this.pandit=new Pandit(0,this.venueName,this.venueAddress,this.zipCode,this.officeNumber,this.emailId,this.perDayResnt,this.seatingCapacity,
      this.kitchenAvailability,this.vendorId,this.venueCity);
    this.panditService.addPandit(this.pandit).subscribe(res=>{
      this.pandit=res;
    });
    this.panditService.panditObj=this.pandit;
    this.router.navigate(['pandithome']);
  }
  

}
