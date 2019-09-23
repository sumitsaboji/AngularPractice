import {Injectable} from '@angular/core'
import {HttpInterceptor} from '@angular/common/http'
import {AuthGuard} from './auth.guard'
@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor(private authGuard :AuthGuard)
    {

    }
    intercept(req,next)
    {
        debugger;
        let tokenizedReq = req.clone({
            setHeaders :{
                Authorization : 'Bearer ${authGuard.getToken()}'
            }
        })
        return next.handle(tokenizedReq);
    }
}