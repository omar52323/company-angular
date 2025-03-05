import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
export default interface  Company {
  Name: string;
  Description: string;
  Direccion_Prinicipal: string;
  Nombre_Administrador: string;
  OwnerId: string;
  Id_GUID?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'https://localhost:7214/';

  constructor(private http: HttpClient) { }

  registerCompany(company: Company): Observable<any> {
    return this.http.post(this.apiUrl+'Company/CreateCompany', company);
  }

 
}