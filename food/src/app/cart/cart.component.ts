
import { CartService } from './cart.service';
import { FoodCart } from '../models/cart';
import { faTrash, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PaymentService } from '../Services/payment.service';
declare var Razorpay: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(private cartService: CartService,private router: Router,private paymentService: PaymentService,
    private route: ActivatedRoute,) {}

  cart: FoodCart; 
  faTrash = faTrash;
  faPlus = faPlus;
  faMinus = faMinus;
  form: any = {};
  totalAmount: number;

  ngOnInit(): void {
    const userIdString = sessionStorage.getItem('userId');
    if (!userIdString) {
      console.error('User ID not found in session storage');
      return;
    }

    const userId = JSON.parse(userIdString);
    if (!userId || !userId.userId) {
      console.error('User ID not found in session storage');
      return;
    }

    const userIdValue = userId.userId;
    this.viewCartOfUser(userIdValue);
  }

  viewCartOfUser(userId: number): void {
    this.cartService.viewCartOfUser(userId).subscribe(
      cart => {
        this.cart = cart;
      },
      error => {
        console.error('Error fetching cart:', error);
      }
    );
  }

  
  increaseOrReduceQuantityOfItem(itemId: number, quantity: number): void {
    const userIdString = sessionStorage.getItem('userId');
    if (!userIdString) {
      console.error('User ID not found in session storage');
      return;
    }

    const userId = JSON.parse(userIdString);
    if (!userId || !userId.foodCartId) {
      console.error('Food Cart ID not found in session storage');
      return;
    }

    const cartId = userId.foodCartId;

    this.cartService.increaseOrReduceQuantityOfItem(cartId, itemId, quantity)
      .subscribe(updatedCart => {
        this.cart = updatedCart;
      }, error => {
        console.error('Error updating quantity:', error);
      });
  }
  
  removeItemFromCart(cartItemId: number): void {
    this.cartService.removeItemFromCart(cartItemId)
      .subscribe(
        updatedCart => {
          this.cart = updatedCart;
        },
        error => {
          console.error('Error removing item from cart:', error);
        }
      );
    }
     
    checkout(): void {
      if (this.cart && this.cart.totalCost) {
        sessionStorage.setItem('totalAmount', JSON.stringify(this.cart.totalCost));
        this.router.navigate(['/address-info']);
      } else {
        console.error('Cart or totalCost is not defined.');
      }
    }
    
    
  }