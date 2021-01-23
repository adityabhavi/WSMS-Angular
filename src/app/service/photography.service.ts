import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Photography {
  constructor(
    public photographerId?:Number,
    public photographerName?:string,
    public photographerAddress?: string,
    public zipcode?:Number,
    public officeNumber?: string,
    public emailId?:string,
    public perDayPrice?:Number,
    public photographerCity?:string,
    public vendorId?:Number,

  ) { }
}


@Injectable({
  providedIn: 'root'
})


export class PhotographyService {

  photoObj:Photography;
  constructor(
    private httpClient: HttpClient
  ) { }

  addPhotographer(photography: Photography) {
    alert(photography.photographerName);
    return this.httpClient.post<Photography>("http://localhost:8080/addphotographer", photography);
  }

  getAllPhotographers(){
    return this.httpClient.get<Photography[]>("http://localhost:8080/getAllPhotographer");
  }

  getPhotographerDetails(city: string){
    return this.httpClient.get<Photography[]>("http://localhost:8080/photographer?city="+city);
  }
  


}
