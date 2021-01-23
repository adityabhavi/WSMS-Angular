import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService, User } from '../service/httpclient.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  user1:User=new User();
  
  constructor(
    private router: Router,
    private httpClientService: HttpClientService,
  ) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('user')) {
      this.router.navigate(['']);
    } else {
      this.user1 = this.httpClientService.userObj;
      console.log(this.user1);
      this.router.navigate(['userhome']);
    }
  }

}
