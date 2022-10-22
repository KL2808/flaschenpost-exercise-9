import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'products-detailed',
    pathMatch: 'full',
  },
  {
    path: 'products-detailed',
    loadChildren: () =>
      import('./pages/detailed/detailed.module').then((m) => m.DetailedModule),
  },
  {
    path: 'products-compact',
    loadChildren: () =>
      import('./pages/compact/compact.module').then((m) => m.ComapctModule),
  },
];
