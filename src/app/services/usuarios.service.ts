import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Usuario } from '../domain/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  

  constructor(public afs: AngularFirestore,
    public afr: AngularFireDatabase ) { }

  save(usuario: Usuario){
    if(usuario.uid == null){
      usuario.uid = this.afr.createPushId();
    }
    this.afr.object("usuario/" + usuario.uid).set(Object.assign({}, usuario));
    return true;
  }

  getUsuarios(): Observable<any[]>{
    return this.afr.list("usuario/").valueChanges();
  }

  findUser(correo: string, clave: string): Observable<any>{
    /*this.afr.list('usuario').valueChanges().subscribe(res => {
      console.log("res" + JSON.stringify(res));
    });*/
    return this.afr.list('usuario',
      ref => ref.orderByChild('correo').equalTo(correo)).valueChanges();
  }

  findCorreo(correo: string): Observable<any>{
    return this.afr.list('usuario',
      ref => ref.orderByChild('correo').equalTo(correo)).valueChanges();
  }

  findId(cedula: string): Observable<any>{
    console.log('Cedula: ' + cedula);
    return this.afs.collection('usuario',
      ref => ref.where('cedula', '==', cedula).where('rol','==', "cliente")).valueChanges();
  }
 
}