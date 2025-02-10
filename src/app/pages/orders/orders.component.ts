import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { Router } from '@angular/router';
@Component({
  selector: 'app-orders',
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule
  ],
  standalone: true,
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {
  constructor(private router: Router) { }
  pendingOrdersActive:boolean = true;
  colorError = 'error';
  colorSuccess = 'primary';
  OrdersReady = [
    { 
      Id: 1,
      Nombre: 'el apego',
      totalVentas: '$18.50',
      Direccion: 'cra 5 22-33',
      status: 'Entregada',
      statusColor: 'primary',
      item: 'hamburguesa',
      FechaPedido: '2021-09-01',
      HoraPedido: '12:00:00',
      FechaEntrega: '2021-09-01',
      HoraEntrega: '12:00:00',
     tiempoEntrega: '00:10:00'
    
    },
    { 
      Id: 2,
      Nombre: 'el tesoro',
      item: 'hamburguesa',
      totalVentas: '$99.50',
      Direccion: 'cra 9 22-33',
      status: 'Entregada',
      statusColor: 'primary',
      FechaPedido: '2021-09-01',
      HoraPedido: '12:00:00',
      FechaEntrega: '2021-09-01',
      HoraEntrega: '12:00:00',
       tiempoEntrega: '00:10:00'
    },
    { 
      Id: 3,
      Nombre: 'el degenero',
      item: 'hamburguesa',
      totalVentas: '$35.75',
      Direccion: 'cra 9 22-33',
      status: 'Entregada',
      statusColor: 'accent',
      FechaPedido: '2021-09-01 ',
      HoraPedido: '12:00:00',
      FechaEntrega: '2021-09-01',
      HoraEntrega: '12:00:00',
       tiempoEntrega: '00:10:00'
    },
    {
      Id:4,
      Nombre: 'el degenero',
      item: 'hamburguesa',
      totalVentas: '$35.75',
      Direccion: 'cra 9 22-33',
      status: 'Entregada',
      statusColor: 'accent',
      FechaPedido: '2021-09-01',
      HoraPedido: '12:00:00',
      FechaEntrega: '2021-09-01',
      HoraEntrega: '12:00:00',
      tiempoEntrega: '00:10:00'
    }
  ];

  OrdersPending = [
    { 
      Id: 1,
      Nombre: 'el apego',
      totalVentas: '$18.50',
      Direccion: 'cra 5 22-33',
      status: 'Activa',
      statusColor: 'primary',
      item: 'hamburguesa',
      FechaPedido: '2021-09-01',
      HoraPedido: '12:00:00',
      FechaEntrega: '2021-09-01',
      HoraEntrega: '12:00:00'
    
    },
    { 
      Id: 2,
      Nombre: 'el tesoro',
      item: 'hamburguesa',
      totalVentas: '$99.50',
      Direccion: 'cra 9 22-33',
      status: 'Activa',
      statusColor: 'primary',
      FechaPedido: '2021-09-01',
      HoraPedido: '12:00:00',
      FechaEntrega: '2021-09-01',
      HoraEntrega: '12:00:00'
    },
    { 
      Id: 3,
      Nombre: 'el degenero',
      item: 'hamburguesa',
      totalVentas: '$35.75',
      Direccion: 'cra 9 22-33',
      status: 'Activa',
      statusColor: 'accent',
      FechaPedido: '2021-09-01 ',
      HoraPedido: '12:00:00',
      FechaEntrega: '2021-09-01',
      HoraEntrega: '12:00:00'
    },
    {
      Id:4,
      Nombre: 'el degenero',
      item: 'hamburguesa',
      totalVentas: '$35.75',
      Direccion: 'cra 9 22-33',
      status: 'Activa',
      statusColor: 'accent',
      FechaPedido: '2021-09-01',
      HoraPedido: '12:00:00',
      FechaEntrega: '2021-09-01',
      HoraEntrega: '12:00:00'
    }
  ];

  onviewDetail(order: any) {

    console.log('Order',order.Id);
  }


  pendingOrders(){
    this.pendingOrdersActive = true;
  }

  readyOrders(){
    this.pendingOrdersActive = false; 
  }
  ngOnInit(): void {
      
  }

  onDelivered(order:any){
  console.log('entregada',order.Id);
  }

  onPay(order:any){
  console.log('pagada',order.Id);
  }
}
