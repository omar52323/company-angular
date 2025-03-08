import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Order, Product } from './models/models.clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private apiUrl = 'https://localhost:7214/';
  constructor(private http: HttpClient) { }

  getProducts(Id_GUID:string,Brand:string): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl+'Company/GetProducts/'+Id_GUID+'/'+Brand);
  }

  saveOrder(order: Order): Observable<any> {
    return this.http.post<any>(this.apiUrl+'Company/SaveOrder', order);
  }

}
