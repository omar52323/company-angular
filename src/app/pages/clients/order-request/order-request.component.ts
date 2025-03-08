import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { Product,CartItem, Order } from '../models/models.clients';
import { ClientsService } from '../clients.service';
import { OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-order-request',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './order-request.component.html',
  styleUrl: './order-request.component.scss'
})
export class OrderRequestComponent implements OnInit {

  public products: Product[] = [];
  customerForm: FormGroup;
   Id_GUID: string="";
   Id_Brand: string="";
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private clientsService:ClientsService
  ) {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.email]]
    });

    this.route.params.subscribe(params => {
      const idGuid = params['Id_GUID'];
      this.Id_GUID=idGuid;
      const idBranch = params['Id_Brand'];
      this.Id_Brand=idBranch;
      console.log(idGuid,'params',idBranch,params)
      // Use the parameters
    });
  }

 /* products: Product[] = [
    { id: 1, name: 'Producto A', price: 10, imageUrl: 'https://cdn.pixabay.com/photo/2021/01/06/07/32/leaf-5893399_1280.jpg' },
    { id: 2, name: 'Producto B', price: 15, imageUrl: 'https://cdn.pixabay.com/photo/2021/01/06/07/32/leaf-5893399_1280.jpg' },
    { id: 3, name: 'Producto C', price: 20, imageUrl: 'https://cdn.pixabay.com/photo/2021/01/06/07/32/leaf-5893399_1280.jpg' }
  ];*/

  cart: CartItem[] = [];

  addToCart(product: Product) {
    const item = this.cart.find(p => p.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  removeFromCart(product: CartItem) {
    this.cart = this.cart.filter(p => p.id !== product.id);
  }

  getTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  saveOrder() {
    
    if(this.customerForm.valid && this.cart.length>0){
      const order :Order = {
        BranchId: this.Id_Brand,
        CustomerName: this.customerForm.value.name,
        CustomerPhone: this.customerForm.value.phone,
        CustomerEmail: this.customerForm.value.email,
        Total: this.getTotal(),
        Status: 1,
        Id_GUID:this.Id_GUID,
        OrderItems: this.cart.map(item => ({
          ProductId: item.id,
          Quantity: item.quantity,
          Price: item.price,
          Total: item.price * item.quantity,
          Id_GUID:this.Id_GUID,
          AditionalNotes:item.additionalNotes||"",
          OrderId:0
        }))
      };

      console.log(order)
      this.clientsService.saveOrder(order).subscribe((response:any)=>{
        console.log(response,'response')
        if(response){
          Swal.fire({
            title: 'Orden Guardada con exito',
            text: 'tu orden ha sido Guardada Correctamente',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          this.cart=[];
          this.customerForm.reset();
        }else{
          Swal.fire({
            title: 'Error',
            text: 'Un error occurrido guardando el pedido',
            icon:'error',
            confirmButtonText: 'OK'
          });
        }
      })
    }
 
  }
  
ngOnInit(): void {
  this.getProductsByBrand(this.Id_GUID, this.Id_Brand);
}

  getProductsByBrand(Id_GUID:string,Brand:string){
     this.clientsService.getProducts(Id_GUID,Brand).subscribe((products:Product[])=>{
      this.products=products;
      console.log(products,'products')
     })

  }

}
