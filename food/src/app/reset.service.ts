import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResetService {

  private userBaseURL = "http://localhost:8080/fooddelivery/user/set-password";
  private merchantBaseURL = "http://localhost:8088/fooddelivery/merchant/set-password";

  constructor(private httpClient: HttpClient) { }

  setPassword(email: string, newPassword: string, confirmPassword: string) {
    return this.httpClient.put(`${this.userBaseURL}`, { email, newPassword, confirmPassword });
  }

  setMerchantPassword(email: string, newPassword: string, confirmPassword: string) {
    return this.httpClient.put(`${this.merchantBaseURL}`, { email, newPassword, confirmPassword });
  }
}
