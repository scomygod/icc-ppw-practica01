import { Routes } from '@angular/router';
import { HomePage } from './features/module/homePage/homePage';
import { PerfilPage } from './features/perfilPage/perfilPage';

export const routes: Routes = [
  {
    path: "",
    component: HomePage,
    title : 'Contador'
  },
  {
    path: 'perfil',
    component: PerfilPage,
    title : 'Perfil'
  }
];
