import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-login-dashboard',
  templateUrl: './common-login-dashboard.component.html',
  styleUrls: ['./common-login-dashboard.component.scss']
})
export class CommonLoginDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToCustomerLogin() {
    this.router.navigate(['/login']);
  }

  navigateToMerchantLogin() {
    this.router.navigate(['/merchant-login']);
  }

}
