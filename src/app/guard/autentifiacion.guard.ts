import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login/login.service';

@Injectable({
  providedIn: 'root'
})

export class AutentifiacionGuard implements CanActivate {

  constructor(private router:Router, private loginService:LoginService){ }
  
  canActivate(route:ActivatedRouteSnapshot) {
    if(this.loginService.logueado()){
      return true;
    }
    
    this.router.navigate(["/login"])
    return false;
  }
}
