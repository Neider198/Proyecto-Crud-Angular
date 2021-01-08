import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor( private http:HttpClient) {}

  obtenerMenu(){
    return this.http.get("assets/json/menu.json/")
  }
}
