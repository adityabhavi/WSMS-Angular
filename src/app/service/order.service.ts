import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Order{
  constructor(
  public orderId:Number,
  public userId:Number,
  public vendorId :Number,
  public serviceId:Number,
  public statusOfOrder:boolean,
  ){}
}

export class OrderDetails{
  constructor(
    public order?:Order,
    public serviceName?:string,
    public vendorName?:string,
  ){

  }
}


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderObj:Order;
  constructor(
    private httpClient: HttpClient,
  ) {}
  
  
  addorder(order:Order){
    return this.httpClient.post<Order>("http://localhost:8080/addorder",order);
  }

  getOrder(userId:Number){
    return this.httpClient.get<OrderDetails[]>("http://localhost:8080/getorderstatus?userId="+userId);
  }
}

