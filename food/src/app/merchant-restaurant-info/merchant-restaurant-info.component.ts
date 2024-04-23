import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MerchantRestaurantService } from '../merchant-restaurant.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

export class MerchantRestaurant {
  merchantId: number;
  restaurantName: string;
  managerName: string;
  contact: string;
  addressLine: string;
  city: string;
  state: string;
  country: string;
  pinCode: string;
  restaurant_image_Url: string;
}

@Component({
  selector: 'app-merchant-restaurant-info',
  templateUrl: './merchant-restaurant-info.component.html',
  styleUrls: ['./merchant-restaurant-info.component.scss']
})
export class MerchantRestaurantInfoComponent implements OnInit {
  merchantForm: FormGroup;
  merchant: MerchantRestaurant;
  merchantId: number;


  constructor(private fb: FormBuilder, private merchantrestaurantService: MerchantRestaurantService, private router: Router) {
    this.merchant = {} as MerchantRestaurant;
  }

  ngOnInit(): void {
    this.initForm();
    this.setMerchantIdFromSession();
  }

  initForm(): void {
    this.merchantForm = this.fb.group({
      merchantId: [{ value: '', disabled: true }],
      restaurantName: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^[a-zA-Z\s]+$/)]],
      managerName: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^[a-zA-Z\s]+$/)]],
      contact: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^\d+$/) ]],
      addressLine: ['', Validators.required],
      city: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^[a-zA-Z]+$/)]],
      state: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^[a-zA-Z]+$/)]],
      country: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^[a-zA-Z]+$/)]],
      pinCode: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^\d+$/)]],
      restaurant_image_Url: ['', Validators.required]
    });
  }

  setMerchantIdFromSession(): void {
    const merchantInfo = sessionStorage.getItem('merchantId');
    if (merchantInfo) {
      const merchantObject = JSON.parse(merchantInfo);
      this.merchantId = merchantObject.merchantId;
      this.merchantForm.get('merchantId').setValue(this.merchantId);
    }
  }

  submitRestaurant(): void {
    if (this.merchantForm.valid) {
      const merchantId = this.merchantForm.get('merchantId').value;
      const restaurantData: MerchantRestaurant = this.merchantForm.value;
      this.merchantrestaurantService.submitRestaurantData(restaurantData, merchantId)
        .subscribe({
          next: (response) => {
            console.log('Restaurant added successfully:', response);
            sessionStorage.setItem('restaurantData', JSON.stringify(response));
            Swal.fire('Success', 'Restaurant added successfully', 'success');
            this.router.navigate(['/view-restaurant']);
          },
          error: (error) => {
            console.error('Error adding restaurant:', error);
            Swal.fire('Error', 'Failed to add restaurant', 'error');
          }
        });
    } else {
      this.merchantForm.markAllAsTouched();
    }
  }
}
