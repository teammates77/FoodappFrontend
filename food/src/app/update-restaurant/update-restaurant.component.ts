import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MerchantRestaurantService } from '../merchant-restaurant.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.scss']
})
export class UpdateRestaurantComponent implements OnInit {
  restaurantForm: FormGroup;
  restaurantData: any;

  constructor(
    private fb: FormBuilder,
    private merchantRestaurantService: MerchantRestaurantService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    // Retrieve restaurant data from session storage
    const storedRestaurantData = sessionStorage.getItem('restaurantData');
    if (storedRestaurantData) {
      this.restaurantData = JSON.parse(storedRestaurantData);
      // Patch the form with the retrieved data
      this.restaurantForm.patchValue(this.restaurantData);
    }
  }

  initForm(): void {
    // Initialize your form as before
    this.restaurantForm = this.fb.group({
      merchantId: [{ value: '', disabled: true }],
      restaurantId: [{ value: '', disabled: true }],
      restaurantName: ['', Validators.required],
      managerName: ['', Validators.required],
      contact: ['', Validators.required],
      addressLine: ['',Validators.required],
      city: [''],
      state: [''],
      country: [''],
      pinCode: [''],
      restaurant_image_Url: ['']
    });
  }

  updateRestaurant(): void {
    const updatedRestaurantData = { ...this.restaurantForm.value };
    updatedRestaurantData.restaurantId = this.restaurantData.restaurantId;
    updatedRestaurantData.merchantId = this.restaurantData.merchantId;
  
    this.merchantRestaurantService.updateRestaurant(updatedRestaurantData).subscribe({
      next: (data: any) => {
        console.log('Restaurant updated successfully:', data);
        Swal.fire({
          icon: 'success',
          title: 'Restaurant Updated',
          text: 'Restaurant details have been updated successfully.'
        });
  
        // Fetch updated restaurant data and patch the form with it
        this.merchantRestaurantService.getRestaurantByMerchantId(this.restaurantData.merchantId).subscribe({
          next: (updatedData: any) => {
            console.log('Updated restaurant data:', updatedData);
            // Patch the form with the retrieved data
            this.restaurantForm.patchValue(updatedData);
            // Update the local restaurantData object with the updated data
            this.restaurantData = updatedData;
            // Update session storage with the updated data
            sessionStorage.setItem('restaurantData', JSON.stringify(updatedData));
            // Check if session storage is updated
            console.log('Data stored in session storage:', sessionStorage.getItem('restaurantData'));
          },
          error: (error) => {
            console.error('Error fetching updated restaurant data:', error);
          }
        });
      },
      error: (error) => {
        console.error('Error updating restaurant:', error);
        Swal.fire({
          icon: 'error',
          title: 'Update Failed',
          text: 'An error occurred while updating restaurant details. Please try again later.'
        });
      }
    });
  }



  onCancel(): void {
    this.router.navigate(['/merchant-dashboard']);
  }
}
