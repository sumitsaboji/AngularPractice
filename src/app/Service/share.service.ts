import { Injectable, } from '@angular/core';
import {Subject} from  'rxjs'
import { Observable } from 'rxjs/internal/Observable';
import { UserData } from 'src/app/Model/Userinfo';
import { HttpClient,HttpBackend, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
private _MessaheFromChild = new Subject<string>();
ChildMessage$ =  this._MessaheFromChild.asObservable()

private httpToken:HttpClient
  constructor(private http:HttpClient,handler: HttpBackend) { 
    this.httpToken = new HttpClient(handler);
  }
  getToken(username:string,password:string):Observable<UserData>
  {
    debugger;
    return this.httpToken.post<UserData>("http://localhost:60393/token", "grant_type=password&username=" + username + "&password=" + password, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
  }

  sendMessage(Message:string)
  {
    debugger;
    this._MessaheFromChild.next(Message);
  }
 
  getRoles(roles):boolean
  {
    debugger;
    var isMatch = false;
    var userRoles :string[] = JSON.parse(localStorage.getItem("role"));
    roles.forEach(element => {
      if(userRoles.indexOf(element) > -1){
        isMatch = true;
        return isMatch;
      }
    });
    return isMatch;
  }

  callMehtod() : Observable<any>
  {
    debugger;
   return this.http.get("http://localhost:60393/api/GetDataString?s=sa"); 
  }

 
}
