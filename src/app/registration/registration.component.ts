import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService, Vendor, User} from '../service/httpclient.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  users!: Vendor[];
  fullName!: string;
  password!: string;
  email!: string;
  mobilenumber!: string;
  category!: string;
  address!: string;
  zipcode!: string;
  role!:number;
  gender!:string;
  

  constructor(
    private httpClientService: HttpClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  add() {

    if(this.role==1){
    this.httpClientService.createUser
      (new User(this.fullName, this.email, this.password,this.mobilenumber,this.gender,
        this.address,this.zipcode)).subscribe(res => {
      //  this.getAllUser();
        this.fullName = "";
        this.password = "";
        this.email = "";
        this.mobilenumber="";
        this.gender = "";
        this.address="";
        this.zipcode="";
      }
      )
      this.router.navigate(['login']);
    }else if(this.role==2){
      this.httpClientService.createVendor
      (new Vendor(this.fullName, this.password, this.email,this.mobilenumber,this.gender,this.category,
        this.address,this.zipcode)).subscribe(res => {
      //  this.getAllUser();
        this.fullName = "";
        this.password = "";
        this.email = "";
        this.mobilenumber="";
        this.gender="";
        this.address="";
        this.zipcode="";
      }
      )
      this.router.navigate(['login']);
    }

  }

venue(){}
 

  

}
