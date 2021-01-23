import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService, User } from 'src/app/service/httpclient.service';
import { Order, OrderService } from 'src/app/service/order.service';
import { Pandit, PanditService } from 'src/app/service/pandit.service';

@Component({
  selector: 'app-pandit-details',
  templateUrl: './pandit-details.component.html',
  styleUrls: ['./pandit-details.component.css']
})
export class PanditDetailsComponent implements OnInit {

  pandit:Pandit;
  user: User;
  order:Order;
  status:boolean=false;
  constructor(
    private panditService: PanditService,
    private httpClientService: HttpClientService,
    private orderService: OrderService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.user=this.httpClientService.userObj;
    this.pandit=this.panditService.panditObj;
  }

  addtocart(pandit){
    this.order=new Order(0,this.user.userId,this.pandit.vendorId,this.pandit.panditId,this.status);
    this.orderService.addorder(this.order).subscribe(result => {});
    this.router.navigate(['usercart']);
  }
}
