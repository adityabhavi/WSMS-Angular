import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export class DJ{
  constructor(
    public musicianId?:Number,
    public musicianName?:string,
    public musicianAddress?:string,
    public musicianZipCode?:Number,
    public musicianOfficeNo?: string,
    public musicianEmail?: string,
    public perHourPrice?:Number,
    public vendorId?:Number,
    public musicianCity?:string,
  ){}
}



@Injectable({
  providedIn: 'root'
})
export class DjService {

  djObj:DJ; 
  constructor(
    private httpClient: HttpClient,
  ) { }

  addDJ(dj: DJ) {
    
    return this.httpClient.post<DJ>("http://localhost:8080/addmusician", dj);
  }

  getAllDj() {
    return this.httpClient.get<DJ[]>("http://localhost:8080/getAllMusician");
  }

  getDjByCity(city: string){
    return this.httpClient.get<DJ[]>("http://localhost:8080/musician?city="+city);
  }

}
