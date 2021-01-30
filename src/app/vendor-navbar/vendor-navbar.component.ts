import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-navbar',
  templateUrl: './vendor-navbar.component.html',
  styleUrls: ['./vendor-navbar.component.css']
})
export class VendorNavbarComponent implements OnInit {
  navbarOpen: boolean;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  
toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;
}

logout(){
  sessionStorage.removeItem('vendor');
    this.router.navigate(['']);
}

}
