import { Component, OnInit } from '@angular/core';
import { MerchantRestaurantService } from '../merchant-restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merchant-dashboard',
  templateUrl: './merchant-dashboard.component.html',
  styleUrls: ['./merchant-dashboard.component.scss']
})
export class MerchantDashboardComponent implements OnInit {
  isRestaurantDataPresent: boolean = false;
imageUrls: any;

  constructor(private merchantRestaurantService: MerchantRestaurantService, private router: Router) { }

  ngOnInit(): void {
  
    const merchantId = this.getLoggedInMerchantId();


    this.merchantRestaurantService.getRestaurantByMerchantId(merchantId).subscribe(
      (restaurantData: any) => {
        this.isRestaurantDataPresent = !!restaurantData;
      },
      (error: any) => {
        console.error('Error fetching restaurant data:', error);
      }
    );
  }

  getLoggedInMerchantId(): number | null {
    const merchantInfo = sessionStorage.getItem('merchantId');
    if (merchantInfo) {
      const merchantObject = JSON.parse(merchantInfo);
      return merchantObject.merchantId;
    } else {
      return null; 
    }
  }
  
}
