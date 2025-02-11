import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { Router } from '@angular/router';

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
export class ProductsListComponent {

  Productos=[

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
  ]

}
