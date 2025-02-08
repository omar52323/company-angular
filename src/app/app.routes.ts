// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => 
      import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'branches',
    loadComponent: () => 
      import('./pages/branches/branches.component').then(m => m.BranchesComponent)
  },
  {
    path: 'orders',
    loadComponent: () => 
      import('./pages/orders/orders.component').then(m => m.OrdersComponent)
  },
  {
    path: 'inventory',
    loadComponent: () => 
      import('./pages/inventory/inventory.component').then(m => m.InventoryComponent)
  },
  {
    path: 'reports',
    loadComponent: () => 
      import('./pages/reports/reports.component').then(m => m.ReportsComponent)
  },
  {
    path: 'settings',
    loadComponent: () => 
      import('./pages/settings/settings.component').then(m => m.SettingsComponent)
  }
];
