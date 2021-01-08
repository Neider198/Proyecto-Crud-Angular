import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoIdentificacionService } from 'src/app/services/tipo-identificacion/tipo-identificacion.service';
import { TipoIdentificacionI } from './../../../interfaces/tipo-identificacion/tipo-identificacion'

@Component({
  selector: 'app-crear-tipo-identificacion',
  templateUrl: './crear-tipo-identificacion.component.html',
  styleUrls: ['./crear-tipo-identificacion.component.css']
})
export class CrearTipoIdentificacionComponent implements OnInit {

  tipoIdentificacion:any = {
    id:'',
    nombre:'',
  };
  btnTitulo:string = "Guardar";
  titulo:string = "Registrar";
  estadoEditar:Boolean = false;
  color:string = "primary";

  constructor(private tipoIdentificacionService:TipoIdentificacionService,private router: Router, private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar) { }
  
  ngOnInit(): void {
    const parametros = this.activatedRoute.snapshot.params;
    if (parametros.id) {
    this.titulo = "Actualizar"
    this.btnTitulo= "Actualizar"
    this.color = "accent";
    this.tipoIdentificacionService
      .obtenerTipoIdentificacion(parametros.id)
        .subscribe(
          res =>{
            this.tipoIdentificacion = res
            this.estadoEditar = true;
            console.log(res)
          }
        )
    }
  }

  alertaAccion(mensaje){
    this.snackBar.open('Registro ' + mensaje, 'Cerrar',{
      duration:3000
    })
  }
  agregar(){
    this.tipoIdentificacionService
      .agregarTipoIdentificacion(this.tipoIdentificacion)
        .subscribe(
          res => {  
            console.log(res)
            this.router.navigate(['/tipo-identificacion'])
            this.alertaAccion('Guardado')
          },
          err=> console.log(err)
        ) 
  }

  editar(){
    this.tipoIdentificacionService
      .editarTipoIdentificacion(this.tipoIdentificacion.id, this.tipoIdentificacion)
        .subscribe(
          res =>{
            this.tipoIdentificacion = res
            this.router.navigate(['/tipo-identificacion'])
            this.alertaAccion('Acualizados')
          },
          err=> console.log(err)
        )
  }

}
