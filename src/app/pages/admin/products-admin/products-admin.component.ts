import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-products-admin',
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  standalone: true,
  templateUrl: './products-admin.component.html',
  styleUrl: './products-admin.component.scss'
})
export class ProductsAdminComponent {
  productForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
  
    this.productForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      imageUrl: ['', Validators.required],
    });
  }

  onSubmitProduct(): void {
    if (this.productForm.valid) {
      const newProduct = {
        Id: 1,
        Nombre: this.productForm.value.nombre,
        totalVentas: `$${this.productForm.value.precio}`,
        Direccion: 'Nueva ubicación',
        status: 'Activo',
        statusColor: 'primary'
      };

     
      this.productForm.reset();
    }
  }
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
