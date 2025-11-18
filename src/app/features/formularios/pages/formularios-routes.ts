import { FormularioPage } from './FormularioPage/formularios-page';
import { Routes } from '@angular/router';
import { FormulariosDinamicos } from './formularios-dinamicos/formularios-dinamicos/formularios-dinamicos';
import { FormulariosSwitches } from './formularios-switches/formularios-switches/formularios-switches';

export const formulariosRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        title: 'Formularios Básicos',
        component: FormularioPage,
      },
      {
        path: 'dynamic',
        title: 'Formularios Dinámicos',
        component: FormulariosDinamicos,
      },
      {
        path: 'more',
        title: 'More',
        component: FormulariosSwitches,
      },
      {
        path: '**',
        redirectTo: 'basic',
      },
    ],
  },
];
