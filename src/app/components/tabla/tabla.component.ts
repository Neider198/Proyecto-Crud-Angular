import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  displayedColumns: string[] = ['identificacion', 'tipoidentificacion', 'nombres', 'apellidos', 'sexo.nombre', 'telefono', 'direccion'];
  dataSource:any;
  constructor() { }

  ngOnInit(): void {
  }

}
