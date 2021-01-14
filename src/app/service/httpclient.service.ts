import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Vendor {
  constructor(
    public vendorFullName: string,
    public vendorPassword: string,
    public vendorEmail: string,
    public vendorMobileNo : string,
    public vendorGender:string,
    public vendorCategory:string,
    public vendorAddress : string,
    public vendorZipCode : string
  ) { }
}

export class User {
  constructor(
    public userFullName: string,
    public userEmail: string,
    public userPassword : string,
    public userMobileNo: string,
    public userGender : string,
    public userAddress : string,
    public userZipCode:string,
    
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

    user !: Vendor;
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


  /*deleteEmployee(user) {
    return this.httpClient.delete<User>("http://localhost:8080/user_del" + "/" + user.id);
  }

  createEmployee(user) {
    return this.httpClient.post<User>("http://localhost:8080/user_add", user);
  }

  updateEmp(user) {

    return this.httpClient.post<User>("http://localhost:8080/user_update", user);

  }
*/
  loginVendor(user: Vendor) {

    return this.httpClient.post<Vendor>("http://localhost:8080/loginvendor", user);

  }

  loginUser(user: User) {

    return this.httpClient.post<User>("http://localhost:8080/loginuser", user);

  }

  
}