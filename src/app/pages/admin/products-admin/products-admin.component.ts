import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';  // Add this import
import { Brand, Products } from '../models/models.admin';
import { AdminService } from '../admin.service';
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
    MatInputModule,
    MatSelectModule
  ],
  standalone: true,
  templateUrl: './products-admin.component.html',
  styleUrl: './products-admin.component.scss'
})
export class ProductsAdminComponent implements OnInit {

  ngOnInit(): void {
    const id_GUID: string = sessionStorage.getItem('Id_GUID') || "";
    // Initialize component
    this.getProducts(id_GUID);
  }
  productForm: FormGroup;
  public Productos: any[] = [];
  constructor(private router: Router, private fb: FormBuilder,
 private adminService:AdminService

  ) {
  
    this.productForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      status: ['', Validators.required]  // Add this line
    });
  }

  onSubmitProduct(): void {
    if (this.productForm.valid) {
      console.log(this.productForm.value.status,"status")
      var status= this.productForm.value.status=='activo'?1:2;
      var Id_GUID = sessionStorage.getItem('Id_GUID') || "";
      const newProduct:Products = {
        Id: 0,
        Name: this.productForm.value.nombre,
        Description: `${this.productForm.value.description}`,
        Price: this.productForm.value.precio,
        Status: status,
        Id_GUID: Id_GUID
      };

     this.adminService.registerProduct(newProduct).subscribe(
        (response) => {
          // Handle success
          console.log('Product registered successfully:', response);
          // You may want to reset the form or navigate to a different page
          this.productForm.reset();
        },
        (error) => {
          // Handle error
          console.error('Error registering product:', error); 
        }
      );
    } else {
      // Mark form controls as touched to display validation errors
      this.productForm.markAllAsTouched();
    
    }
  }

  getProducts(id_GUID: string) {
    this.adminService.getProducts(id_GUID).subscribe({
      next: (response: Products[]) => {
        this.Productos = response;
        this.Productos.forEach((product) => {
          const isActive = product.status === 1;
          product.statusNombre = isActive ? 'Activo' : 'Inactivo';
          product.statusColor = isActive ? 'primary' : 'accent';
        
          product.statusBrands?.forEach((brand:any) => {
            brand.statusNombre = brand.status === 1 ? 'Activo' : 'Inactivo';
          });
        });
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }
  
  
  
  /*
  Productos=[

    {
      Id: 1,
      Nombre: 'Hamburguesa',
      Precio: '$18.50',
      status: [ { 
        Id: 1,
        Nombre: 'el apego',
        totalVentas: '$18.50',
        Direccion: 'cra 5 22-33',
        status: 'Activo',
        statusColor: 'primary'
      
      },
      { 
        Id: 2,
        Nombre: 'el tesoro',
        totalVentas: '$99.50',
        Direccion: 'cra 9 22-33',
        status: 'Activo',
        statusColor: 'primary'
      }
    ],
      statusColor: 'primary',
      imageUrl:'https://cdn.pixabay.com/photo/2021/01/06/07/32/leaf-5893399_1280.jpg'
    
    },
    {
      Id: 2,
      Nombre: 'Perro',
      Precio: '$99.50',
      status: [ { 
        Id: 1,
        Nombre: 'el apego',
        totalVentas: '$18.50',
        Direccion: 'cra 5 22-33',
        status: 'Activo',
        statusColor: 'primary'
      
      },
      { 
        Id: 2,
        Nombre: 'el tesoro',
        totalVentas: '$99.50',
        Direccion: 'cra 9 22-33',
        status: 'Activo',
        statusColor: 'primary'
      }
    ],
      statusColor: 'primary' ,
      imageUrl:'https://cdn.pixabay.com/photo/2021/01/06/07/32/leaf-5893399_1280.jpg'
    },
    {
      Id: 3,
      Nombre: 'Papas',
      Precio: '$35.75',
      status: [ { 
        Id: 1,
        Nombre: 'el apego',
        totalVentas: '$18.50',
        Direccion: 'cra 5 22-33',
        status: 'Activo',
        statusColor: 'primary'
      
      },
      { 
        Id: 2,
        Nombre: 'el tesoro',
        totalVentas: '$99.50',
        Direccion: 'cra 9 22-33',
        status: 'Activo',
        statusColor: 'primary'
      }
    ],
      statusColor: 'accent',
      imageUrl:'https://cdn.pixabay.com/photo/2021/01/06/07/32/leaf-5893399_1280.jpg'
    }
  ]*/
}
