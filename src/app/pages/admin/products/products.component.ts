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
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-products',
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
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private router: Router, 
    private fb: FormBuilder,
    private AdminService: AdminService
  ) {
  
    this.productForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      imageUrl: ['', Validators.required],
    });
  }
  public Branches:any[]=[];

  ngOnInit(): void {
    const id_GUID = sessionStorage.getItem('Id_GUID');
    if (id_GUID) {
      this.getBrands(id_GUID);
    } else {
      console.error('Id_GUID no encontrado en el almacenamiento local');
    }
  }

  /*
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
  ];*/


  onProducts(branch: any) {
    var Id_GUID=sessionStorage.getItem('Id_GUID');
    var id_Branch=branch.id;
    this.router.navigate(['/admin/productsList/'+Id_GUID+'/'+id_Branch]);
  }

  GeneralProducts(){
    this.router.navigate(['/admin/products-admin']);
  }

  getBrands(id_GUID:string){
    this.AdminService.getBrands(id_GUID).subscribe((branches:any) => {
      this.Branches = branches;
      this.Branches.forEach(branch => {
        branch.statusColor = branch.status === 'Activa' ? 'primary' : 'accent';
        branch.status= branch.status === 1 ? 'Activa' : 'Inactiva';
      });
      console.log(this.Branches,'brands')
    });
  }

}
