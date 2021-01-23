import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Caterer{
  constructor(
    public catererId?:Number,
    public catererName?:string,
    public catererAddress?: string,
    public catererCity?:string,
    public catererZipCode?:Number,
    public officeNumber?: string,
    public catererEmailId?: string,
    public catererStartingPrice?:Number,
    public vendorId?:Number,
    ){}
}


@Injectable({
  providedIn: 'root'
})
export class CatererService {

  catererObje:Caterer;
  constructor(
    private httpClient: HttpClient
  ) { }

  getAllCateres(){
    return this.httpClient.get<Caterer[]>("http://localhost:8080/getallcarterer");  
  }

  addCaterer(caterer:Caterer){
    return this.httpClient.post<Caterer>("http://localhost:8080/addcaterer",caterer);  
  }

}
