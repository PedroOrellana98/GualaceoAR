import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IglesiaMatrizPage } from './iglesia-matriz.page';

const routes: Routes = [
  {
    path: '',
    component: IglesiaMatrizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IglesiaMatrizPageRoutingModule {}
