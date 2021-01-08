import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { ConfirmacionModalComponent } from '../../confirmacion-modal/confirmacion-modal.component';
import { CrearTipoIdentificacionComponent } from '../../tipo-identificacion/crear-tipo-identificacion/crear-tipo-identificacion.component';

@Component({
  providers:[CrearTipoIdentificacionComponent ],
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  usuarios:any = [];
  displayedColumns: string[] = ['identificacion', 'tipoidentificacion', 'nombres', 'apellidos', 'sexo', 'telefono', 'direccion', 'acciones'];
  dataSource:any;

  constructor(private usuariosService:UsuariosService, public dialog: MatDialog, private crearTipoIdentificacionComponent:CrearTipoIdentificacionComponent) { }

  ngOnInit(): void {
    this.mostrarUsuarios();
  }  

  mostrarUsuarios(){
    this.usuariosService
      .obtenerUsuarios()
        .subscribe(
          res =>{
            this.dataSource = res;
            console.log(this.dataSource)
          },
          err => console.log(err)
        )
  }

  eliminar(id){
    const dialogRef = this.dialog.open(ConfirmacionModalComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.usuariosService
          .eliminarUsuarios(id)
            .subscribe(
              () =>{
                console.log('Dato Eliminado')
                this.mostrarUsuarios()
                this.crearTipoIdentificacionComponent.alertaAccion('Eliminado')
              },
              err => console.log(err)
            )
      }
    });


  }

  
}
