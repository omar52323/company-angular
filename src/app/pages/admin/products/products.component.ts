import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule
  ],
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  constructor(private router: Router) { }
  Branches = [
    { 
      Id: 1,
      Nombre: 'el apego',
      totalVentas: '$18.50',
      Direccion: 'cra 5 22-33',
      status: 'Activa',
      statusColor: 'primary'
    
    },
    { 
      Id: 2,
      Nombre: 'el tesoro',
      totalVentas: '$99.50',
      Direccion: 'cra 9 22-33',
      status: 'Activa',
      statusColor: 'primary'
    },
    { 
      Id: 3,
      Nombre: 'el degenero',
      totalVentas: '$35.75',
      Direccion: 'cra 9 22-33',
      status: 'Activa',
      statusColor: 'accent'
    }
  ];


  onProducts(branch: any) {

    this.router.navigate(['/admin/productsList']);

    
  }
}
