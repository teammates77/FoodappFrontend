import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Restaurant } from './models/restaurant';
import { UpdateItems } from './models/UpdateItems';
import { MerchantRestaurant } from './merchant-restaurant-info/merchant-restaurant-info.component';

@Injectable({
  providedIn: 'root'
})
export class MerchantRestaurantService {
  private apiUrl = 'http://localhost:8082/fooddelivery/restaurant';
  private apiUrl1 = 'http://localhost:8082/fooddelivery';

  constructor(private http: HttpClient) {}
  getRestaurantByMerchantId(merchantId: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/merchant/${merchantId}`).pipe(
      map(response => {
        if (response === null || response === false) {
          return false; 
        } else {
          return response;
        }
      }),
    );
  }
  submitRestaurantData(restaurantData: MerchantRestaurant, merchantId: any): Observable<any> {
    const dataWithMerchantId = { ...restaurantData, merchantId };
    return this.http.post<any>(`${this.apiUrl}/add`, dataWithMerchantId);
  }
  updateRestaurant(restaurantData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update`, restaurantData);
  }
 
  updateRestaurantItems(item: UpdateItems): Observable<any> {
    return this.http.put<any>(`${this.apiUrl1}/items/update`, item);
  }
  viewRestaurantsByMerchantId(merchantId: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/merchant/${merchantId}`);
  }
  removeRestaurant(restaurantId: number): Observable<Restaurant> {
    return this.http.delete<Restaurant>(`${this.apiUrl}/${restaurantId}`);
  }
}
