import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService, Vendor, User } from '../service/httpclient.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  navbarOpen :boolean;
  usern: string;
  pass: string;
  vendor!: Vendor;
  user!: User;
  user1:string;
  isCheck:boolean=false;
  constructor(
     private httpClientService: HttpClientService, 
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  checkCheckBoxvalue(event){
    this.isCheck=event.target.checked;
    
  }

  login(usern, pass,isCheck) {
    if(isCheck==false){
    alert("user");
    
    this.httpClientService.loginUser(new User(null,null,usern,pass,null,null,null,null,null)).subscribe(res => {
      this.httpClientService.userObj= res;
      if (res != null) {
        alert("Welcome " + this.httpClientService.userObj.userFullName);
        sessionStorage.setItem('user',this.httpClientService.userObj.userFullName);
        this.router.navigate(['uservenue']);
      } else {
        alert("Wrong Credentials");
        this.router.navigate(['login']);
      }
    });
  }else{
    alert("Vendor");

    this.httpClientService.loginVendor(new Vendor(0,null,pass,usern,null,null,null,null,null,null)).subscribe(res => {
      this.vendor = res;
      this.httpClientService.vendorObj=res;
      if (this.vendor != null) {
        console.log(this.vendor);
        alert("Welcome " + this.vendor.vendorFullName);
        sessionStorage.setItem('vendor', this.vendor.vendorFullName);
        if(this.vendor.vendorCategory=="venue"){
          this.router.navigate(['venuehome']);
        }else if(this.vendor.vendorCategory=="decorator"){
          this.router.navigate(['decoratorhome']);
        }else if(this.vendor.vendorCategory=="pandit"){
          this.router.navigate(['pandithome']);
        }else if(this.vendor.vendorCategory=="dj"){
          this.router.navigate(['djhome']);
        }else if(this.vendor.vendorCategory=="caterer"){
          this.router.navigate(['catererhome']);
        }else if(this.vendor.vendorCategory=="photography"){
          this.router.navigate(['photographerhome']);
        }
        
      } else {
        console.log(res);
        alert("Wrong Credentials");
        this.router.navigate(['login']);
      }
    });

  }
}


}
