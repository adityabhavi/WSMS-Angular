import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService, User } from 'src/app/service/httpclient.service';
import { Order, OrderService } from 'src/app/service/order.service';
import { Photography, PhotographyService } from 'src/app/service/photography.service';

@Component({
  selector: 'app-photoghrapher-details',
  templateUrl: './photoghrapher-details.component.html',
  styleUrls: ['./photoghrapher-details.component.css']
})
export class PhotoghrapherDetailsComponent implements OnInit {

  photo:Photography;
  user: User;
  order: Order;
  status:boolean=false;
  constructor(
    private photographyService: PhotographyService,
    private httpClientService: HttpClientService,
    private orderService: OrderService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.photo=this.photographyService.photoObj;
    this.user=this.httpClientService.userObj;
  }

  addtocart(photo){
    this.order=new Order(0,this.user.userId,this.photo.vendorId,this.photo.photographerId,this.status);
    this.orderService.addorder(this.order).subscribe(result => {});
    alert("Order Added To Cart");
    this.router.navigate(['usercart']);
  }

}
