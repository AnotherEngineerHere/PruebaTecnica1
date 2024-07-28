import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface UserRespnse{
  id: number,
  name:string,
  email:string

}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://66a5b86123b29e17a1a0c277.mockapi.io/api/user/users';
  private httpClient = inject(HttpClient);

  saveUser(inputData: object): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}`, inputData);
  }
  getUserLists(){
    return this.httpClient.get(`${this.apiUrl}`);
  }
}