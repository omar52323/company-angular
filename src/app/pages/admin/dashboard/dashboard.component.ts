// pages/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { NewCompanyComponent } from '../new-company/new-company.component';
import { Stats } from '../models/models.admin';
import { AdminService } from '../admin.service';
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
  constructor(public adminService:AdminService) { }
  companys:any[] = [];
  public stats:any[] = [];
  public recentOrders:any[] = [];
  ngOnInit(): void {
    console.log("init");
    const companyData = sessionStorage.getItem("company");
    if (companyData) {
      this.companys = JSON.parse(companyData);
      console.log(this.companys,'companys');
      this.getStats(this.companys[0].id_GUID);
      this.getRecentOrders(this.companys[0].id_GUID);
    }
    console.log(this.companys,'companys')
  }
  statsModel = [
    { 
      Id:1,
      icon: 'trending_up',
      label: 'Ventas del dia',
      value: '$1,234',
      change: '',
      changeClass: 'text-success'
    },
    { Id:2,
      icon: 'people',
      label: 'Ordenes Activas',
      value: '23',
      change: '',
      changeClass: 'text-warning'
    },
    { Id:3,
      icon: 'schedule',
      label: 'Tiempo Promedio',
      value: '18 min',
      change: '',
      changeClass: 'text-success'
    },
    { Id:4,
      icon: 'warning',
      label: 'Alertas',
      value: '0',
      change: '',
      changeClass: 'text-error'
    }
  ];
/*
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
  statusOrders:any[] = [
    {
      Id:1,
      Nombre:'Activa',
      Color:'primary'
    },
    {
      Id:2,
      Nombre:'Entregada',
      Color:'accent'
    },
    {
      Id:3,
      Nombre:'Pagada',
      Color:'warn'
    }
  ];
  getStats(Id_GUID:string){
    this.adminService.getStats(Id_GUID).subscribe((res:any)=>{
      this.stats = res;
      this.stats.forEach((stat)=>{
        stat.Icon = this.statsModel.find((s)=>s.Id === stat.id)?.icon;
        //stat.Value = this.statsModel.find((s)=>s.Id === stat.id)?.value.toString();
        stat.Change = this.statsModel.find((s)=>s.Id === stat.id)?.change;
        stat.ChangeClass = this.statsModel.find((s)=>s.Id === stat.id)?.changeClass;
        stat.Label= this.statsModel.find((s)=>s.Id === stat.id)?.label;
      });
      console.log(this.stats,'stats');
    });
  }

  getRecentOrders(Id_GUID:string){
    this.adminService.getRecentOrders(Id_GUID).subscribe((res:any)=>{
      this.recentOrders = res;

      this.recentOrders.forEach((order:any)=>{
        order.statusNombre=this.statusOrders.find((status:any)=>status.Id===order.status)?.Nombre;
      });
      
      console.log(this.recentOrders,'recentOrders');
    });
  }
}
