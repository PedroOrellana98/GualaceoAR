import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallePageRoutingModule } from './calle-routing.module';

import { CallePage } from './calle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallePageRoutingModule
  ],
  declarations: [CallePage]
})
export class CallePageModule {}
