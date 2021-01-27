import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class JwtintercertorService implements HttpInterceptor {
  
  constructor(private loginService:LoginService) { }

  intercept(req, next){
    const tokenRequerido = req.clone({
      setHeaders:{
        Authorization: `Bearer ${this.loginService.obtenerToken()}`
      }
    })
    return next.handle(tokenRequerido)
  } 
}
