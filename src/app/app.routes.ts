import { Routes } from '@angular/router';
import { HomePage } from './features/module/homePage/homePage';
import { PerfilPage } from './features/perfilPage/perfilPage';
import { ProyectosPage } from './features/proyectos-page/proyectos-page';
import { ProyectosDosPage } from './features/proyectos-dos-page/proyectos-dos-page';
import { FormularioPage } from './features/formularios/pages/FormularioPage/formularios-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'perfil',
    component: PerfilPage,
  },
  {
    path: 'proyectos-page',
    component: ProyectosPage,
  },
  {
    path: 'proyectos-dos-page',
    component: ProyectosDosPage,
  },
  // {
  //   path: 'formularios-page',
  //   component: FormularioPage,
  // },
  // {
  //   path: 'formulario',
  //   loadChildren: () =>
  //     import('./features/formularios/pages/formularios-routes').then((m) => m.formulariosRoutes),
  // },
  {
    path: 'formulario',
    loadChildren: () =>
      import('./features/formularios/pages/formularios-routes').then((m) => m.formulariosRoutes),
  },
];
