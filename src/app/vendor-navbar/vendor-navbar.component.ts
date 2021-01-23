import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-navbar',
  templateUrl: './vendor-navbar.component.html',
  styleUrls: ['./vendor-navbar.component.css']
})
export class VendorNavbarComponent implements OnInit {
  navbarOpen: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  
toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;
}

}
