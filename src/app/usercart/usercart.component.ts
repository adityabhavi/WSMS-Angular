import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService, User } from '../service/httpclient.service';
import { Order, OrderDetails, OrderService } from '../service/order.service';

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css']
})
export class UsercartComponent implements OnInit {

  orders: Order[];
  user: User;
  order:Order;
  orderDetail:OrderDetails[];
  vendorName:string;
  serviceName1:string[];
  ors:OrderDetails[];
  constructor(
    private router: Router,
    private httpClientService: HttpClientService,
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.user=this.httpClientService.userObj;
    this.orderService.getOrder(this.user.userId).subscribe(res => {  
    this.orderDetail=res;
    console.log(res);
    console.log(this.orderDetail);
    })
  }

}
