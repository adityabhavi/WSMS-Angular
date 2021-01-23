import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Caterer, CatererService } from '../service/caterer.service';
import { HttpClientService, User } from '../service/httpclient.service';

@Component({
  selector: 'app-user-caterers',
  templateUrl: './user-caterers.component.html',
  styleUrls: ['./user-caterers.component.css']
})
export class UserCaterersComponent implements OnInit {

  caterers:Caterer[];
  user:User=new User();
  constructor(
    private router:Router,
    private catererService: CatererService,
    private httpClientService: HttpClientService,
  ) { }

  ngOnInit(): void {

    if (!sessionStorage.getItem('user')) {
      this.router.navigate(['']);
    } else {
      this.user = this.httpClientService.userObj;
      console.log(this.user);
      this.router.navigate(['usercaterers']);
    }

    this.catererService.getAllCateres().subscribe(res => {
      this.caterers=res;
    })
  }

  getmoredetail(caterer){
    this.catererService.catererObje=caterer;
    this.router.navigate(['usercatererdetails']);
  }

}
