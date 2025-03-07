import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Company,Brand, Products } from './models/models.admin';

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

 
}