import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService, Vendor } from 'src/app/service/httpclient.service';
import { Venue, VenuePhoto, VenueService } from 'src/app/service/venue.service';

@Component({
  selector: 'app-venuehome',
  templateUrl: './venuehome.component.html',
  styleUrls: ['./venuehome.component.css']
})
export class VenuehomeComponent implements OnInit {

  selectedFiles: File[];
  retrievedImage : any;
  base64Data: any;
  retrieveResonse: any[];
  message: string;
  imageName: any;
  venuePhoto:VenuePhoto;
  uploadImage: FormData;
  imgs:any[];
  result:any[];
  venue!:Venue;
  vendor:Vendor=new Vendor();
  url: string[] = [];

  constructor(
    private httpClient: HttpClient,
    private venueService: VenueService,
    private router: Router,
    private httpClientService: HttpClientService,
    ) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('vendor')) {
      this.router.navigate(['']);
    } else {
      this.vendor = this.httpClientService.vendorObj;
      console.log(this.vendor);
      this.router.navigate(['venuehoome']);
    }
    this.venue=this.venueService.venueObj;
  }

  
  public onFileChanged(event) {
    this.selectedFiles = event.target.files;
  }


  onUpload() {
    this.uploadImage = new FormData();
    for(var i=0; i < this.selectedFiles.length; i++){
      this.uploadImage.append('files', this.selectedFiles[i], this.selectedFiles[i].name); 
    }
    this.uploadImage.append('venueId','123');
    console.log(this.uploadImage);
    this.httpClient.post('http://localhost:8080/uploadvenuephoto', this.uploadImage).subscribe((response) => {});
  }

  getImage() { 
    this.httpClient.get('http://localhost:8080/getallvenuephotos')
    .subscribe(res => {
        this.retrievedImage = res;
        for( let result of this.retrievedImage ){
          this.base64Data = result.picByte;
          this.url.push('data:image/jpeg;base64,' + this.base64Data);
        }
        console.log(res);
        }
    );
  }
}
