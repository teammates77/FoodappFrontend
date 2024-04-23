import { Injectable } from '@angular/core';
import { reg } from './merchant-reg/merchant-reg.component';
import { HttpClient } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class MerchantRegService {
  merchantService(arg0: AbstractControl<any, any>, arg1: AbstractControl<any, any>) {
    throw new Error('Method not implemented.');
  }

  private baseURL = "http://localhost:8088/fooddelivery/merchant/register";
  constructor(private httpClient:HttpClient) { }
 
  registerMerchant(reg:reg){
    return this.httpClient.post(`${this.baseURL}`,reg);
}

}