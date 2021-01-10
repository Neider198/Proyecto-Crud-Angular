import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuariosI } from './../../interfaces/usuarios/usuarios'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  URL_API = 'https://localhost:44319/api';
  constructor(private http:HttpClient) { }

  obtenerUsuarios(){
    return this.http.get(`${this.URL_API}/persona/`);
  }

  obtenerUsuario(id){
    return this.http.get(`${this.URL_API}/persona/${id}/`)
  }

  agregarUsuarios(usuarios){
    return this.http.post(`${this.URL_API}/persona/`, usuarios)
  }

  editarUsuarios(id, usuarios){
    return this.http.put(`${this.URL_API}/persona/${id}/`, usuarios)
  }

  eliminarUsuarios(id){
    return this.http.delete(`${this.URL_API}/persona/${id}/`)
  }
}
