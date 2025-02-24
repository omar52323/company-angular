import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
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
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './order-request.component.html',
  styleUrl: './order-request.component.scss'
})
export class OrderRequestComponent {
  customerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }
  private initForm(): void {
    this.customerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.email]],
      address: ['']
    });
  }
  products: Product[] = [
    { id: 1, name: 'Producto A', price: 10, imageUrl: 'https://cdn.pixabay.com/photo/2021/01/06/07/32/leaf-5893399_1280.jpg' },
    { id: 2, name: 'Producto B', price: 15, imageUrl: 'https://cdn.pixabay.com/photo/2021/01/06/07/32/leaf-5893399_1280.jpg' },
    { id: 3, name: 'Producto C', price: 20, imageUrl: 'https://cdn.pixabay.com/photo/2021/01/06/07/32/leaf-5893399_1280.jpg' }
  ];
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
