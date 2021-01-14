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

    this.httpClientService.loginUser(new User(null,usern,pass,null,null,null,null)).subscribe(res => {
      this.user= res;
      if (this.user != null) {
        alert("Welcome " + this.user.userFullName);
        sessionStorage.setItem('name', this.user.userFullName);
        this.router.navigate(['home']);
      } else {
        alert("Wrong Credentials");
        this.router.navigate(['login']);
      }
    });
  }else if(isCheck==2){
    alert(usern);

    this.httpClientService.loginVendor(new Vendor(null,pass,usern,null,null,null,null,null)).subscribe(res => {
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
