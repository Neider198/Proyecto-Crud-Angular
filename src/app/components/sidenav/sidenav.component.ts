import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  menus:any;
  constructor(private menuService:MenuService, public loginService:LoginService ) { }

  ngOnInit(): void {
    this.mostrarMenu()
  }

  mostrarMenu(){
    this.menuService.
      obtenerMenu().
        subscribe(
          res => {
            this.menus = res;
            console.log(this.menus)
        },
        err => console.log(err)
      )
  }

}
