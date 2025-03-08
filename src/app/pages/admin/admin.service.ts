import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Company,Brand, Products,ProductByBrand } from './models/models.admin';
import { Order } from '../clients/models/models.clients';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'https://localhost:7214/';

  constructor(private http: HttpClient) { }

  registerCompany(company: Company): Observable<any> {
    return this.http.post(this.apiUrl+'Company/CreateCompany', company);
  }

  registerBrand(brand:Brand){
    return this.http.post(this.apiUrl+'Company/CreateBrand', brand);
  }

  getBrands(Id_GUID:string){
    return this.http.get(this.apiUrl+'Company/GetBrands/'+Id_GUID);
  }
  registerProduct (product:Products){
    return this.http.post(this.apiUrl+'Company/CreateProduct', product);
  }

  getProducts(Id_GUID:string):Observable<any>{
    return this.http.get(this.apiUrl+'Company/GetProducts/'+Id_GUID);
  }

  getOrdersPendings(Id_GUID:string,Id_Brand:string):Observable<Order[]>{
    return this.http.get<Order[]>(this.apiUrl+'Company/GetPendingOrders/'+Id_GUID+'/'+Id_Brand);
  }
  getOrdersReady(Id_GUID:string,Id_Brand:string):Observable<Order[]>{
    return this.http.get<Order[]>(this.apiUrl+'Company/GetReadyOrders/'+Id_GUID+'/'+Id_Brand);
  }
  changeOrderStatus(order:Order){
    return this.http.post(this.apiUrl+'Company/ChangeOrder', order);
  }
  ChangeProductByBrand(productBrand:ProductByBrand){
    return this.http.post(this.apiUrl+'Company/ChangeProductByBrand', productBrand);
  }

 
}