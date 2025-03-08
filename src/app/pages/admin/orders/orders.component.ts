import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { AdminService } from '../admin.service';
import { Order } from '../../clients/models/models.clients';
import { ActivatedRoute } from '@angular/router';
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

  public Id_GUID:string="";
  public Id_Brand:string="";
  constructor(
    private router: Router,
    public adminService:AdminService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params => {
      const idGuid = params['Id_GUID'];
      this.Id_GUID=idGuid;
      const idBranch = params['Id_Brand'];
      this.Id_Brand=idBranch;
      console.log(idGuid,'params',idBranch,params)
      // Use the parameters
    });

   }
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
  pendingOrdersActive:boolean = true;
  colorError = 'error';
  colorSuccess = 'primary';
  public OrdersReady:any[]=[];
  public OrdersPending:any[]=[];
  /*OrdersReady = [
    { 
      Id: 1,
      status: 'Entregada',
      statusColor: 'primary',
      item: [
        {nombre: 'hamburguesa', cantidad: 2,precio: 10.50},
        {nombre: 'perro', cantidad: 1,precio: 5.75},
        {nombre: 'gaseosa', cantidad: 1,precio: 5.75}

      ],
      FechaPedido: '2021-09-01',
      HoraPedido: '12:00:00',
      FechaEntrega: '2021-09-01',
      HoraEntrega: '12:00:00',
      tiempoEntrega: '00:10:00'
    
    },
    { 
      Id: 2,
      Nombre: 'el tesoro',
      item: [
        {nombre: 'hamburguesa', cantidad: 2,precio: 10.50},
        {nombre: 'perro', cantidad: 1,precio: 5.75},
        {nombre: 'gaseosa', cantidad: 1,precio: 5.75}

      ],
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
      item: [
        {nombre: 'hamburguesa', cantidad: 2,precio: 10.50},
        {nombre: 'perro', cantidad: 1,precio: 5.75},
        {nombre: 'gaseosa', cantidad: 1,precio: 5.75}

      ],
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
      item: [
        {nombre: 'hamburguesa', cantidad: 2,precio: 10.50},
        {nombre: 'perro', cantidad: 1,precio: 5.75},
        {nombre: 'gaseosa', cantidad: 1,precio: 5.75}

      ],
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
      item: [
        {nombre: 'hamburguesa', cantidad: 2,precio: 10.50},
        {nombre: 'perro', cantidad: 1,precio: 5.75},
        {nombre: 'gaseosa', cantidad: 1,precio: 5.75}

      ],
      FechaPedido: '2021-09-01',
      HoraPedido: '12:00:00',
      FechaEntrega: '2021-09-01',
      HoraEntrega: '12:00:00'
    
    },
    { 
      Id: 2,
      Nombre: 'el tesoro',
      item: [
        {nombre: 'hamburguesa', cantidad: 2,precio: 10.50},
        {nombre: 'perro', cantidad: 1,precio: 5.75},
        {nombre: 'gaseosa', cantidad: 1,precio: 5.75}

      ],
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
      item: [
        {nombre: 'hamburguesa', cantidad: 2,precio: 10.50},
        {nombre: 'perro', cantidad: 1,precio: 5.75},
        {nombre: 'gaseosa', cantidad: 1,precio: 5.75}

      ],
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
      item: [
        {nombre: 'hamburguesa', cantidad: 2,precio: 10.50},
        {nombre: 'perro', cantidad: 1,precio: 5.75},
        {nombre: 'gaseosa', cantidad: 1,precio: 5.75}

      ],
      totalVentas: '$35.75',
      Direccion: 'cra 9 22-33',
      status: 'Activa',
      statusColor: 'accent',
      FechaPedido: '2021-09-01',
      HoraPedido: '12:00:00',
      FechaEntrega: '2021-09-01',
      HoraEntrega: '12:00:00'
    }
  ];*/

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
    this.getPendingOrders();
    this.getReadyOrders();
  }

  onDelivered(order:any){
      Swal.fire({
        title: "Esta seguro que desea entregar ?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "SI",
        denyButtonText: `NO`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          order.status=2;
          this.changeOrderStatus(order);
          //this.OrdersPending= this.OrdersPending.filter((item) => item.Id !== order.Id);
          Swal.fire("Entregado!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("No se entregó", "", "info");
        }
      });
  }

  onPay(order:any){
      Swal.fire({
        title: "Esta seguro que desea Pagar ?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "SI",
        denyButtonText: `NO`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          order.status=3;
          this.changeOrderStatus(order);
          //this.OrdersPending= this.OrdersPending.filter((item) => item.Id !== order.Id);
          Swal.fire("Pagada!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("No se pagó", "", "info");
        }
      });
  }

  getPendingOrders(){
            this.adminService.getOrdersPendings(this.Id_GUID,this.Id_Brand).subscribe((resp:any)=>{
              this.OrdersPending = resp;
              //de cada order pending viene la propiedad createdAt
              this.OrdersPending.forEach((order:any)=>{
                let date = new Date(order.createdAt);
                order.fechaPedido = date.toLocaleDateString();
                order.horaPedido = date.toLocaleTimeString();
                order.statusNombre=this.statusOrders.find((status:any)=>status.Id===order.status)?.Nombre;
              });
              console.log(this.OrdersPending,'orderpending')
            });
  }
  getReadyOrders(){
        this.adminService.getOrdersReady(this.Id_GUID,this.Id_Brand).subscribe((resp:any)=>{
          this.OrdersReady = resp;
          console.log(this.OrdersReady,'orderready')
          this.OrdersReady.forEach((order:any)=>{
            let date = new Date(order.createdAt);
            let dateDelivery=  new Date(order.fechaEntrega);
            debugger
            order.fechaPedido = date.toLocaleDateString();
            order.horaPedido = date.toLocaleTimeString();
            order.fechaEntrega = dateDelivery.toLocaleDateString();
            order.horaEntrega = dateDelivery.toLocaleTimeString();
            order.statusNombre=this.statusOrders.find((status:any)=>status.Id===order.status)?.Nombre;
            order.tiempoEntrega=this.calculateTimeDifference(date,dateDelivery);
          });

        });
  }
  changeOrderStatus(order:any){
    

    this.adminService.changeOrderStatus(order).subscribe((resp:any)=>{
      console.log(resp,'resp')
      this.getPendingOrders();
      this.getReadyOrders();
    });

  }
calculateTimeDifference(startDate: Date, endDate: Date) {
  const timeDifference = Math.abs(startDate.getTime() - endDate.getTime());
  let hoursDifference = timeDifference / (1000 * 60 * 60);
  let minutesDifference = Math.abs((timeDifference / (1000 * 60)) % 60);
  // If less than 1 hour, return 0 hours and absolute minutes
  if (hoursDifference < 1) {
    return `Tiempo Entrega:  ${Math.round(minutesDifference)} minutos`;
  }
  return `Tiempo Entrega: ${Math.floor(hoursDifference)} horas y ${Math.round(minutesDifference)} minutos`;
}


  


}
