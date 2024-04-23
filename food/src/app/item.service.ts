import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private baseUrl = 'http://localhost:8082/fooddelivery/items';

  constructor(private http: HttpClient) { }

  viewItemByRestaurant(restaurantId: number): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.baseUrl}/itembyrestaurant/${restaurantId}`);
  }
  viewItemByCategory(categoryId: number): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.baseUrl}/itembycategory/${categoryId}`);
  }
  addItemToRestaurant(item: Item, restaurantId: number): Observable<Item> {
    return this.http.post<Item>(`${this.baseUrl}/add/${restaurantId}`, item);
  }
  removeItem(itemId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/${itemId}`);
  }
  getItemById(itemId: number): Observable<Item> {
    return this.http.get<Item>(`${this.baseUrl}/${itemId}`);
  }
}
