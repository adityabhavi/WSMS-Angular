import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



export class Pandit {
  constructor(
    public panditId?:Number,
    public panditName?:string,
    public panditAddress?: string,
    public zipcode?:Number,
    public officeNumber?: string,
    public emailId?:string,
    public startingPrice?:Number,
    
    public experience?:Number,
    public languages?: string,
    public vendorId?:Number,
    public panditCity?:string,
    
  ) { }
}


@Injectable({
  providedIn: 'root'
})
export class PanditService {

  panditObj:Pandit;
  constructor(
    private httpClient: HttpClient
  ) { }

  addPandit(pandit: Pandit) {
    
    return this.httpClient.post<Pandit>("http://localhost:8080/addpandit", pandit);
  }

  getAllPandit(){
    return this.httpClient.get<Pandit[]>("http://localhost:8080/getAllPandit");
  }

  getPanditByCity(city: string){
    return this.httpClient.get<Pandit[]>("http://localhost:8080/pandit?city="+city);
  }
}
