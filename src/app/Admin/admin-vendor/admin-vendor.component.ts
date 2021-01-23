import { Component, OnInit } from '@angular/core';
import { HttpClientService, Vendor } from 'src/app/service/httpclient.service';

@Component({
  selector: 'app-admin-vendor',
  templateUrl: './admin-vendor.component.html',
  styleUrls: ['./admin-vendor.component.css']
})
export class AdminVendorComponent implements OnInit {

  vendors:Vendor[];
  category:string;
  constructor(
    private httpClientService: HttpClientService,
  ) { }

  ngOnInit(): void {
    this.httpClientService.getAllVendors().subscribe(res=>{
      this.vendors=res;
    })
  }


  deleteVendor(vendor){
    this.httpClientService.deleteVendor(vendor.vendorId).subscribe(res=>{
      alert("Vendor Service Terminate");
    });
  }

}
