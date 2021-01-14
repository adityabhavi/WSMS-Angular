import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pandit, PanditService } from '../service/pandit.service';

@Component({
  selector: 'app-user-pandit',
  templateUrl: './user-pandit.component.html',
  styleUrls: ['./user-pandit.component.css']
})
export class UserPanditComponent implements OnInit {

  pandits :Pandit[];

  constructor(
    private panditService: PanditService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.panditService.getAllPandit().subscribe(res => {
      this.pandits=res;
    });

  }

}
