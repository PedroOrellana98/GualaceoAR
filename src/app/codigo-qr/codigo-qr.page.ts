import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})
export class CodigoQRPage implements OnInit {

  constructor(public menu: MenuController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menu.enable(true);
  }

}
