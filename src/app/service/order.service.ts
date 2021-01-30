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

export class VendorOrders{
  constructor(
    public order?:Order,
    public userName?:string,
    public userMobileNo?:string,
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

  // getServiceId(vendorId:Number,category:string){
  //   return this.httpClient.get<Number>("http://localhost:8080/getserviceid?vendorId="+vendorId+"&&catergory="+category);
  // }

  getOrderForVendor(status:boolean,vId:Number){
    return this.httpClient.get<VendorOrders[]>("http://localhost:8080/getorderforvendor?vendorId="+vId+"&&value="+status)
  }

  confirmOrder(orderId:Number){
    return this.httpClient.get<string>("http://localhost:8080/confirmorder?orderId="+orderId);
  }
 
}

