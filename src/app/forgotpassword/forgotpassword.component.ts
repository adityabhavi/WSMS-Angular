import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import { HttpClientService, User } from '../service/httpclient.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  password:string;
  user:User;
  constructor(
    private activatedRout:ActivatedRoute,
    private httpClientService:HttpClientService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  reset(password){
    this.user=new User(this.activatedRout.snapshot.params.Id,null,null,password,null,null,null,null,null);
    this.httpClientService.userResetPassword(this.user).subscribe(res=>{
      alert(res);
      this.router.navigate(['']);
    });
  }

}
