import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService, Vendor, User } from '../service/httpclient.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usern: string;
  pass: string;
  isCheck: string;
  vendor!: Vendor;
  user!: User;
  user1:string;
  constructor(
    private httpClientService: HttpClientService, 
    private router: Router
  ) { 
    
  }

  ngOnInit(): void {
  }

  login(usern, pass,isCheck) {
    if(isCheck==1){
    alert(usern);
    
    this.httpClientService.loginUser(new User(null,null,usern,pass,null,null,null,null,null)).subscribe(res => {
      this.httpClientService.userObj= res;
      if (this.httpClientService.userObj != null) {
        alert("Welcome " + this.httpClientService.userObj.userFullName);
      //  this.user1 = JSON.stringify(this.httpClientService.userObj);
        sessionStorage.setItem('user',this.httpClientService.userObj.userFullName);
        this.router.navigate(['userhome']);
      } else {
        alert("Wrong Credentials");
        this.router.navigate(['login']);
      }
    });
  }else if(isCheck==2){
    alert(usern);

    this.httpClientService.loginVendor(new Vendor(0,null,pass,usern,null,null,null,null,null,null)).subscribe(res => {
      this.vendor = res;
      if (this.vendor != null) {
        alert("Welcome " + this.vendor.vendorFullName);
        sessionStorage.setItem('name', this.vendor.vendorFullName);
        this.router.navigate(['home']);
      } else {
        alert("Wrong Credentials");
        this.router.navigate(['login']);
      }
    });

  }
}
}
