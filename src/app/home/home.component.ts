import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../service/httpclient.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private httpClientService: HttpClientService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('name')) {
      this.router.navigate(['login']);
    } else {
      this.router.navigate(['home']);
    }
  }


}
