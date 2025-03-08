import { Component,OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from '../../clients/clients.service';
import { Product } from '../../clients/models/models.clients';
@Component({
  selector: 'app-products-list',
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule
  ],
  standalone: true,
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit  {
  
  public Id_Brand:string="";
  public Id_GUID:string="";
  constructor(private route: ActivatedRoute,private clientsService:ClientsService){
    this.route.params.subscribe(params => {
      const idGuid = params['Id_GUID'];
      this.Id_GUID=idGuid;
      const idBranch = params['Id_Brand'];
      this.Id_Brand=idBranch;
      console.log(idGuid,'params',idBranch,params)
      // Use the parameters
    });
  }
  ngOnInit(): void {

    this.getProductsByBrand(this.Id_GUID,this.Id_Brand);
  }
  public Productos: any[] = [];
  /*Productos=[

    {
      Id: 1,
      Nombre: 'Hamburguesa',
      Precio: '$18.50',
      status: 'Activo',
      statusColor: 'primary',
      imageUrl:'https://cdn.pixabay.com/photo/2021/01/06/07/32/leaf-5893399_1280.jpg'
    
    },
    {
      Id: 2,
      Nombre: 'Perro',
      Precio: '$99.50',
      status: 'Activo',
      statusColor: 'primary' ,
      imageUrl:'https://cdn.pixabay.com/photo/2021/01/06/07/32/leaf-5893399_1280.jpg'
    },
    {
      Id: 3,
      Nombre: 'Papas',
      Precio: '$35.75',
      status: 'Activo',
      statusColor: 'accent',
      imageUrl:'https://cdn.pixabay.com/photo/2021/01/06/07/32/leaf-5893399_1280.jpg'
    }
  ]*/

    
      getProductsByBrand(Id_GUID:string,Brand:string){
        this.clientsService.getProducts(Id_GUID,Brand).subscribe((products:Product[])=>{
         this.Productos=products;
       this.Productos.forEach((product)=>{
        product.statusNombre=product.status === 1 ? 'Activo' : 'Inactivo';
        product.statusColor = product.status ===1 ? 'primary' : 'accent';
         })

         console.log(products,'products')
        })
   
     }
    

}
