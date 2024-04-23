import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MerchantLoginService } from '../merchant-login.service';
import { MerchantRestaurantService } from '../merchant-restaurant.service'; // Import MerchantRestaurantService
import Swal from 'sweetalert2';

export class MerchantReg {
  email: string;
  password: string;
}

@Component({
  selector: 'app-merchant-login',
  templateUrl: './merchant-login.component.html',
  styleUrls: ['./merchant-login.component.scss']
})
export class MerchantLoginComponent {
  loginform!: FormGroup;
  merchant: MerchantReg;
  loading = false;
  submitted = false;
  error = '';
  isLoggedIn: boolean = false;
  displayName = '';

  constructor(
    private router: Router,
    private merchantloginservice: MerchantLoginService,
    private merchantRestaurantService: MerchantRestaurantService // Inject MerchantRestaurantService
  ) {
    this.merchant = {} as MerchantReg;
  }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      password: new FormControl(this.merchant.password, [
        Validators.required,
        Validators.minLength(6),
      ]),
      email: new FormControl(this.merchant.email, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
        Validators.pattern(
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        ),
      ]),
    });
  }

  get email() {
    return this.loginform.get('email')!;
  }

  get password() {
    return this.loginform.get('password');
  }

  loginMerchant() {
    this.merchant = this.loginform.value;
    this.merchantloginservice.loginMerchant(this.merchant).subscribe({
      next: (data) => {
        const merchant = data;
        // sessionStorage.setItem('merchantId', JSON.stringify(merchant.merchantId));
        sessionStorage.setItem('merchantId', JSON.stringify(merchant)); 
        this.isLoggedIn = true;

   
        this.merchantRestaurantService.getRestaurantByMerchantId(merchant.merchantId).subscribe({
          next: (restaurantData) => {
            sessionStorage.setItem('restaurantData', JSON.stringify(restaurantData));
            this.router.navigate(['/merchant-dashboard'], { queryParams: { isLoggedIn: 'true' } });
          },
          error: (error) => {
            console.error('Error fetching restaurant data:', error);
            this.router.navigate(['/merchant-dashboard'], { queryParams: { isLoggedIn: 'true' } });
          }
        });
      },
      error: (e) => {
        console.error(e);
        if (e.status === 200) {
          this.isLoggedIn = true;
          this.router.navigate(['/merchant-dashboard'], { queryParams: { isLoggedIn: 'true' } });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Invalid Credentials!'
          });
        }
      }
    });
  }

  forgotPassword() {
    this.router.navigate(['/mer-forgot']);
  }

  merchantReg() {
    this.router.navigate(['/merchant-reg']);
  }

}
