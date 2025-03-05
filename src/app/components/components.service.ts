import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
export default interface UserCreate {
  Id?:number ,
  username: string;
  password?: string;
  email: string;
  cellphone: string;
}

export default interface UserLogin{
  Username: string;
  Password: string;
}

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {
  private apiUrl = 'https://localhost:7214/';

  constructor(private http: HttpClient) { }

  createUser(userData: UserCreate): Observable<any> {
    return this.http.post(this.apiUrl+'Company/CreateUser', userData);
  }

  validateUser(credentials: { Username: string; Password: string }): Observable<any> {
    return this.http.post(this.apiUrl+'Company/ValidateLogin', credentials);
  }
}

