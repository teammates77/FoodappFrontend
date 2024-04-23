import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { LoginService } from '../Services/login.service';
import Swal from 'sweetalert2';
export class Register {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  isLoginPage: boolean;
  loginform!: FormGroup;
  user: Register;
  loading = false;
  submitted = false;
  error = '';
  isLoggedIn: boolean = false;
  displayName=''

  constructor(private router: Router, private loginservice:LoginService) {
    this.user = {} as Register;
  }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/),
      ]),
      email: new FormControl(this.user.email, [
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

  public signin(): void {
    console.log(this.loginform.value);
  }

  loginUser() {
    this.user = this.loginform.value
    this.loginservice.loginUser(this.user).subscribe({
      next: (data) =>{
        const user = data; 
        sessionStorage.setItem('userId', JSON.stringify(user)); 
        this.isLoggedIn = true
        console.log(this.isLoggedIn)
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Login successful!'
        }).then(() => {
        this.router.navigate(['/dashboard'] );
        })
      },
      error: (e) => {
        console.log(e);
        if (e.status === 200) {
          this.isLoggedIn = true;
          console.log(this.isLoggedIn)
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Login successful!'
          }).then
          this.router.navigate(['/dashboard'])
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Invalid Credentials!'
          }).then
        }
      }
  });
  }
  
  forgotPassword() {
    this.router.navigate(['/forgot'])
  }
 
  register() {
    this.router.navigate(['/register'])
  }

}
