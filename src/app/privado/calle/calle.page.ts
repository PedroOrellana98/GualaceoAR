import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-calle',
  templateUrl: './calle.page.html',
  styleUrls: ['./calle.page.scss'],
})
export class CallePage {

  constructor( private route: Router,
     public menu: MenuController ) { }

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
