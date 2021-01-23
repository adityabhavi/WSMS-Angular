import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DJ, DjService } from 'src/app/service/dj.service';
import { HttpClientService, User } from 'src/app/service/httpclient.service';
import { Order, OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-dj-details',
  templateUrl: './dj-details.component.html',
  styleUrls: ['./dj-details.component.css']
})
export class DjDetailsComponent implements OnInit {

  dj:DJ;
  user:User;
  order:Order;
  status:boolean=false;
  constructor(
    private djService:DjService,
    private httpClientService : HttpClientService,
    private orderService: OrderService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.dj=this.djService.djObj;
    this.user=this.httpClientService.userObj;
  }

  addtocart(dj){
    this.order=new Order(0,this.user.userId,this.dj.vendorId,this.dj.musicianId,this.status);
    this.orderService.addorder(this.order).subscribe(result => {});
    this.router.navigate(['usercart']);
  }

}
