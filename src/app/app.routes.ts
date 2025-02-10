// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    //admin/:company
    path: 'admin',
    loadComponent: () => 
      import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    //admin/:company/branches
    path: 'admin/branches',
    loadComponent: () => 
      import('./pages/branches/branches.component').then(m => m.BranchesComponent)
  },
  {
    //admin/:company/branches/:branch/orders
    path: 'admin/orders',
    loadComponent: () => 
      import('./pages/orders/orders.component').then(m => m.OrdersComponent)
  },
  {
    //admin/:company/branches/:branch/inventory
    //admin/:company/branches/:branch/inventory/:product
    path: 'admin/inventory',
    loadComponent: () => 
      import('./pages/inventory/inventory.component').then(m => m.InventoryComponent)
  },
  {
    //admin/:company/branches/:branch/reports
    path: 'admin/reports',
    loadComponent: () => 
      import('./pages/reports/reports.component').then(m => m.ReportsComponent)
  },
  {
    //admin/:company/branches/:branch/settings
    path: 'admin/settings',
    loadComponent: () => 
      import('./pages/settings/settings.component').then(m => m.SettingsComponent)
  },
  {
   path: 'admin/products',
    loadComponent: () => 
        import('./pages/products/products.component').then(m => m.ProductsComponent)

  }
];
