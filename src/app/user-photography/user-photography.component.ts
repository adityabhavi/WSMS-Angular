import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService, User } from '../service/httpclient.service';
import { Photography, PhotographyService } from '../service/photography.service';

@Component({
  selector: 'app-user-photography',
  templateUrl: './user-photography.component.html',
  styleUrls: ['./user-photography.component.css']
})
export class UserPhotographyComponent implements OnInit {
 
  photos!:Photography[];
  city:string;
  user:User=new User();
  constructor(
    private photographyService: PhotographyService,
    private router: Router,
    private httpClientService: HttpClientService,
  ) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('user')) {
      this.router.navigate(['']);
    } else {
      this.user = this.httpClientService.userObj;
      console.log(this.user);
      this.router.navigate(['userphotography']);
    }

    this.photographyService.getAllPhotographers().subscribe(res => {
      this.photos=res;
    });
  }

  photographerlocation(city){
    this.photographyService.getPhotographerDetails(city).subscribe(res => {
      this.photos=res;
    })
  }

  getmoredetails(photo){
    this.photographyService.photoObj=photo;
    this.router.navigate(['userphotographerdetails']);
  }

}
 