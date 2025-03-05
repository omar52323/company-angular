import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject,Observable } from 'rxjs';
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
  private companyNameSubject = new BehaviorSubject<string>('Company');
  public companyName$: Observable<string> = this.companyNameSubject.asObservable();
  constructor(private http: HttpClient) { 
    const storedName = sessionStorage.getItem('nameCompany');
    if (storedName) {
      this.companyNameSubject.next(storedName);
    }
  }

  createUser(userData: UserCreate): Observable<any> {
    return this.http.post(this.apiUrl+'Company/CreateUser', userData);
  }

  validateUser(credentials: { Username: string; Password: string }): Observable<any> {
    return this.http.post(this.apiUrl+'Company/ValidateLogin', credentials);
  }

  updateCompanyName(name: string): void {
    sessionStorage.setItem('nameCompany', name);
    this.companyNameSubject.next(name);
  }
}

