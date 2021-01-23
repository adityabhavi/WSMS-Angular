import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Decorator, DecoratorService } from '../service/decorator.service';
import { HttpClientService } from '../service/httpclient.service';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.css']
})
export class DecoratorComponent implements OnInit {

  decorator:Decorator= new Decorator(); 

  vendorId:Number;
  

  
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
  
  venueCity:string;



  constructor(
    private router:Router,
    private decoratorService:DecoratorService,
    private httpClientService:HttpClientService,
  ) { }

  ngOnInit(): void {
  }

  add(){
    this.vendorId=this.httpClientService.vendorObj.vendorId;
    this.decorator= new Decorator(0,this.venueName,this.venueAddress,this.zipCode,this.officeNumber,this.emailId,this.vendorId,this.perDayResnt,this.venueCity);
    this.decoratorService.addDecorator(this.decorator).subscribe(res=>{
    this.decoratorService.decoratorObj=res;
    this.router.navigate(['decoratorhome']);
  });
  }

}
