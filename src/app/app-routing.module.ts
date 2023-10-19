import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// IMPORTANT: Do not use the "/error" route as it will be overwritten by the Core module. More info:
// https://mus.mercadona.com/39eafa15b/v/0/p/014302-page-error
// IMPORTANT: Do not use the "/monitoring_nginx" route as it will be overwritten by Nginx Configuration
// IMPORTANT: Do nout user the "/callback" as it will be overwritten by the Token module. More info:
// https://mus.mercadona.com/39eafa15b/v/0/p/043ae9-rutas-no-permitidas

export const COMPONENTS_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home-page.module').then((m) => m.HomePageModule)
  }
];

const routes: Routes = [
  {
    path: '',
    children: COMPONENTS_ROUTES
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
