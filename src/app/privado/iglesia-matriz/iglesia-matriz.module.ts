import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IglesiaMatrizPageRoutingModule } from './iglesia-matriz-routing.module';

import { IglesiaMatrizPage } from './iglesia-matriz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IglesiaMatrizPageRoutingModule
  ],
  declarations: [IglesiaMatrizPage]
})
export class IglesiaMatrizPageModule {}
