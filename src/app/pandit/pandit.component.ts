import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pandit, PanditService } from '../service/pandit.service';

@Component({
  selector: 'app-pandit',
  templateUrl: './pandit.component.html',
  styleUrls: ['./pandit.component.css']
})
export class PanditComponent implements OnInit {

  pandit!:Pandit;
  panditName:string;
  panditAddress: string;
  zipcode:Number;
  officeNumber: string;
  emailId:string;
  startingPrice:Number;
  profilePhoto:string;
  experience:Number;
  languages: string;
  vendorId:Number;

  constructor(
    private panditService: PanditService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  addPanditDetails(){
    alert(this.panditName);
    this.panditService.addPandit
    (new Pandit(this.panditName,this.panditAddress,this.zipcode,this.officeNumber,this.emailId,
      this.startingPrice,this.profilePhoto,this.experience,this.languages,this.vendorId)).subscribe(res => {
    //  this.getAllUser();
       
      
    }
    )
    this.router.navigate(['login']);
  }
  

}
