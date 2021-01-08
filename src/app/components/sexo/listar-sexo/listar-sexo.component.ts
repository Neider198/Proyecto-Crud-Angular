import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SexoService } from 'src/app/services/sexo/sexo.service'
import { ConfirmacionModalComponent } from '../../confirmacion-modal/confirmacion-modal.component';
import { CrearTipoIdentificacionComponent } from '../../tipo-identificacion/crear-tipo-identificacion/crear-tipo-identificacion.component';

@Component({
  providers:[CrearTipoIdentificacionComponent ],
  selector: 'app-listar-sexo',
  templateUrl: './listar-sexo.component.html',
  styleUrls: ['./listar-sexo.component.css']
})
export class ListarSexoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'sexo', 'acciones'];
  dataSource:any;
  constructor(private sexoService: SexoService, public dialog: MatDialog, private crearTipoIdentificacionComponent:CrearTipoIdentificacionComponent) { }

  ngOnInit(): void {
    this.mostrarSexo()
  }

  mostrarSexo(){
    this.sexoService
      .obtenerSexos()
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
        this.sexoService
        .eliminarSexo(id)
          .subscribe(
          () =>{
            console.log('Dato Eliminado')
            this.mostrarSexo()
            this.crearTipoIdentificacionComponent.alertaAccion('Eliminado')
          },
          err => console.log(err)
        )
      }
    });
  }
}
