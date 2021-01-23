import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
  navbarOpen: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  
toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;
}
}
