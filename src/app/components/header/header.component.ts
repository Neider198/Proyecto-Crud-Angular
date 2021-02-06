import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nombre = 'USER'
  @Input() sidenav:any;

  constructor(public loginService:LoginService) { }

  ngOnInit(): void {
  }

}
