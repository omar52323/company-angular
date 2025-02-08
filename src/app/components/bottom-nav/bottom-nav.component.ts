

// components/bottom-nav/bottom-nav.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.css']
})
export class BottomNavComponent {
  navItems = [
    { path: '/', icon: 'dashboard', label: 'Dashboard' },
    { path: '/branches', icon: 'store', label: 'Sucursales' },
    { path: '/orders', icon: 'shopping_bag', label: 'Ordernes' },
    { path: '/inventory', icon: 'inventory', label: 'Inventario' },
    { path: '/reports', icon: 'bar_chart', label: 'Reportes' },
    { path: '/settings', icon: 'settings', label: 'Configuracion' }
  ];
}