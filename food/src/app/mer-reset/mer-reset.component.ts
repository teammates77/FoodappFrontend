import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResetService } from '../reset.service';
 
@Component({
  selector: 'app-mer-reset',
  templateUrl: './mer-reset.component.html',
  styleUrls: ['./mer-reset.component.scss']
})
export class MerResetComponent implements OnInit {
 
  resetPasswordForm: FormGroup;
  errorMessage: string = '';
 
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private resetService: ResetService
  ) { }
 
  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }
 
  get email() {
    return this.resetPasswordForm.get('email');
  }
 
  get newPassword() {
    return this.resetPasswordForm.get('newPassword');
  }
 
  get confirmPassword() {
    return this.resetPasswordForm.get('confirmPassword');
  }
 
  passwordMatchValidator(formGroup: FormGroup) {
    const newPassword = formGroup.get('newPassword').value;
    const confirmPassword = formGroup.get('confirmPassword').value;
    if (newPassword !== confirmPassword) {
      formGroup.get('confirmPassword').setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('confirmPassword').setErrors(null);
    }
  }
 
  setPassword() {
    if (this.resetPasswordForm.invalid) {
      return;
    }
 
    this.resetService.setMerchantPassword(
      this.email.value,
      this.newPassword.value,
      this.confirmPassword.value
    ).subscribe({
      next: response => {
        console.log(response);
        this.router.navigate(['/merchat-login']);
      },
      error: error => {
        if (error.status == 200) {
          console.log('Password set successfully');
          this.router.navigate(['/merchant-login']);
        }
        console.error('Error setting password:', error);
        this.errorMessage = error.error.message;
      }
    });
  }
 
}