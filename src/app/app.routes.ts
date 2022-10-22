import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'products-detailed',
    pathMatch: 'full',
  },
  {
    title: 'Detailed View',
    path: 'products-detailed',
    loadChildren: () =>
      import('./pages/detailed/detailed.module').then((m) => m.DetailedModule),
  },
  {
    title: 'Compact View',
    path: 'products-compact',
    loadChildren: () =>
      import('./pages/compact/compact.module').then((m) => m.ComapctModule),
  },
];
