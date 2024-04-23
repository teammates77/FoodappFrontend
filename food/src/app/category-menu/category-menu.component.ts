import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';
import { CartService } from '../cart/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss']
})
export class CategoryMenuComponent implements OnInit {

  itemsByCategory: any[] = [];

  constructor(private itemService: ItemService, private route: ActivatedRoute,  private cartService: CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const categoryId = params['categoryId'];
      if (categoryId) {
        this.viewItemByCategory(parseInt(categoryId));
      }
    });
  }

  viewItemByCategory(categoryId: number): void {
    this.itemService.viewItemByCategory(categoryId).subscribe(
      (data) => {
        console.log('Menu items for category:', data);
        this.itemsByCategory = data;
      },
      (error) => {
        console.error('Error fetching items by category:', error);
      }
    );
  }

  addToCart(itemId: number,restaurantId:number): void {
    console.log('Adding item to cart:', itemId);
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
        }
      } else {
        console.error('userData is missing from session storage');
  
      }
        }
  }


