import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IglesiaPageRoutingModule } from './iglesia-routing.module';

import { IglesiaPage } from './iglesia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IglesiaPageRoutingModule
  ],
  declarations: [IglesiaPage]
})
export class IglesiaPageModule {}
