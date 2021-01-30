import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService, Vendor } from 'src/app/service/httpclient.service';
import { OrderService, VendorOrders } from 'src/app/service/order.service';
import { Venue, VenuePhoto, VenueService } from 'src/app/service/venue.service';

@Component({
  selector: 'app-venuehome',
  templateUrl: './venuehome.component.html',
  styleUrls: ['./venuehome.component.css']
})
export class VenuehomeComponent implements OnInit {

  selectedFiles: File[];
  retrievedImage : any;
  base64Data: any;
  retrieveResonse: any[];
  message: string;
  imageName: any;
  venuePhoto:VenuePhoto;
  uploadImage: FormData;
  imgs:any[];
  result:any[];
  venue!:Venue;
  vendor:Vendor=new Vendor();
  url: string[] = [];
  isOrders:boolean=false;
  serviceId:Number;
  status:boolean;
  vId:Number;
  orderstatus:VendorOrders[];


  constructor(
    private httpClient: HttpClient,
    private venueService: VenueService,
    private router: Router,
    private httpClientService: HttpClientService,
    private orderService: OrderService,
    ) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('vendor')) {
      this.router.navigate(['']);
    } else {
      this.vendor = this.httpClientService.vendorObj;
      console.log(this.vendor);
      this.router.navigate(['venuehome']);
    }
    this.venue=this.venueService.venueObj;
    // this.orderService.getServiceId(this.vendor.vendorId,"venue").subscribe(res =>{
    //   this.serviceId=res;
      
    // });
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
    this.uploadImage.append('venueId','123');
    console.log(this.uploadImage);
    this.httpClient.post('http://localhost:8080/uploadvenuephoto', this.uploadImage).subscribe((response) => {});
  }

  getImage() { 
    this.httpClient.get('http://localhost:8080/getallvenuephotos')
    .subscribe(res => {
        this.retrievedImage = res;
        for( let result of this.retrievedImage ){
          this.base64Data = result.picByte;
          this.url.push('data:image/jpeg;base64,' + this.base64Data);
        }
        console.log(res);
        }
    );
  }
}
