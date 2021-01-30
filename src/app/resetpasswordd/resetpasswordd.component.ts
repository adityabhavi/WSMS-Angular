import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService, Vendor } from '../service/httpclient.service';

@Component({
  selector: 'app-resetpasswordd',
  templateUrl: './resetpasswordd.component.html',
  styleUrls: ['./resetpasswordd.component.css']
})
export class ResetpassworddComponent implements OnInit {

  vendor:Vendor;
  password:string;
  constructor(
    private activatedRout:ActivatedRoute,
    private httpClientService:HttpClientService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  reset(password){
    this.vendor=new Vendor(this.activatedRout.snapshot.params.Id,null,password,null,null,null,null,null,null,null);
    this.httpClientService.vendorResetPassword(this.vendor).subscribe(res=>{
      alert(res);
      this.router.navigate(['']);
    });
  }

}
