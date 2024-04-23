import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../Services/order-details.service';
import { ItemsInRestaurantOrderDTO } from '../models/restaurantOrder';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.scss']
})
export class ViewOrdersComponent implements OnInit {

  orders: ItemsInRestaurantOrderDTO[] = [];

  constructor(private orderdetailsService: OrderDetailsService) { }

  ngOnInit(): void {
    this.fetchOrderDetails();
  }

  fetchOrderDetails(): void {
    const restaurantData = JSON.parse(sessionStorage.getItem('restaurantData'));
    const restaurantId = restaurantData.restaurantId;

    this.orderdetailsService.viewOrderOfRestaurant(restaurantId).subscribe(
      (response: ItemsInRestaurantOrderDTO[]) => {
        this.orders = response;
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }

}
