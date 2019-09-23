import { Component,OnInit } from '@angular/core';
import { UserData } from 'src/app/Model/Userinfo';
import {FormControl,FormGroup,FormBuilder,NgForm,Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  textValue:string;
  SendValueToChild:string;
  constructor(){
    
  }
  ngOnInit()
  {

  }
  ClickButton()
  {

    this.SendValueToChild = this.textValue;
  }
 
}
