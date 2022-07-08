import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallePage } from './calle.page';

const routes: Routes = [
  {
    path: '',
    component: CallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallePageRoutingModule {}
