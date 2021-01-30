import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin, AdminService } from 'src/app/service/admin.service';
import { HttpClientService, User } from 'src/app/service/httpclient.service';

@Component({
  selector: 'app-admin-customer',
  templateUrl: './admin-customer.component.html',
  styleUrls: ['./admin-customer.component.css']
})
export class AdminCustomerComponent implements OnInit {

  admin:Admin;
  users:User[];
  constructor(
    private httpClientService: HttpClientService,
    private router: Router,
    private adminService:AdminService,
  ) { }

  ngOnInit(): void {

    if (!sessionStorage.getItem('admin')) {
      this.router.navigate(['adminlogin']);
    } else {
      this.admin = this.adminService.adminObj;
      //console.log(this.user);
      this.router.navigate(['admincustomer']);
    }

    this.httpClientService.getAllUSers().subscribe(res=>{
      this.users=res;
    });
  }

  deleteuser(user){
    this.httpClientService.deleteUser(user.userId).subscribe(res=>{
      alert("User Service Terminated");
     // this.router.navigate(['venuehome']);
     
    });
    this.router.navigate(['admincustomer']);

  }

}
