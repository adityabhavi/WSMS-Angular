import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService, User, Vendor } from 'src/app/service/httpclient.service';
import { Order, OrderService } from 'src/app/service/order.service';
import { Venue, VenueService } from 'src/app/service/venue.service';

@Component({
  selector: 'app-venue-details',
  templateUrl: './venue-details.component.html',
  styleUrls: ['./venue-details.component.css']
})
export class VenueDetailsComponent implements OnInit {

  venue!:Venue;
  user!: User;
  vendor!:Vendor;
  order:Order;
  status:boolean=false;
  constructor(
    private venueService: VenueService,
    private httpClientService: HttpClientService,
    private orderService: OrderService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.user=this.httpClientService.userObj;
    this.venue = this.venueService.getVenueObject();
  }

  addtocart(venue){
    this.order=new Order(0,this.user.userId,this.venue.vendorId,this.venue.venueId,this.status);
    this.orderService.addorder(this.order).subscribe(result => {
     
    });
    alert("Order Added To Cart");
    this.router.navigate(['usercart']);
  }
}
