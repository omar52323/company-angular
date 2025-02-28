import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
interface UserCreate {
  username: string;
  password: string;
  email: string;
  cellphone: string;
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

  validateUser(credentials: UserCreate): Observable<any> {
    return this.http.post(this.apiUrl+'Company/ValidateUser', credentials);
  }
}
