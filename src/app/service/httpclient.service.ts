import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

export class Vendor {
  constructor(
    public vendorId?:Number,
    public vendorFullName?: string,
    public vendorPassword?: string,
    public vendorEmail?: string,
    public vendorMobileNo?: string,
    public vendorGender?:string,
    public vendorCategory?:string,
    public vendorAddress?: string,
  
    public vendorZipCode?: Number,
    public vendorCity?:string,
  ) { }
}

export class User {
  constructor(
    public userId?:Number,
    public userFullName?: string,
    public userEmail?: string,
    public userPassword?: string,
    public userMobileNo?: string,
    public userGender?: string,
    public userAddress?: string,
    public userCity?:string,
    public userZipCode?:Number,
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

    user ?: Vendor;
    userObj?:User;
    vendorObj?:Vendor;
  constructor(
    private httpClient: HttpClient
  ) {
  }

  createVendor(user: Vendor) {
    return this.httpClient.post<Vendor>("http://localhost:8080/registervendor", user);
  }

  createUser(user: User) {
    return this.httpClient.post<User>("http://localhost:8080/registeruser", user);
  }


  getUser() {
    // console.log("test call");
    return this.httpClient.get<Vendor[]>('http://localhost:8080/user_list');
  }

  getCities(category: string) {
    return this.httpClient.get<string[]>('http://localhost:8080/getcities?category='+category);
  }

  loginVendor(user: Vendor) {

    return this.httpClient.post<Vendor>("http://localhost:8080/loginvendor", user);

  }

  getVendors(category:string){
    return this.httpClient.get<Vendor[]>("http://localhost:8080/getVendors?category="+category);
  }

  loginUser(user: User) {

    return this.httpClient.post<User>("http://localhost:8080/loginuser", user);

  }

  deleteVendor(vendorId: Number){
    return this.httpClient.delete("http://localhost:8080/deleteVendor?vendorId="+vendorId);
  }

  getAllUSers(){
    return this.httpClient.get<User[]>("http://localhost:8080/getallusers");
  }

  getAllVendors(){
    return this.httpClient.get<Vendor[]>("http://localhost:8080/getallvendors");
  }

  deleteUser(userId:Number){
    return this.httpClient.delete("https://localhost:8080/deletuser?userId="+userId);
  }

  updateUser(user:User){
    return this.httpClient.post<User>("http://localhost:8080/updateuser", user);
  }
  
}