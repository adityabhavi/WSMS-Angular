import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Decorator, DecoratorService } from '../service/decorator.service';
import { HttpClientService, User } from '../service/httpclient.service';

@Component({
  selector: 'app-user-decorator',
  templateUrl: './user-decorator.component.html',
  styleUrls: ['./user-decorator.component.css']
})
export class UserDecoratorComponent implements OnInit {

  decorators!:Decorator[];
  city:string;
  decorator:Decorator;
  user:User=new User();
  constructor(
    private decoratorService:DecoratorService,
    private httpClientService: HttpClientService,
    private router:Router,
  ) { }

  ngOnInit(): void {

    if (!sessionStorage.getItem('user')) {
      this.router.navigate(['']);
    } else {
      this.user = this.httpClientService.userObj;
      console.log(this.user);
      this.router.navigate(['userdecorator']);
    }

    this.decoratorService.getAllDecorators().subscribe(res => {
      this.decorators=res;

    });
  }

  decoratorlocation(city){
    this.decoratorService.getDecoratorsByCity(city).subscribe(res => {
      this.decorators=res;
    });
  }

  getmoredetails(decorator){
    this.decoratorService.decoratorObj=decorator;
    this.router.navigate(['userdecoratordetails']);
  }



}
