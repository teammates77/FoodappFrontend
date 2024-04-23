import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MerchantRegService } from '../merchant-reg.service';

export class reg {
  merchantId:number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-merchant-reg',
  templateUrl: './merchant-reg.component.html',
  styleUrls: ['./merchant-reg.component.scss']
})
export class MerchantRegComponent {
  registrationform!: FormGroup;
  merchant: reg;
  loading = false;
  submitted = false;
  error = '';

  constructor(private router: Router, public merchantregService: MerchantRegService) {
    this.merchant = {} as reg;
  }

  ngOnInit(): void {
    this.registrationform = new FormGroup({
      firstName: new FormControl(this.merchant.firstName, [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern(/^[a-zA-Z]*$/),
      ]),
      lastName: new FormControl(this.merchant.lastName, [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern(/^[a-zA-Z]*$/),
      ]),
      phoneNumber: new FormControl(this.merchant.phoneNumber, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern(/^\d+$/),
      ]),
      password: new FormControl(this.merchant.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/),
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
    return this.registrationform.get('email')!;
  }

  get password() {
    return this.registrationform.get('password');
  }

  get firstName() {
    return this.registrationform.get('firstName');
  }

  get lastName() {
    return this.registrationform.get('lastName');
  }

  get phoneNumber() {
    return this.registrationform.get('phoneNumber');
  }

  registerMerchant() {
    this.merchant = this.registrationform.value
    this.merchantregService.registerMerchant(this.merchant).subscribe({
      next: (data) =>{
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Registration successful!'
        }).then
        this.router.navigate(['/merchant-login']);
      },
      error: (e) => {
        console.log(e);
        if (e.status === 200 || e.status === 201) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Registration successful!'
          }).then
          this.router.navigate(['/merchant-login']);
          
} 

        else {
          Swal.fire({
            icon: 'error',
            title: 'Oops',
            text: 'Email Id already exists!'
          }).then
          console.log("logged fail");
        }
      }
  });
  }

  merchantLogin() {
    this.router.navigate(['/merchant-login']);
  }

}
