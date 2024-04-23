import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResetService } from '../reset.service';
import Swal from 'sweetalert2';
 
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
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
 
    this.resetService.setPassword(
      this.email.value,
      this.newPassword.value,
      this.confirmPassword.value
    ).subscribe({
      next: response => {
        console.log(response);
        this.router.navigate(['/login']);
      },
      error: error => {
        if (error.status == 200) {
          Swal.fire({
            icon: 'success',
            title: '',
            text: 'Password Reset Successfully!'
          });
          this.router.navigate(['/login']);
        }
        console.error('Error setting password:', error);
        this.errorMessage = error.error.message;
      }
    });
  }
}