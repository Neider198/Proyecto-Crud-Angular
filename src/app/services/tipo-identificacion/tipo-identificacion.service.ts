import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoIdentificacionService {

  URL_API = 'https://localhost:44319/api';
  constructor(private http:HttpClient) { }

  obtenerTiposIdentificacion(){
    return this.http.get(`${this.URL_API}/tipo-identificacion/`)
  }

  obtenerTipoIdentificacion(id){
    return this.http.get(`${this.URL_API}/tipo-identificacion/${id}/`)
  }

  agregarTipoIdentificacion(tipoIdentificion){
    return this.http.post(`${this.URL_API}/tipo-identificacion/`, tipoIdentificion)
  }

  editarTipoIdentificacion(id, tipoIdentificion){
    return this.http.put(`${this.URL_API}/tipo-identificacion/${id}/`, tipoIdentificion)
  }

  eliminarTipoIdentificacion(id){
    return this.http.delete(`${this.URL_API}/tipo-identificacion/${id}/`)
  }

}
