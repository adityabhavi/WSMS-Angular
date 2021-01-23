import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Decorator, DecoratorService } from 'src/app/service/decorator.service';
import { HttpClientService } from 'src/app/service/httpclient.service';

@Component({
  selector: 'app-decoratorhome',
  templateUrl: './decoratorhome.component.html',
  styleUrls: ['./decoratorhome.component.css']
})
export class DecoratorhomeComponent implements OnInit {

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
  decorator:Decorator=new Decorator();
  dId:string;
  
  constructor(
    private httpClientService: HttpClientService,
    private decoratorService: DecoratorService,
    private httpClient: HttpClient,
  ) { }

  ngOnInit( ): void {
    // this.decorator=this.decoratorService.decoratorObj;
    // this.httpClient.get('http://localhost:8080/getalldecoratorphotos?catererId='+124)
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
    this.dId=this.decorator.decoratorId.toString();
    this.uploadImage.append('catererId',this.dId);
    console.log(this.uploadImage);
    this.httpClient.post('http://localhost:8080/uploaddecoratorphoto', this.uploadImage).subscribe((response) => {});
  }

}
