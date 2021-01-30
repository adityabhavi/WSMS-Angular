import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DjService } from 'src/app/service/dj.service';
import { HttpClientService, Vendor } from 'src/app/service/httpclient.service';
import { OrderService, VendorOrders } from 'src/app/service/order.service';

@Component({
  selector: 'app-djhome',
  templateUrl: './djhome.component.html',
  styleUrls: ['./djhome.component.css']
})
export class DjhomeComponent implements OnInit {

  isOrders:boolean=false;
  vendor:Vendor=new Vendor();
  orderstatus:VendorOrders[];
  
  constructor(
    private router: Router,
    private djService:DjService,
    private orderService: OrderService,
    private httpClientService: HttpClientService,
  ) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('vendor')) {
      this.router.navigate(['']);
    } else {
      this.vendor = this.httpClientService.vendorObj;
      console.log(this.vendor);
      this.router.navigate(['djhome']);
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

}
