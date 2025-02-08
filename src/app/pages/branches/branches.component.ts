import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';


@Component({
  selector: 'app-branches',
  imports: [
      CommonModule,
      MatCardModule,
      MatIconModule,
      MatButtonModule,
      MatChipsModule
    ],
    standalone: true,
  templateUrl: './branches.component.html',
  styleUrl: './branches.component.scss'
})
export class BranchesComponent {

  Branches = [
    { 
      id: '1234',
      Nombre: 2,
      Direccion: '$24.99',
      status: 'Activa',
      statusColor: 'warn',
    
    },
    { 
      id: '1235',
      Nombre: 1,
      Direccion: '$18.50',
      status: 'Activa',
      statusColor: 'primary'
    },
    { 
      id: '1236',
      Nombre: 3,
      total: '$35.75',
      Direccion: 'Nueva',
      statusColor: 'accent'
    }
  ];

}
