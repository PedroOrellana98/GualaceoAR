import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-iglesia',
  templateUrl: './iglesia.page.html',
  styleUrls: ['./iglesia.page.scss'],
})
export class IglesiaPage { 
  
  constructor(private route: Router, public menu: MenuController) { }

  salir() {
    this.route.navigate(['login']);
  }
  
  iglesia() {
    this.route.navigate(['privado/iglesia-matriz']);
  }

  calle() {
    this.route.navigate(['privado/calle']);
  }

  acueducto() {
    this.route.navigate(['privado/acueducto']);
  }

  ionViewWillEnter() {
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    this.menu.enable(false);
  }

}
