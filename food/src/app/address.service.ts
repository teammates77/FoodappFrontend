import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from './models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private baseUrl = 'http://localhost:8087/fooddelivery/address';

  constructor(private http: HttpClient) { }

  getAddressById(userId: number): Observable<Address[]> { 
    const url = `${this.baseUrl}/addresses/${userId}`;
    return this.http.get<Address[]>(url); 
  }

  registerAddress(address: Address): Observable<Address> {
    return this.http.post<Address>(this.baseUrl, address);
  }

  deleteAddress(addressId: number): Observable<any> {
    const url = `${this.baseUrl}/${addressId}`;
    return this.http.delete(url);
  }
}
