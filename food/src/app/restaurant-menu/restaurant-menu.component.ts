
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { ItemService } from '../item.service';
// import { CartService } from '../cart/cart.service';
// import Swal from 'sweetalert2';

// @Component({
//   selector: 'app-restaurant-menu',
//   templateUrl: './restaurant-menu.component.html',
//   styleUrls: ['./restaurant-menu.component.scss']
// })
// export class RestaurantMenuComponent implements OnInit {
//   itemsByRestaurant: any[] = [];
//   cartItems: any[] = []; 

//   constructor(private itemService: ItemService, private route: ActivatedRoute,private cartService: CartService) { }
 

//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       const restaurantId = params['restaurantId'];
//       if (restaurantId) {
//         this.viewItemByRestaurant(parseInt(restaurantId));
//       }
//     });
//   }

//   viewItemByRestaurant(restaurantId: number): void {
//     this.itemService.viewItemByRestaurant(restaurantId).subscribe(
//       (data) => {
//         console.log('Menu items for restaurant:', data);
//         this.itemsByRestaurant = data;
//       },
//       (error) => {
//         console.error('Error fetching items by restaurant:', error);
//       }
//     );
//   }

//   // addItemToCart(item: any) {
//   //   // Add item to the cart
//   //   this.cartItems.push(item);
//   //   // Show a popup message using SweetAlert
//   //   Swal.fire({
//   //     icon: 'success',
//   //     title: 'Item added successfully!',
//   //     showConfirmButton: false,
//   //     timer: 1500 // milliseconds
//   //   });
//   // }
  
// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';
import { CartService } from '../cart/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent implements OnInit {
  itemsByRestaurant: any[] = [];
  cartItems: any[] = [];
  restaurantId: number; // Variable to store the restaurantId

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.restaurantId = parseInt(params['restaurantId']); // Store the restaurantId from the route
      if (this.restaurantId) {
        this.viewItemByRestaurant(this.restaurantId);
      }
    });
  }

  viewItemByRestaurant(restaurantId: number): void {
    this.itemService.viewItemByRestaurant(restaurantId).subscribe(
      (data) => {
        console.log('Menu items for restaurant:', data);
        this.itemsByRestaurant = data;
      },
      (error) => {
        console.error('Error fetching items by restaurant:', error);
      }
    );
  }

  addToCart(itemId: number,restaurantId:number): void {
const userDataString = sessionStorage.getItem('userId');

if (userDataString) {
  const userData = JSON.parse(userDataString);
  const foodCartId = userData.foodCartId;

  if (foodCartId && restaurantId && itemId) {
    this.cartService.addItemToCart(parseInt(foodCartId), restaurantId, itemId).subscribe({
      next: (data: any) => {
        console.log('Item added to cart:', data);
        Swal.fire({
          icon: 'success',
          title: 'Item added to cart',
          showConfirmButton: false,
    
        });
      },
      error: (error) => {
        console.error('Error adding item to cart:', error);
  
      }
    });
  } else {
    console.error('foodCartId, restaurantId, or itemId is missing or invalid');
    // Handle the case where any of the required data is missing or invalid
  }
} else {
  console.error('userData is missing from session storage');
  // Handle the case where userData is missing from session storage
}
  }
  }
