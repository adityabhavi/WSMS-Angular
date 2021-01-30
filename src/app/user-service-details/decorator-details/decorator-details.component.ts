import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Decorator, DecoratorService } from 'src/app/service/decorator.service';
import { HttpClientService, User } from 'src/app/service/httpclient.service';
import { Order, OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-decorator-details',
  templateUrl: './decorator-details.component.html',
  styleUrls: ['./decorator-details.component.css']
})
export class DecoratorDetailsComponent implements OnInit {

  decorator:Decorator;
  user: User;
  order: Order;
  status:boolean=false;
  constructor(
    private decoratorService:DecoratorService,
    private httpClientService: HttpClientService,
    private orderService: OrderService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.user=this.httpClientService.userObj;
    this.decorator=this.decoratorService.decoratorObj;
  }

  addtocart(decorator){
    this.order=new Order(0,this.user.userId,this.decorator.vendorId,this.decorator.decoratorId,this.status);
    this.orderService.addorder(this.order).subscribe(result => {});
    alert("Order Added To Cart");
    this.router.navigate(['usercart']);
  }
}
