import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotService } from '../forgot.service';
 
@Component({
  selector: 'app-mer-forgot',
  templateUrl: './mer-forgot.component.html',
  styleUrls: ['./mer-forgot.component.scss']
})
export class MerForgotComponent implements OnInit {
 
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
     this.forgotService.forgotMerchantPassword(email).subscribe(
      () => {
        console.log('Reset link sent successfully');
        this.router.navigate(['/mer-reset']);
      },
      error => {
        console.error('Error sending reset link:', error);
        if (error.status == 200) {
          console.log('Reset link sent successfully');
          this.router.navigate(['/mer-reset']);
        } else {
          this.errorMessage = 'Error sending reset link';
        }
      }
    );
  }
 
}