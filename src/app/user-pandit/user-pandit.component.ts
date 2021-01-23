import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService, User } from '../service/httpclient.service';
import { Pandit, PanditService } from '../service/pandit.service';

@Component({
  selector: 'app-user-pandit',
  templateUrl: './user-pandit.component.html',
  styleUrls: ['./user-pandit.component.css']
})
export class UserPanditComponent implements OnInit {

  pandits :Pandit[];
  city:string;
  user:User=new User();
  constructor(
    private panditService: PanditService,
    private router: Router,
    private httpClientService: HttpClientService,
  ) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('user')) {
      this.router.navigate(['']);
    } else {
      this.user = this.httpClientService.userObj;
      console.log(this.user);
      this.router.navigate(['userpandit']);
    }

    this.panditService.getAllPandit().subscribe(res => {
      this.pandits=res;
    });

  }

  panditlocation(city){
    this.panditService.getPanditByCity(city).subscribe(res => {
      this.pandits=res;
    });
  }

  getmoredetails(pandit){
    this.panditService.panditObj=pandit;
    this.router.navigate(['userpanditdetails']);
  }

}
