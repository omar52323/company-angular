import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { Router } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode'; 

@Component({
  selector: 'app-branches',
  imports: [
      CommonModule,
      MatCardModule,
      MatIconModule,
      MatButtonModule,
      MatChipsModule,
      QRCodeModule
    ],
    standalone: true,
  templateUrl: './branches.component.html',
  styleUrl: './branches.component.scss'
})
export class BranchesComponent implements OnInit {
  ngOnInit(): void {
    // Initialize component
  }
  showQrCode: boolean = false;
  selectedBranchQr: string = '';
  constructor(private router: Router) { }
 public Branches:any[]=[];
  public url: string = ' string ';

  /*Branches = [
    { 
      Id: 1,
      Nombre: 'el apego',
      totalVentas: '$18.50',
      Direccion: 'cra 5 22-33',
      status: 'Activa',
      statusColor: 'primary',
      Id_GUID:'jsjsjsjjsjs',
      //linkRequest: `${this.url}/clients/orders/${this.Id_GUID}/${this.Id}`,
    },
    { 
      Id: 2,
      Nombre: 'el tesoro',
      totalVentas: '$99.50',
      Direccion: 'cra 9 22-33',
      status: 'Activa',
      statusColor: 'primary',
      //linkRequest:'http:URL_ADDRESS:4200/clients/orders/19999/19999'
    },
    { 
      Id: 3,
      Nombre: 'el degenero',
      totalVentas: '$35.75',
      Direccion: 'cra 9 22-33',
      status: 'Activa',
      statusColor: 'accent',
      //linkRequest:'http:URL_ADDRESS:4200/clients/orders/19999/19999'
    }
  ];*/


  onBranch(branch: any) {
    console.log('Branch',branch.Id);
    this.router.navigate(['/admin/orders']);
  }
  onProducts(branch: any) {
    console.log('Branch',branch.Id);
    this.router.navigate(['/admin/products']);
  }



getQrCode(branch: any) {
  this.selectedBranchQr = branch.linkRequest;
  this.showQrCode = true;
}

closeQrCode() {
  this.showQrCode = false;
}
  NewBrand() {
    this.router.navigate(['admin/new-brand']);
  }
}
