import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage)
  },
  {
    path: 'productos',
    loadComponent: () =>
      import('./productos/productos.page').then(m => m.ProductosPage)
  },
  {
    path: 'agregar-producto',
    loadComponent: () =>
      import('./agregar-producto/agregar-producto.page').then(m => m.AgregarProductoPage)
  },
  {
    path: 'ventas',
    loadComponent: () =>
      import('./ventas/ventas.page').then(m => m.VentasPage)
  },
  {
    path: 'historial',
    loadComponent: () =>
      import('./historial/historial.page').then(m => m.HistorialPage)
  },
  {
    path: 'inventario',
    loadComponent: () =>
      import('./inventario/inventario.page').then(m => m.InventarioPage)
  },
  {
    path: 'editar-producto/:id',
    loadComponent: () =>
      import('./editar-producto/editar-producto.page').then(m => m.EditarProductoPage)
  }
];
