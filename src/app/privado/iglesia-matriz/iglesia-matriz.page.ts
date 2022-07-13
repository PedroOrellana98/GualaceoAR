import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-iglesia-matriz',
  templateUrl: './iglesia-matriz.page.html',
  styleUrls: ['./iglesia-matriz.page.scss'],
})
export class IglesiaMatrizPage {

  constructor(private route: Router,
    public menu: MenuController) { }

  regresar() {
    this.route.navigate(['privado/iglesia']);
  }

    
  ionViewWillEnter() {
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    this.menu.enable(false);
  }

}
