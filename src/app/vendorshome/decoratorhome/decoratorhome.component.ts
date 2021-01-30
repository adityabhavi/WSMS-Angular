import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Decorator, DecoratorService } from 'src/app/service/decorator.service';
import { HttpClientService, Vendor } from 'src/app/service/httpclient.service';
import { OrderService, VendorOrders } from 'src/app/service/order.service';
import { VenueService } from 'src/app/service/venue.service';

@Component({
  selector: 'app-decoratorhome',
  templateUrl: './decoratorhome.component.html',
  styleUrls: ['./decoratorhome.component.css']
})
export class DecoratorhomeComponent implements OnInit {

  selectedFiles: File[];
  retrievedImage : any;
  base64Data: any;
  retrieveResonse: any[];
  message: string;
  imageName: any;
  url: string[] = [];
  uploadImage: FormData;
  imgs:any[];
  result:any[];
  decorator:Decorator=new Decorator();
  dId:string;
  isOrders:boolean=false;
  vendor:Vendor=new Vendor();
  orderstatus:VendorOrders[];
  
  constructor(
    private httpClient: HttpClient,
    private venueService: VenueService,
    private router: Router,
    private httpClientService: HttpClientService,
    private orderService: OrderService,
    private decoratorService: DecoratorService,
  ) { }

  ngOnInit( ): void {
    if (!sessionStorage.getItem('vendor')) {
      this.router.navigate(['']);
    } else {
      this.vendor = this.httpClientService.vendorObj;
      console.log(this.vendor);
      this.router.navigate(['decoratorhome']);
    }
   
    this.confirmorders();
  }


  confirmorders(){
    this.isOrders=false;
    this.orderService.getOrderForVendor(true,this.vendor.vendorId).subscribe(res=>{
      console.log(res);
      this.orderstatus=res;
    });
  }

  pendingorders(){
    this.isOrders=true;
    this.orderService.getOrderForVendor(false,this.vendor.vendorId).subscribe(res=>{
      this.orderstatus=res;
      console.log(res);
    });
  }

  acceptrequest(orderId:Number){
    this.orderService.confirmOrder(orderId).subscribe(res=>{
      console.log(res);
    });
  }

  public onFileChanged(event) {
    this.selectedFiles = event.target.files;
  }
  onUpload() {
    this.uploadImage = new FormData();
    for(var i=0; i < this.selectedFiles.length; i++){
      this.uploadImage.append('files', this.selectedFiles[i], this.selectedFiles[i].name); 
    }
    this.dId=this.decorator.decoratorId.toString();
    this.uploadImage.append('catererId',this.dId);
    console.log(this.uploadImage);
    this.httpClient.post('http://localhost:8080/uploaddecoratorphoto', this.uploadImage).subscribe((response) => {});
  }

}
