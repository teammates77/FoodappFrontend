import { Component, OnInit } from '@angular/core';
import { MerchantRestaurantService } from '../merchant-restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../models/restaurant';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-restaurant',
  templateUrl: './view-restaurant.component.html',
  styleUrls: ['./view-restaurant.component.scss']
})
export class ViewRestaurantComponent implements OnInit {
  restaurant: Restaurant;

  constructor(private restaurantService: MerchantRestaurantService, private router: Router) { }

  ngOnInit(): void {
    const merchantDataString = sessionStorage.getItem('merchantId');
    if (!merchantDataString) {
      console.error('merchantData not found in session storage');
      return;
    }
  
    const merchantData = JSON.parse(merchantDataString);
    const merchantId = merchantData.merchantId;
  
    if (!merchantId) {
      console.error('Invalid merchantId:', merchantId);
      return;
    }
  
    // Fetch restaurant details by merchantId
    this.restaurantService.viewRestaurantsByMerchantId(merchantId).subscribe(
      restaurant => {
        this.restaurant = restaurant;
      },
      error => {
        console.error('Error fetching restaurant details:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to fetch restaurant details!'
        });
      }
    );
  }
  

  onUpdate(restaurantId: number): void {
    this.router.navigate(['/update-restaurant', restaurantId]);
  }

  onDelete(restaurantId: number): void {
    this.restaurantService.removeRestaurant(restaurantId).subscribe(
      removedRestaurant => {
        if (removedRestaurant) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Restaurant removed successfully!'
          }).then(() => {
            // Optionally, navigate to a different route or refresh the current page
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to remove restaurant!'
          });
        }
      },
      error => {
        console.error('Error removing restaurant:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to remove restaurant!'
        });
      }
    );
  }
    
  }


