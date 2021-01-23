import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService, Vendor, User} from '../service/httpclient.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  users!: Vendor[];
  fname!: string;
  password!: string;
  email!: string;
  mobilenumber!: string;
  category!: string;
  address!: string;
  zipcode!: Number;
  userCity:string;
  role!:number;
  gender:string='male';
  user:User=new User();
  vendor:Vendor;
  vendor1:Vendor=new Vendor();
  cpassword:string;
  isVendor:boolean=false;
  isRole:Number;
  public registerBtn = false;
  venue:string;
  decorator:string;
  pandit:string;
  dj: string;
  caterer:string;
  photography:string;

  constructor(
   
    private httpClientService: HttpClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  onSelect(mySelect: string){
    if(mySelect=="User"){
      this.isVendor=false;
      this.isRole=1;
    }else if(mySelect=="Vendor"){
      this.isVendor=true;
      this.isRole=2;      
    }
  }


  onSelectCetegory(myValue:string){
    this.category=myValue;
  }

  add() {  
    if(this.isRole==1){
    this.user = new User(0,this.fname, this.email, this.password,this.mobilenumber,this.gender,
      this.address,this.userCity,this.zipcode);
    this.httpClientService.createUser(this.user).subscribe(res => {  
      console.log(res);
      
      if(res!=null){
        this.httpClientService.userObj=res;
        this.user=this.httpClientService.userObj;
        sessionStorage.setItem('user',this.httpClientService.userObj.userFullName);
        console.log(this.user);
        this.router.navigate(['userhome']); 
      }else{
        alert("Email Id already Registered.. Please Login!!");
        this.router.navigate(['']);  
      }
      });


    }else if(this.isRole==2){
      alert("Vendor");
      this.vendor = new Vendor(0,this.fname,this.password, this.email,this.mobilenumber,
        this.gender,this.category,this.address,this.zipcode,this.userCity);
        
        
        this.httpClientService.createVendor(this.vendor).subscribe(res=>{

          if(res!=null){
            console.log(res);
            this.httpClientService.vendorObj= res;
            sessionStorage.setItem('vendor',this.httpClientService.vendorObj.vendorFullName);
            alert(this.httpClientService.vendorObj.vendorId);
            this.goToService(this.category);
          }else{
            console.log(res);
              alert("Email Id already Registered.. Please Login");
              this.router.navigate(['']);
          }
          
        });
        
      }
  }


  

  goToService(category){
    //alert(this.httpClientService.vendorObj)
    
    alert(category);

    this.router.navigate([category]);
  }


}
