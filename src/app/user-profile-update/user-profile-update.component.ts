import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService, User } from '../service/httpclient.service';

@Component({
  selector: 'app-user-profile-update',
  templateUrl: './user-profile-update.component.html',
  styleUrls: ['./user-profile-update.component.css']
})
export class UserProfileUpdateComponent implements OnInit {

  user:User=new User();
  fname!: string;
  password!: string;
  email!: string;
  mobilenumber!: string;
  category!: string;
  address!: string;
  zipcode!: Number;
  userCity:string;
  role!:number;
  gender:string='male';
  user1:User=new User();
  cpassword:string;
  isVendor:boolean=false;
  isRole:Number;
  public registerBtn = false;
  venue:string;
  decorator:string;
  pandit:string;
  dj: string;
  caterer:string;
  photography:string;
  constructor(
    private router: Router,
    private httpClientService: HttpClientService,
  ) { }

  ngOnInit(): void {
    this.user=this.httpClientService.userObj;
    console.log(this.user);
  }

  updateprofile(){
    this.user1 = new User(this.user.userId,this.fname, this.email, this.password,this.mobilenumber,this.gender,
      this.address,this.userCity,this.zipcode);
    this.httpClientService.updateUser(this.user1).subscribe(res => {  
      console.log(res);
      this.httpClientService.userObj=res;
      console.log(res);
      alert("Your Profile Updated")
       this.router.navigate(['uservenue']); 
      });
  }


}
