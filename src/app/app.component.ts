import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Registrarse', url: 'registrar', icon: 'person-add'},
    { title: 'Iniciar Sesion', url: 'login', icon: 'people'},
    { title: 'Escanear Codigo QR', url: 'codigo-qr', icon: 'qr-code'},
  ];

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor() { }
}
