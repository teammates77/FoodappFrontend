import { Component, OnInit } from '@angular/core';
import { MerchantRestaurantService } from '../merchant-restaurant.service'; 
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../models/item.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-restaurant-items',
  templateUrl: './view-restaurant-items.component.html',
  styleUrls: ['./view-restaurant-items.component.scss']
})
export class ViewRestaurantItemsComponent  {
  items: Item[];

  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const restaurantDataString = sessionStorage.getItem('restaurantData'); 
    if (!restaurantDataString) {
      console.error('restaurantData not found in session storage');
      return; 
    }
  

    const restaurantData = JSON.parse(restaurantDataString);
    
   
    if (!restaurantData || isNaN(Number(restaurantData.restaurantId))) {
      console.error('Invalid restaurantData:', restaurantData);
      return; 
    }
    this.itemService.viewItemByRestaurant(Number(restaurantData.restaurantId)).subscribe(
      items => {
        // console.log('items for restaurant:', items);
        this.items = items;
      },
      error => {
        console.error('Error fetching items:', error);
   
      }
    );
  }
  

 
onUpdate(restaurantId: number) {
  this.router.navigate(['/update-restaurant-items', restaurantId]);
}

onDelete(itemId: number) {
  this.itemService.removeItem(itemId).subscribe(
    removed => {
      if (removed) {
        this.items = this.items.filter(item => item.itemId !== itemId); // Update items list after successful removal
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Item removed successfully!'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to remove item!'
        });
      }
    },
    error => {
      console.error('Error removing item:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to remove item!'
      });
    }
  );
}  
  
 
}
