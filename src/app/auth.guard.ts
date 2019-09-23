import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {Router,RouterModule} from  '@angular/router'
import { ArrayType } from '@angular/compiler/src/output/output_ast';
import {ShareService} from './Service/share.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private routes:Router, private service:ShareService)
    {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):   boolean {
      debugger;
      if(localStorage.getItem("tokenLocal")!= null)
      {
        let roles = next.data["roles"] as Array<string>;
        if(roles)
        {
            var match = this.service.getRoles(roles);
            if(match)
            {
              return true;
            }
            else{
              this.routes.navigate(["/notFound"]);
            }
        }
        return true;
      }
      else{
        this.routes.navigate(['/login'])
        return true;
      }
  }

  getToken()
  {
    return localStorage.getItem("tokenLocal");
  }
}
