import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IglesiaPage } from './iglesia.page';

const routes: Routes = [
  {
    path: '',
    component: IglesiaPage,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../.././login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IglesiaPageRoutingModule {}
