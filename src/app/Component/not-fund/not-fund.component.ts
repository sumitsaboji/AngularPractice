import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-not-fund',
  templateUrl: './not-fund.component.html',
  styleUrls: ['./not-fund.component.css']
})
export class NotFundComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
    debugger;
    var a = this.router.queryParams.subscribe(a=> {
      debugger;
      alert(a.serviceId);
      
    })
    var b = this.router.data.subscribe(v=>{
      debugger;

    })
  }
}
