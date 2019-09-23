import { DoCheck, AfterContentInit, Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { ShareService } from '../../Service/share.service'
import { UserData } from 'src/app/Model/Userinfo';

@Component({
  selector: 'app-client-one',
  templateUrl: './client-one.component.html',
  styleUrls: ['./client-one.component.css']
})
export class ClientOneComponent implements OnInit, OnChanges,DoCheck,
AfterContentInit {
   
  @Input() InputString1 : string;
  //InputString
   constructor(){
     console.log("Construcotr Call");
   }

   ngOnChanges(){
     console.log("ngOnChanges Call");
     
   }

   ngOnInit(){
     console.log("ngOnInit Call");
   }

   ngDoCheck(){
     console.log("ngDoCheck Call");
   }

   ngAfterContentInit(){
     console.log("ngAfterContentInit Call");
   }
   ChildButton()
   {
     
   }
}
