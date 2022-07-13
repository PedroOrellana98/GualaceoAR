import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-iglesia',
  templateUrl: './iglesia.page.html',
  styleUrls: ['./iglesia.page.scss'],
})
export class IglesiaPage { 

  paneEnabled = true;
  
  constructor(private route: Router, public menu: MenuController) { }

  salir() {
    this.route.navigate(['/login']);
  }
  
  ionViewWillEnter() {
    this.menu.enable(false);
  }

}
