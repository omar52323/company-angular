// pages/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { NewCompanyComponent } from '../new-company/new-company.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    NewCompanyComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() { }
  companys:any[] = [];
  public stats:any[] = [];
  public recentOrders:any[] = [];
  ngOnInit(): void {
    console.log("init");
    const companyData = sessionStorage.getItem("company");
    if (companyData) {
      this.companys = JSON.parse(companyData);
      console.log(this.companys,'companys');
    }

    console.log(this.companys,'companys')
  }
 /* stats = [
    { 
      icon: 'trending_up',
      label: 'Ventas del dia',
      value: '$1,234',
      change: '+12.5%',
      changeClass: 'text-success'
    },
    { 
      icon: 'people',
      label: 'Ordenes Activas',
      value: '23',
      change: '5 pending',
      changeClass: 'text-warning'
    },
    { 
      icon: 'schedule',
      label: 'Tiempo Promedio',
      value: '18 min',
      change: '-2 min',
      changeClass: 'text-success'
    },
    { 
      icon: 'warning',
      label: 'Alertas',
      value: '3',
      change: '2 urgent',
      changeClass: 'text-error'
    }
  ];

  recentOrders = [
    { 
      id: '1234',
      items: 2,
      total: '$24.99',
      status: 'En Progreso',
      statusColor: 'warn'
    },
    { 
      id: '1235',
      items: 1,
      total: '$18.50',
      status: 'Nueva',
      statusColor: 'primary'
    },
    { 
      id: '1236',
      items: 3,
      total: '$35.75',
      status: 'Lista',
      statusColor: 'accent'
    }
  ];*/
}
