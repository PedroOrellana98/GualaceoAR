import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iglesia-matriz',
  templateUrl: './iglesia-matriz.page.html',
  styleUrls: ['./iglesia-matriz.page.scss'],
})
export class IglesiaMatrizPage {

  constructor(private route: Router) { }

  salir() {
    this.route.navigate(['/login']);
  }

}
