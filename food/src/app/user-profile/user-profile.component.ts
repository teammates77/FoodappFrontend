import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userProfileForm: FormGroup;
  userId: number;
  user: any = {};
  successMessage: string = '';
  errorMessage: string = '';
  addressId: number; 

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.userId = JSON.parse(sessionStorage.getItem('userId')).userId; 
    this.getUserDetails();
  }

  initForm(): void {
    this.userProfileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
   
    });
  }

  getUserDetails(): void {
    this.userService.getUserById(this.userId).subscribe({
      next: (data: any) => {
        this.user = data;
        this.userProfileForm.patchValue({
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
          phoneNumber: this.user.phoneNumber,
    
        });
      },
      error: (error: any) => {
        console.error('Error fetching user details:', error);
      }
    });
  }
  

  updateUser(): void {
    const userData = this.userProfileForm.value;
    this.userService.updateUser(this.userId, userData).subscribe({
      next: (data: any) => {
        console.log('User updated successfully:', data);
        Swal.fire({
          icon: 'success',
          title: 'Profile Updated',
          text: 'Your profile has been updated successfully.'
        });
      },
      error: (error) => {
        console.log('Error updating user:', error);
        Swal.fire({
          icon: 'error',
          title: 'Profile Update Failed',
          text: 'An error occurred while updating your profile. Please try again later.'
        });
      }
    });
  }



  onCancel(): void {
    this.router.navigate(['/dashboard']);
  }
}
