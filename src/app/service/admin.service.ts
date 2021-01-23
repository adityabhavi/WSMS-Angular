import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Admin{
  constructor(
    public adminId:Number,
    public adminFullName:string,
    public adminEmail:string,
    public adminPassword:string,
    public adminMobileNo:string,
  ){}
}


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  adminObj:Admin;
  constructor(
    private httpClient:HttpClient,
  ) { }

  adminLogin(admin:Admin){
   return this.httpClient.post<Admin>("http://localhost:8080/loginadmin",admin)
  }
}
