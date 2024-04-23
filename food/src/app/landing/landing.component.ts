import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  isCustomerLoggedIn: boolean = false;
  isMerchantLoggedIn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  

}
