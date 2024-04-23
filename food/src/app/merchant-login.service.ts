import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MerchantReg } from './merchant-login/merchant-login.component';

@Injectable({
  providedIn: 'root'
})
export class MerchantLoginService {

  private baseUrl = "http://localhost:8088/fooddelivery/merchant/login";
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();
  isLoggedIn = false;
  constructor(private httpClient: HttpClient,private router: Router, ) { }


  loginMerchant(MerchantReg:MerchantReg): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}`, MerchantReg)
  }

  logout(): void {
    this.isLoggedInSubject.next(false);
  }
}
