// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    //admin/:company
    path: 'admin',
    loadComponent: () => 
      import('./pages/admin/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    //admin/:company/branches
    path: 'admin/branches',
    loadComponent: () => 
      import('./pages/admin/branches/branches.component').then(m => m.BranchesComponent)
  },
  {
    //admin/:company/branches/:branch/orders
    path: 'admin/orders',
    loadComponent: () => 
      import('./pages/admin/orders/orders.component').then(m => m.OrdersComponent)
  },
  {
    //admin/:company/branches/:branch/inventory
    //admin/:company/branches/:branch/inventory/:product
    path: 'admin/inventory',
    loadComponent: () => 
      import('./pages/admin/inventory/inventory.component').then(m => m.InventoryComponent)
  },
  {
    //admin/:company/branches/:branch/reports
    path: 'admin/reports',
    loadComponent: () => 
      import('./pages/admin/reports/reports.component').then(m => m.ReportsComponent)
  },
  {
    //admin/:company/branches/:branch/settings
    path: 'admin/settings',
    loadComponent: () => 
      import('./pages/admin/settings/settings.component').then(m => m.SettingsComponent)
  },
  {
   path: 'admin/products',
    loadComponent: () => 
        import('./pages/admin/products/products.component').then(m => m.ProductsComponent)

  },
  {
  path: 'admin/productsList',
    loadComponent: () => 
        import('./pages/admin/products-list/products-list.component').then(m => m.ProductsListComponent)

  },
  {
    //clients/:company/branches/:branch/orders
    path:'clients/orders',
    loadComponent: () =>
      import('./pages/clients/order-request/order-request.component').then(m => m.OrderRequestComponent)
  },
  {
    //clients/:company/branches/:branch/orders
    path:'admin/products-admin',
    loadComponent: () =>
      import('./pages/admin/products-admin/products-admin.component').then(m => m.ProductsAdminComponent)
  },
  {
    //clients/:company/branches/:branch/orders
    path:'admin/new-brand',
    loadComponent: () =>
      import('./pages/admin/new-brand/new-brand.component').then(m => m.NewBrandComponent)
  },
  {
    path:'admin/new-company',
    loadComponent: () =>
      import('./pages/admin/new-company/new-company.component').then(m => m.NewCompanyComponent)
  }
];
