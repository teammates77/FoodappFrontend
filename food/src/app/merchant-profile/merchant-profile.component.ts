import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-merchant-profile',
  templateUrl: './merchant-profile.component.html',
  styleUrls: ['./merchant-profile.component.scss']
})
export class MerchantProfileComponent implements OnInit {
  isLoggedIn: boolean = false;
  displayName: string = '';
  constructor(private router: Router,private route: ActivatedRoute) {}
  ngOnInit(): void {
var userData=JSON.parse(sessionStorage.getItem('merchantId'));

if(userData){
this.isLoggedIn=true

}else{
  this.isLoggedIn=false;
}

}
loginMerchant(): void {
    this.router.navigate(['/merchant-login']);
    
  }
  onLogout() {
    this.isLoggedIn = false;
    sessionStorage.clear();
    this.router.navigate(['/merchant-login'])
    
  }
  
  // visitProfile() {
  //   let _name: string;
  //   this.router.navigate(['user-profile']);
  
  // }
  // onMyCart() {
  //   this.router.navigate(['cart']);
  // }
  // onMyOrders() {
  //   this.router.navigate(['my-orders']);
  // }

  }
  

