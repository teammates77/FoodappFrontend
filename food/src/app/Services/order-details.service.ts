import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemsInRestaurantOrderDTO } from '../models/restaurantOrder';
import { AddOrderDetailsDTO, UserOrdersDTO } from '../models/orderDetails';
import { FoodCart } from '../models/cart';
@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
 private apiUrl = 'http://localhost:8083/fooddelivery/orderdetails';

  constructor(private http: HttpClient) {}

  viewOrderOfRestaurant(restaurantId: number): Observable<ItemsInRestaurantOrderDTO[]> {
    return this.http.get<ItemsInRestaurantOrderDTO[]>(`${this.apiUrl}/ordersofarestaurant/${restaurantId}`);
  }
  addOrder(cartId: number, addressId: number, razorpayOrderId: string): Observable<AddOrderDetailsDTO> {
    return this.http.post<AddOrderDetailsDTO>(`${this.apiUrl}/${cartId}/${addressId}/${razorpayOrderId}`, {});
  }
  viewOrderOfCustomer(userId: number): Observable<UserOrdersDTO[]> {
    return this.http.get<UserOrdersDTO[]>(`${this.apiUrl}/ordersofacustomer/${userId}`);
  }
  updateDeliveryStatus(orderItemId: number, newStatus: string): Observable<UserOrdersDTO> {
    return this.http.put<UserOrdersDTO>(`${this.apiUrl}/updateDeliveryStatus/${orderItemId}/${newStatus}`, {});
  }
}
