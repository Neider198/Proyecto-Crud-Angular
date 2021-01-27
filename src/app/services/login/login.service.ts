import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL_API = 'https://localhost:44319/api';
  constructor(private http:HttpClient, private router:Router) { }

  iniciarSesion(user){
    return this.http.post(`${this.URL_API}/iniciar_sesion/`, user)
  }

  logueado(){
    if(localStorage.getItem('token')){
      return true
    }
  }

  obtenerToken(){
    return localStorage.getItem('token')
  }

  cerraSesion(){
    localStorage.removeItem('token')
    this.router.navigate(["/login"])
  }

}
