import { Component, OnInit,HostListener } from '@angular/core';
import { ShareService } from '../../Service/share.service'
import { Router, RouterModule } from '@angular/router'
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Observable,Subject ,BehaviorSubject,ReplaySubject } from 'rxjs';
import {UserData} from '../../Model/Userinfo'
import {HttpClient,HttpErrorResponse} from '@angular/common/http'
import {FormControl,FormGroup,FormBuilder,NgForm,Validators} from '@angular/forms'

import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
signupForm:FormGroup;
FirstName:string="";
LastName:string="";
Email:string="";
private data : UserData
private results:string[] =[];
  private values: Array<any> = [] =[];
  private anyErrors: boolean;
  private finished: boolean;
  
   Student : any[]
  constructor(private formBuilder:FormBuilder,private _cookieService:CookieService,private service: ShareService, private routes: Router, private http:HttpClient) {
   this.signupForm = formBuilder.group({
    fname:['',Validators.required],
    lname:['',Validators.required],
    emailid:['',Validators.required]
     });
    
   }
  public expiredDate:string ;
  private term = new FormControl();
@HostListener('click')



  ngOnInit() {
    debugger;
      console.log("var = "+k);
    var k = 10;
    
    
    //console.log("let = "+y);
    let y =10   
  }
  
  routing()
  {
    debugger;
      this.routes.navigate(["notFound"], { queryParams: { serviceId: 1} });
  }
  clickFun()
  {
    
    //alert("Hi");
  }
  
  
  
  check(username: string, password: string) {
    this.service.getToken(username, password).subscribe(result => {
      debugger;
      this.data = result;
      localStorage.setItem("tokenLocal", this.data.access_token)
      sessionStorage.setItem("tokenSession", this.data.access_token)
       localStorage.setItem("role", this.data.role)
      
    this._cookieService.put("TokenCooke",this.data.access_token)
      if (username == "client1") {
        this.routes.navigate(["/clientone"])
      }
      if (username == "client2") {
        this.routes.navigate(["/clienttwo"])
      }
      else if (username == "admin"){
        this.routes.navigate(["/dashboard"])
      }
    })
  }

  serach(term:any)
  {
    debugger;
    let url = 'https://restcountries.eu/rest/v2/name/'+term;
      this.http.get(url).toPromise()
      .then((data:any) =>{
        debugger;
        console.log(data);
      this.results = data;
      })
  }

  GetNewStudent()
{

  this.Student =[
      {StudentID:1,
    StudentName :"a"
  },
  {StudentID:2,
    StudentName :"b"
  },
  {StudentID:3,
    StudentName :"c"
  },
  {StudentID:4,
    StudentName :"d"
  }
]

}
trackByStudentId(index:number,StudentData:any)
{
  return  StudentData.StudentID;
}

getCountryColor(CountryName:string)
{
  switch(CountryName)
  {
    case 'India':
      return 'green';
    case 'UK':
      return "red";
    case 'US':
      return "yellow"

  }
}

Register(regForm:any)
{

  var FirstName = regForm.controls.firstname.values;
  debugger;

}
PostData(signupForm:any)
{ 
  debugger;
  console.log(signupForm.control);

}
  
}
