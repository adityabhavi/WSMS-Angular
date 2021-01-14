import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Photography {
  constructor(
    public photographerName:string,
    public photographerAddress: string,
    public zipcode:Number,
    public officeNumber: string,
    public emailId:string,
    public perDayPrice:Number,
    public samplePhoto: string,
    public vendorId:Number,

  ) { }
}


@Injectable({
  providedIn: 'root'
})


export class PhotographyService {

  constructor(
    private httpClient: HttpClient
  ) { }

  addPhotographer(photography: Photography) {
    alert(photography.photographerName);
    return this.httpClient.post<Photography>("http://localhost:8080/addphotographer", photography);
  }
}
