import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin, AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminemail:string;
  adminpassword:string;

  constructor(
    private adminService:AdminService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  adminlogin(adminemail,adminpassword){
    this.adminService.adminLogin(new Admin(0,null,adminemail,adminpassword,null)).subscribe(res=>{
      console.log(res);
      if (res != null) {
        this.adminService.adminObj=res;
        sessionStorage.setItem('admin',this.adminService.adminObj.adminFullName);
        this.router.navigate(['admincustomer']);
      } else {
        alert("Wrong Credentials");
        this.router.navigate(['adminlogin']);
      }
    });
  }
}
