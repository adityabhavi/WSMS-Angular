import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin, AdminService } from 'src/app/service/admin.service';
import { HttpClientService, Vendor } from 'src/app/service/httpclient.service';

@Component({
  selector: 'app-admin-vendor',
  templateUrl: './admin-vendor.component.html',
  styleUrls: ['./admin-vendor.component.css']
})
export class AdminVendorComponent implements OnInit {

  vendors:Vendor[];
  category:string;
  admin:Admin;
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
      this.router.navigate(['adminvendor']);
    }
    this.httpClientService.getAllVendors().subscribe(res=>{
      this.vendors=res;
    })
  }


  deleteVendor(vendor){
    this.httpClientService.deleteVendor(vendor.vendorId).subscribe(res=>{
      alert("Vendor Service Terminate");
      //this.vendors.splice(this.vendors.indexOf(vendor,1));
    });
    this.router.navigate(['adminvendor']);

  }

}
