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
import { Brand, Products,ProductByBrand } from '../models/models.admin';
import { AdminService } from '../admin.service';
import Swal from 'sweetalert2';
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
      //status: ['', Validators.required]  // Add this line
    });
  }

  onSubmitProduct(): void {
    if (this.productForm.valid) {
      console.log(this.productForm.value.status,"status")
      var status= 1;
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
        console.log(this.Productos, 'products');
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }
  changeStatus(product: any,brand:any) {
    var Id_GUID = sessionStorage.getItem('Id_GUID') || "";
    var status=brand.status === 1? 2: 1;
    var ProductBrand:ProductByBrand={
      Id_Product:product.id,
      Id_Brand:brand.id,
      Id_GUID:Id_GUID,
      Status:status
    }
    this.adminService.ChangeProductByBrand(ProductBrand).subscribe({
      next: (response: any) => {
        console.log('Product registered successfully:', response);
        if(response){
          Swal.fire({
            icon: 'success',
            title: 'Producto Actualizado con éxito',
            showConfirmButton: false,
            timer: 1500
          });
          this.getProducts(Id_GUID);
        }else{
          Swal.fire({
            icon:'error',
            title: 'Error al actualizar el producto',
            showConfirmButton: false,
            timer: 1500
          });
        }
        // You may want to reset the form or navigate to a different page
      },
      error: (error) => {
        // Handle error
        console.error('Error registering product:', error);
        Swal.fire({
          icon:'error',
          title: 'Error al actualizar el producto',
          showConfirmButton: false,
          timer: 1500
        });
      }
    });

  }
  
}
