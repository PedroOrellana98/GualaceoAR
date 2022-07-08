import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcueductoPage } from './acueducto.page';

const routes: Routes = [
  {
    path: '',
    component: AcueductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcueductoPageRoutingModule {}
