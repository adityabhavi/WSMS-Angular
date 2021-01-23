import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Decorator{
  constructor(
    public decoratorId?:Number,
    public decoratorName?: string,
    public decoratorAddress?:string,
    public decoratorZipCode?: Number,
    public decoratorOfficeNo?: string,
    public decoratorEmail?:string,
    public vendorId?:Number,
    public decoratorStartingPrice?:Number,
    public decoratorCity?:string,

  ){}
}

@Injectable({
  providedIn: 'root'
})

export class DecoratorService {

  decoratorObj:Decorator;
  constructor(
    private httpClient: HttpClient
  ) { }

  addDecorator(decorator:Decorator){
    return this.httpClient.post<Decorator>("http://localhost:8080/adddecorator", decorator);
  }

  getAllDecorators(){
    return this.httpClient.get<Decorator[]>("http://localhost:8080/getAllDecorator");  
  }

  getDecoratorsByCity(city: string){
    return this.httpClient.get<Decorator[]>("http://localhost:8080/decorator"+city);
  }
  
}

