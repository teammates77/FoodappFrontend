import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user-profile/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private getUserUrl = 'http://localhost:8080/fooddelivery/user';
  private updateUserUrl = 'http://localhost:8080/fooddelivery/user/updateProfile';


  constructor(private http: HttpClient) {}

  updateUser(userId: number, userData: any): Observable<User> {
    return this.http.put<User>(`${this.updateUserUrl}/${userId}`, userData);
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.getUserUrl}/${userId}`);
  }


}
