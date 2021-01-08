import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { SexoService } from 'src/app/services/sexo/sexo.service';
import { CrearTipoIdentificacionComponent } from '../../tipo-identificacion/crear-tipo-identificacion/crear-tipo-identificacion.component';

@Component({
  providers:[CrearTipoIdentificacionComponent ],
  selector: 'app-crear-sexo',
  templateUrl: './crear-sexo.component.html',
  styleUrls: ['./crear-sexo.component.css']
})
export class CrearSexoComponent implements OnInit {

  sexo:any = {
    id:'',
    nombre:'',
  };

  btnTitulo:string = "Guardar";
  titulo:string = "Registrar";
  estadoEditar:Boolean = false;
  color:string = "primary";

  constructor(private sexoService: SexoService, private router: Router, private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar,private crearTipoIdentificacionComponent:CrearTipoIdentificacionComponent) { }

  ngOnInit(): void {
    const parametros = this.activatedRoute.snapshot.params;
    if (parametros.id) {
    this.titulo = "Actualizar"
    this.btnTitulo= "Actualizar"
    this.color = "accent";
    this.sexoService
      .obtenerSexo(parametros.id)
        .subscribe(
          res =>{
            this.sexo = res
            this.estadoEditar = true;
            console.log(res)
          }
        )
    }
  }

  agregar(){
    this.sexoService
      .agregarSexo(this.sexo)
        .subscribe(
          res => {  
            console.log(res)
            this.router.navigate(['/sexo'])
            this.crearTipoIdentificacionComponent.alertaAccion('Guardado')
          },
          err=> console.log(err)
        ) 
  }

  editar(){
    this.sexoService
      .editarSexo(this.sexo.id, this.sexo)
        .subscribe(
          res =>{
            this.sexo = res
            this.router.navigate(['/sexo'])
            this.crearTipoIdentificacionComponent.alertaAccion('Acualizados')
          },
          err=> console.log(err)
        )
  }
}
