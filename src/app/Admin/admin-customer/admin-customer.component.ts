import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClientService, User } from 'src/app/service/httpclient.service';

@Component({
  selector: 'app-admin-customer',
  templateUrl: './admin-customer.component.html',
  styleUrls: ['./admin-customer.component.css']
})
export class AdminCustomerComponent implements OnInit {

  users:User[];
  constructor(
    private httpClientService: HttpClientService,
  ) { }

  ngOnInit(): void {
    this.httpClientService.getAllUSers().subscribe(res=>{
      this.users=res;
    });
  }

  deleteuser(user){
    this.httpClientService.deleteUser(user.userId).subscribe(res=>{
      alert("User Service Terminated");
    });
  }

}
