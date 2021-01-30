import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Caterer, CatererService } from 'src/app/service/caterer.service';
import { HttpClientService, User } from 'src/app/service/httpclient.service';
import { Order, OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-caterer-details',
  templateUrl: './caterer-details.component.html',
  styleUrls: ['./caterer-details.component.css']
})
export class CatererDetailsComponent implements OnInit {

  caterer:Caterer;
  user:User;
  order:Order;
  status:boolean=false;
  constructor(
    private router:Router,
    private catererService:CatererService,
    private httpClientService: HttpClientService,
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.caterer=this.catererService.catererObje;
    this.user=this.httpClientService.userObj;
  }

  addtocart(caterer){
    this.order=new Order(0,this.user.userId,this.caterer.vendorId,this.caterer.catererId,this.status);
    this.orderService.addorder(this.order).subscribe(result => {});
    alert("Order Added To Cart");
    this.router.navigate(['usercart']);
  }

}
