import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SexoService {

  URL_API = 'https://localhost:44319/api';
  constructor(private http:HttpClient) { }

  obtenerSexos(){
    return this.http.get(`${this.URL_API}/sexo/`)
  }

  obtenerSexo(id){
    return this.http.get(`${this.URL_API}/sexo/${id}/`)
  }

  agregarSexo(sexo){
    return this.http.post(`${this.URL_API}/sexo/`, sexo)
  }

  editarSexo(id, sexo){
    return this.http.put(`${this.URL_API}/sexo/${id}/`, sexo)
  }

  eliminarSexo(id){
    return this.http.delete(`${this.URL_API}/sexo/${id}/`)
  }
}
