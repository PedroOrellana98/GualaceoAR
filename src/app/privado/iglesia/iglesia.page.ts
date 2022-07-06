import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-iglesia',
  templateUrl: './iglesia.page.html',
  styleUrls: ['./iglesia.page.scss'],
})
export class IglesiaPage implements OnInit {

  public paneEnabled: boolean = false;

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    console.log('iglesia.ionViewWillEnter()');
    this.paneEnabled = true;
    const menuId = await this.menu.enable(true, 'second');
    console.log('menuId: ', menuId);
  }
  
  ionViewWillLeave() {
    console.log('iglesia.ionViewWillLeave()');
    this.paneEnabled = false;
  }

}
