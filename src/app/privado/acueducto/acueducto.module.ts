import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcueductoPageRoutingModule } from './acueducto-routing.module';

import { AcueductoPage } from './acueducto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcueductoPageRoutingModule
  ],
  declarations: [AcueductoPage]
})
export class AcueductoPageModule {}
