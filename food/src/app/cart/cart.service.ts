
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodCart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:8084/fooddelivery/foodcart'; 
  

  constructor(private http: HttpClient) {}

  addItemToCart(foodCartId: number, restaurantId: number, itemId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${foodCartId}/${restaurantId}/${itemId}`, {});
  }
  viewCartOfUser(userId: number): Observable<FoodCart> {
    return this.http.get<FoodCart>(`${this.apiUrl}/cartbyuser/${userId}`);
  }
  increaseOrReduceQuantityOfItem(cartId: number, itemId: number, quantity: number): Observable<FoodCart> {
    return this.http.patch<FoodCart>(`${this.apiUrl}/${cartId}/${itemId}/${quantity}`, {});
  }
  removeItemFromCart(cartItemId: number): Observable<FoodCart> {
    return this.http.delete<FoodCart>(`${this.apiUrl}/cartitem/${cartItemId}`);
  }
  clearCart(cartId: number): Observable<FoodCart> {
    return this.http.delete<FoodCart>(`${this.apiUrl}/cart/${cartId}`);
  }
}
