
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { SearchService } from '../Services/search.service';
import { LoginService } from '../Services/login.service';
export class register {
  email: string;
  password: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  displayName: string = '';
 isLoginPage: any;

  constructor( private router: Router, public userService:UserService,private searchService: SearchService,
    private loginservice: LoginService) {
     }

  ngOnInit(): void 
  {
   }

     onLogin(){
        this.router.navigate(['/common-login-dashboard']).then((next)=>{
          this.isLoggedIn = true        })
     }
    
  onLogOut() {
    this.loginservice.logout();
    this.router.navigate(['/login']);
  }
  
  visitProfile() {
    let _name: string;
    this.router.navigate(['user-profile']);
  
  }
 
  onMyOrders() {
    this.router.navigate(['my-orders']);
  }


}
