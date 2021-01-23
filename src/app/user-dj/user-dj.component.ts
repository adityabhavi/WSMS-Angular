import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DJ, DjService } from '../service/dj.service';
import { HttpClientService, User } from '../service/httpclient.service';

@Component({
  selector: 'app-user-dj',
  templateUrl: './user-dj.component.html',
  styleUrls: ['./user-dj.component.css']
})
export class UserDJComponent implements OnInit {

  djs:DJ[];
  city:string;
  user:User=new User();
  constructor(
    private djService:DjService,
    private router: Router,
    private httpClientService: HttpClientService,
  ) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('user')) {
      this.router.navigate(['']);
    } else {
      this.user = this.httpClientService.userObj;
      console.log(this.user);
      this.router.navigate(['userdj']);
    }

    this.djService.getAllDj().subscribe(res=>{
      this.djs=res;
    });
  }

  djlocation(city){
    this.djService.getDjByCity(city).subscribe(res=>{
      this.djs=res;
    });
  }

  getmoredetails(dj){
    this.djService.djObj=dj;
    this.router.navigate(['userdjdetails']);
  }

}
