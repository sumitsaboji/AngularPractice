import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from  '@angular/router'
import { AppComponent } from './app.component';
import { HighlightDirective } from './Directive/highlight.directive';
import {MultiplierPipe} from './Pipe/pipe';
import {ShareService} from  './Service/share.service';
import { LoginComponent } from './Component/login/login.component';
// import { DashboardComponent } from './component/dashboard/dashboard.component'
import { AuthGuard } from 'src/app/auth.guard';
import { HttpClient,HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AdminComponent } from './Component/admin/admin.component';
import { ClientOneComponent } from './Component/client-one/client-one.component';
import { ClientTwoComponent } from './Component/client-two/client-two.component';
import { NotFundComponent } from 'src/app/Component/not-fund/not-fund.component';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {Interceptor} from './Interceptor'
const route : Routes =[
  
  // {path:"dashboard", component:DashboardComponent},
  {path:"login", component:LoginComponent},
  {path:"clientone",component:ClientOneComponent,canActivate:[AuthGuard], data:{roles:["client1"]}},
  {path:"clienttwo",component:ClientTwoComponent,canActivate:[AuthGuard], data:{roles:["client2"]}},

  {path:"notFound",component:NotFundComponent,data:{some_Data:"asas"}}
]

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    MultiplierPipe,
    LoginComponent,
    //DashboardComponent,
    AdminComponent,
    ClientOneComponent,
    ClientTwoComponent,
    NotFundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   RouterModule.forRoot(route)
  ],
  providers: [ShareService,AuthGuard,CookieService,{
    provide : HTTP_INTERCEPTORS,
    useClass:Interceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
