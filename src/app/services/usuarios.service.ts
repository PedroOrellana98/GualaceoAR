import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Usuario } from '../domain/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  

  constructor(public afs: AngularFirestore) { }

  save(usuario: Usuario){
    const refUsuarios = this.afs.collection("usuario");
    if(usuario.uid == null){
      usuario.uid = this.afs.createId();
    }
    refUsuarios.doc(usuario.uid).set(Object.assign({}, usuario));
    return true;
  }

  getUsuarios(): Observable<any[]>{
    return this.afs.collection("usuario"
    ).valueChanges();
  }

  findUser(correo: string, clave: string): Observable<any>{
    console.log('Correo: ' + correo);
    return this.afs.collection('usuario',
      ref => ref.where('correo', '==', correo).where('clave','==',clave)).valueChanges();
  }
  findCorreo(correo: string): Observable<any>{
    console.log('Correo: ' + correo);
    return this.afs.collection('usuario',
      ref => ref.where('correo', '==', correo)).valueChanges();
  }

  findId(cedula: string): Observable<any>{
    console.log('Cedula: ' + cedula);
    return this.afs.collection('usuario',
      ref => ref.where('cedula', '==', cedula).where('rol','==', "cliente")).valueChanges();
  }
 
}