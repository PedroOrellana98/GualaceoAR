import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'privado/iglesia',
    loadChildren: () => import('./privado/iglesia/iglesia.module').then( m => m.IglesiaPageModule)
  },
  {
    path: 'codigo-qr',
    loadChildren: () => import('./codigo-qr/codigo-qr.module').then( m => m.CodigoQRPageModule)
  },
  {
    path: 'privado/iglesia-matriz',
    loadChildren: () => import('./privado/iglesia-matriz/iglesia-matriz.module').then( m => m.IglesiaMatrizPageModule)
  },
  {
    path: 'privado/acueducto',
    loadChildren: () => import('./privado/acueducto/acueducto.module').then( m => m.AcueductoPageModule)
  },
  {
    path: 'privado/calle',
    loadChildren: () => import('./privado/calle/calle.module').then( m => m.CallePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
