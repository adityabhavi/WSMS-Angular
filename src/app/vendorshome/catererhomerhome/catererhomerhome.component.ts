import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Caterer, CatererService } from 'src/app/service/caterer.service';
import { HttpClientService, Vendor } from 'src/app/service/httpclient.service';

@Component({
  selector: 'app-catererhomerhome',
  templateUrl: './catererhomerhome.component.html',
  styleUrls: ['./catererhomerhome.component.css']
})
export class CatererhomerhomeComponent implements OnInit {

  selectedFiles: File[];
  retrievedImage : any;
  base64Data: any;
  retrieveResonse: any[];
  message: string;
  imageName: any;
  url: string[] = [];
  uploadImage: FormData;
  imgs:any[];
  result:any[];
  caterer:Caterer=new Caterer();
  cId:string;
  vendor:Vendor=new Vendor();

  constructor(
    private httpClient: HttpClient,
    private caterService:CatererService,
    private router: Router,
    private httpClientService: HttpClientService,
  ) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('vendor')) {
      this.router.navigate(['']);
    } else {
      this.vendor = this.httpClientService.vendorObj;
      console.log(this.vendor);
      this.router.navigate(['catererhome']);
    }

    // this.caterer=this.caterService.catererObje;
    // this.httpClient.get('http://localhost:8080/getallvenuephotos?catererId='+this.caterer.catererId)
    // .subscribe(res => {
    //     this.retrievedImage = res;
    //     for( let result of this.retrievedImage ){
    //       this.base64Data = result.picByte;
    //       this.url.push('data:image/jpeg;base64,' + this.base64Data);
    //     }
    //     console.log(res);
    //     }
    // );
  }

  public onFileChanged(event) {
    this.selectedFiles = event.target.files;
  }
  onUpload() {
    this.uploadImage = new FormData();
    for(var i=0; i < this.selectedFiles.length; i++){
      this.uploadImage.append('files', this.selectedFiles[i], this.selectedFiles[i].name); 
    }
    this.cId=this.caterer.catererId.toString();
    this.uploadImage.append('catererId',this.cId);
    console.log(this.uploadImage);
    this.httpClient.post('http://localhost:8080/uploadvenuephoto', this.uploadImage).subscribe((response) => {});
  }




}
