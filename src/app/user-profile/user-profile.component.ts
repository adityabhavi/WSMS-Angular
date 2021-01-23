import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService, User } from '../service/httpclient.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user:User;
  constructor(
    private router: Router,
    private httpClientService: HttpClientService,
  ) { }

  ngOnInit(): void {
    this.user=this.httpClientService.userObj;
   
  }

  


}
