import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarPage } from './agregar.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarPage
  }
  // ,
  // {
  //   path: 'agregar',
  //   loadChildren: () => import('../agregar/agregar.module').then( m => m.AgregarPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarPageRoutingModule {}
