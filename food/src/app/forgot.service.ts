import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotService {
  constructor(private http: HttpClient) {}

  // Method for user password recovery
  forgotPassword(email: string): Observable<any> {
    const apiUrl = 'http://localhost:8080/fooddelivery/user/forgot-password{email}';
    return this.http.put(apiUrl, { email });
  }

  // Method for merchant password recovery
  forgotMerchantPassword(email: string): Observable<any> {
    const apiUrl1 = 'http://localhost:8088/fooddelivery/merchant/forgot-password{email}';
    return this.http.put(apiUrl1, { email });
  }
}
