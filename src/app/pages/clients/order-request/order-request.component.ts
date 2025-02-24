import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface CartItem extends Product {
  quantity: number;
}
@Component({
  selector: 'app-order-request',
   imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
     CommonModule,
     MatCardModule,
     MatIconModule,
     MatButtonModule,
     MatChipsModule
   ],
   standalone: true,
  templateUrl: './order-request.component.html',
  styleUrl: './order-request.component.scss'
})



export class OrderRequestComponent {
  customerForm: FormGroup= new FormGroup({});
  customerName:string="";
  customerPhone:string="";
  products: Product[] = [
    { id: 1, name: 'Producto A', price: 10, imageUrl: 'https://cdn.pixabay.com/photo/2021/01/06/07/32/leaf-5893399_1280.jpg' },
    { id: 2, name: 'Producto B', price: 15, imageUrl: 'https://cdn.pixabay.com/photo/2021/01/06/07/32/leaf-5893399_1280.jpg' },
    { id: 3, name: 'Producto C', price: 20, imageUrl: 'https://cdn.pixabay.com/photo/2021/01/06/07/32/leaf-5893399_1280.jpg' }
  ];
  constructor(private fb: FormBuilder) {
    this.initForm();
  }
  private initForm(): void {
    this.customerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.email]],
      address: ['']
    });
  }
 
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
    console.log('Pedido guardado:', this.cart);
    alert('Pedido guardado con éxito');
    this.cart = [];
  }
}
