import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForgotService } from '../forgot.service';
 
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  emailForm!: FormGroup;
  errorMessage: string = '';
 
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private forgotService: ForgotService
  ) {}
 
  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
 
  get email() {
    return this.emailForm.get('email');
  }
 
  onSubmit() {
    if (this.emailForm.invalid) {
      return;
    }
 
    this.forgotPassword();
  }
 
forgotPassword() {
    const email = this.email?.value;
    this.forgotService.forgotPassword(email).subscribe(
      () => {
        console.log('Reset link sent successfully');
        this.router.navigate(['/reset-password']);
      },
      error => {
        console.error('Error sending reset link:', error);
        if (error.status == 200) {
          console.log('Reset link sent successfully');
          this.router.navigate(['/reset-password']);
        } else {
          this.errorMessage = 'Error sending reset link';
        }
      }
    );
  }
 
}