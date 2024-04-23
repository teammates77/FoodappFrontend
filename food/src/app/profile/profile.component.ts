import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isLoggedIn: boolean = false;
  displayName: string = '';
  constructor(private router: Router,private route: ActivatedRoute) {}
  ngOnInit(): void {
var userData=JSON.parse(sessionStorage.getItem('userId'));

if(userData){
this.isLoggedIn=true

}else{
  this.isLoggedIn=false;
}

}
  onLogin(): void {
    this.router.navigate(['/common-login-dashboard']);
    
  }
  onLogout() {
    this.isLoggedIn = false;
    sessionStorage.clear();
    this.router.navigate(['/login'])
    
  }
  
  visitProfile() {
    let _name: string;
    this.router.navigate(['user-profile']);
  
  }
  onMyCart() {
    this.router.navigate(['cart']);
  }
  onMyOrders() {
    this.router.navigate(['/customer-order-details']);
  }

  }
  
