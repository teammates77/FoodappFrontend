
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/restaurant'; 
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  itemByCategory(restaurantId: number) {
    throw new Error('Method not implemented.');
  }
  getItemsByRestaurant(restaurantId: number) {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:8082/fooddelivery/restaurant';
  private baseUrl1 = 'http://localhost:8085/fooddelivery/category';


  constructor(private http: HttpClient) { }
  
  viewAllCategory(): Observable<any[]> {
    const url = `${this.baseUrl1}`; 
    return this.http.get<any[]>(url);
  }

  getAllRestaurants(): Observable<Restaurant[]> {
    const url = `${this.baseUrl}/all`;
    return this.http.get<Restaurant[]>(url);
  }
}
