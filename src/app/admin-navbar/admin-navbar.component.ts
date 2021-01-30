import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
  navbarOpen: boolean;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  
logout(){
    sessionStorage.removeItem('admin');
    this.router.navigate(['']);
  }

toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;
}
}

