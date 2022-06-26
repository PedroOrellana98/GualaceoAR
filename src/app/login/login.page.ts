import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavigationExtras, Router } from '@angular/router';
import { Usuario } from '../domain/usuario';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: Usuario = new Usuario();
  usuario2: Usuario = new Usuario();
  newUsuario: Usuario = new Usuario();
  valUsr: Usuario = new Usuario();

  constructor(private usuarioService: UsuariosService,
    private route:Router, private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async login(){
    const correo = this.usuario.correo
    const clave = this.usuario.clave
    this.usuarioService.findUser(correo, clave).subscribe(data=>{
      this.usuario2=data[0]
      try{
        if(this.usuario2.correo==correo && this.usuario2.clave==clave && this.usuario2.rol=='administrador'){
          let params: NavigationExtras ={
            queryParams: {
              usuario2: this.usuario2
            }
          }
          this.route.navigate(['privado/iglesia'],params);
        }else if(this.usuario2.correo==correo && this.usuario2.clave==clave && this.usuario2.rol=='cliente'){
          let params: NavigationExtras ={
            queryParams: {
              usuario2: this.usuario2
            }
          }
          this.route.navigate(['privado/iglesia'],params);
        }
      }
      catch(error){console.log('Error: ->', error);
        this.route.navigate(['login']);}
    });
  }

  registrar(){
    this.route.navigate(['registrar']);
  }
}
