import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './httpclient.service';





export class Venue {
  constructor(
    public venueId:Number,
    public venueName: string,
    public venueType: string,
    public perDayRent: Number,
    public seatingCapacity : Number,
    public kitchenAvailability:string,
    public samplePhotos:string,
    public venueAddress : string,
    public zipCode : Number,
    public emailId:string,
    public officeNumber: string,
    public vendorId:Number,
    public venueCity:string,
  ) { }
}

export class VenuePhoto{
  constructor(
    public venuePhotoId:Number,
    public photoName:string,
    public photoType:string,
    public picByte:any[],
    public venueId:Number, 
  ){

  }

}

@Injectable({
  providedIn: 'root'
})

export class VenueService {
  venueObj: Venue;

  constructor(
    private httpClient: HttpClient
  ) { }

  addVenue(venue: Venue) {
    alert(venue.kitchenAvailability);
    return this.httpClient.post<Venue>("http://localhost:8080/addvenue", venue);
  }

  getU(){
    return this.httpClient.get<User>("http://localhost:8080/getuser");
  }

  getAllVenue(){
    return this.httpClient.get<Venue[]>("http://localhost:8080/getAllVenue");
  }

  getVenue(city:string){
    return this.httpClient.get<Venue[]>("http://localhost:8080/venue?city="+city);
  }

  getVenueObject(){
    return this.venueObj;
  }

  setVenueObject(venueobj){
    this.venueObj=venueobj;
  }
}
