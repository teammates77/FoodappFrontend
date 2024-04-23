import { Component, OnInit } from '@angular/core';
import { MerchantLoginService } from '../merchant-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merchant-header',
  templateUrl: './merchant-header.component.html',
  styleUrls: ['./merchant-header.component.scss']
})
export class MerchantHeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  displayName: string = '';
 isLoginPage: any;

  constructor( private router: Router, 
    private merchantloginService: MerchantLoginService) {
     }

  ngOnInit(): void 
  {
   }

   loginMerchant(){
        this.router.navigate(['/merchant-login']).then((next)=>{
          this.isLoggedIn = true        })
     }
    
  onLogOut() {
    this.merchantloginService.logout();
    this.router.navigate(['/merchant-login']);
  }
  
  // visitProfile() {
  //   let _name: string;
  //   this.router.navigate(['user-profile']);
  
  // }
 
  // onMyOrders() {
  //   this.router.navigate(['my-orders']);
  // }
}
