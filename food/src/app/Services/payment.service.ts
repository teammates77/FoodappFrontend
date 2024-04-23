// import { Injectable } from '@angular/core';
// import { HttpClient,HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
 
// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//   };
 
// @Injectable({
//   providedIn: 'root'
// })
// export class PaymentService {
 
//   constructor(private http: HttpClient) {
 
//   }
 
//   createOrder(order): Observable<any> {
//     return this.http.post("http://localhost:8089/fooddelivery/payment/createOrder ", {
//     customerName: order.name,
//     email: order.email,
//     phoneNumber: order.phone,
//     amount: order.amount,
//     }, httpOptions);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderRequest } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl = 'http://localhost:8089/fooddelivery/payment';

  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  createOrder(order: OrderRequest): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/createOrder`, order, this.httpOptions);
  }

  // getPaymentByUserId(userId: number): Observable<OrderRequest> {
  //   return this.http.get<OrderRequest>(`${this.baseUrl}/${userId}`);
  // }

  // getPaymentByPaymentId(paymentId: string): Observable<OrderRequest> {
  //   return this.http.get<OrderRequest>(`${this.baseUrl}/paymentdetails/${paymentId}`);
  // }
  getPaymentByRazorpayOrderId(razorpayOrderId: string): Observable<OrderRequest> {
    return this.http.get<OrderRequest>(`${this.baseUrl}/paymentdetails/razorpay/${razorpayOrderId}`);
  }
}
