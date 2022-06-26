import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Usuario } from '../domain/usuario';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  nombre: string;

  usuario: Usuario = new Usuario();

  usuarios: any;

  constructor(private route: ActivatedRoute, 
      private usuarioService: UsuariosService,
      private router: Router) { 

    route.queryParams.subscribe(params => {
      this.nombre = params.nombre
      
    })
    
  }
    
  ngOnInit() {
    this.usuarios = this.usuarioService.getUsuarios();
  }

  async registrar(){
    this.usuario.rol="cliente";
    let user = this.usuarioService.save(this.usuario);
    if (user == true) {
      let params: NavigationExtras ={
        queryParams: {
          usr: this.usuario
        }
      }
      this.router.navigate(['login'],params);
    }
  }
  regresar(){
    this.router.navigate(['login']);
  }

}
