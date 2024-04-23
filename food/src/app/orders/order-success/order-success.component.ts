import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart/cart.service';
// import { CartItem } from '../../cart/cart.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { OrderDetailsService } from 'src/app/Services/order-details.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent {
  // transactionId!: string;
  // items!: CartItem[];
  // total!: number;
  // address!: string;
  // showPrompt: boolean = false;
  // feedbackRating: number = 3;
  // orderId!: number;
  // private orderSuccessSubscription: Subscription;

  // constructor(
  //   private cartService: CartService,
  //   private router: Router,
  //   formBuilder: FormBuilder,
  //   private orderService: OrderDetailsService
  // ) {
  // }

  // ngOnInit(): void {
  //   this.orderSuccessSubscription = this.orderService.onOrderSuccess().subscribe(orderData => {
  //     this.orderId = orderData.orderId;
  //     this.transactionId = orderData.transactionId;
  //     this.items = orderData.items;
  //     this.total = orderData.total;
  //   });
  // }


}
