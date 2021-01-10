import { Component, OnInit } from '@angular/core';
import { TipoIdentificacionService } from './../../../services/tipo-identificacion/tipo-identificacion.service';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmacionModalComponent } from 'src/app/components/confirmacion-modal/confirmacion-modal.component';
import { CrearTipoIdentificacionComponent } from '../crear-tipo-identificacion/crear-tipo-identificacion.component';


@Component({
  providers:[CrearTipoIdentificacionComponent ],
  selector: 'app-listar-tipo-identificacion',
  templateUrl: './listar-tipo-identificacion.component.html',
  styleUrls: ['./listar-tipo-identificacion.component.css']
})
export class ListarTipoIdentificacionComponent implements OnInit {
  displayedColumns: string[] = ['id', 'tipoidentificacion', 'acciones'];
  dataSource:any;
  
  constructor(private tipoIdentificacionService:TipoIdentificacionService, public dialog: MatDialog, private crearTipoIdentificacionComponent:CrearTipoIdentificacionComponent ) { }

  ngOnInit(): void {
    this.mostrarTipoIdentififcacion()
  }

  mostrarTipoIdentififcacion(){
    this.tipoIdentificacionService
      .obtenerTiposIdentificacion()
        .subscribe(
          res =>{
            this.dataSource = res
            console.log(res)
          },
          err => console.log(err)
        )
  }

  eliminar(id){
    const dialogRef = this.dialog.open(ConfirmacionModalComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.tipoIdentificacionService
        .eliminarTipoIdentificacion(id)
        .subscribe(
          () =>{
            console.log('Registro Eliminado')
            this.mostrarTipoIdentififcacion()
            this.crearTipoIdentificacionComponent.alertaAccion('Eliminado')
          },
          err => console.log(err)
        )
      }
    });


  }
}
