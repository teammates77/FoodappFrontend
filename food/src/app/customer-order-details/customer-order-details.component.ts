import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../Services/order-details.service';
import { UserOrdersDTO } from '../models/orderDetails';

@Component({
  selector: 'app-customer-order-details',
  templateUrl: './customer-order-details.component.html',
  styleUrls: ['./customer-order-details.component.scss']
})
export class CustomerOrderDetailsComponent implements OnInit {
  userOrders: UserOrdersDTO[] = [];
  orderAccepted: boolean = false;

  constructor(private orderDetailsService: OrderDetailsService) { }

  ngOnInit(): void {
    const userDataString = sessionStorage.getItem('userId');
    if (userDataString) {
      const userId = JSON.parse(userDataString).userId;
      this.orderDetailsService.viewOrderOfCustomer(userId).subscribe(
        (userOrders: UserOrdersDTO[]) => {
          this.userOrders = userOrders;
        },
        error => {
          console.error('Error fetching user orders:', error);
        }
      );
    } else {
      console.error('User ID not found in sessionStorage');
    }
  }
  updateOrderStatus(orderItemId: number, newStatus: string): void {
    this.orderDetailsService.updateDeliveryStatus(orderItemId, newStatus).subscribe(
      (updatedOrder: UserOrdersDTO) => {
        const index = this.userOrders.findIndex(order => order.orderItemId === updatedOrder.orderItemId);
        if (index !== -1) {
          this.userOrders[index] = updatedOrder;
        } else {
          console.error('Updated order not found in user orders:', updatedOrder);
        }
      },
      error => {
        console.error('Error updating order status:', error);
      }
    );
  }
}
