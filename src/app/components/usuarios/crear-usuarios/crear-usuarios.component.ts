import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { SexoService } from 'src/app/services/sexo/sexo.service';
import { TipoIdentificacionService } from 'src/app/services/tipo-identificacion/tipo-identificacion.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { CrearTipoIdentificacionComponent } from '../../tipo-identificacion/crear-tipo-identificacion/crear-tipo-identificacion.component';
import { TipoIdentificacionI } from '../../../interfaces/tipo-identificacion/tipo-identificacion'

@Component({
  providers:[CrearTipoIdentificacionComponent ],
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.css']
})
export class CrearUsuariosComponent implements OnInit {
  

  constructor(private usuariosService:UsuariosService, 
              private sexoService: SexoService, 
              private tipoIdentificacionService:TipoIdentificacionService, 
              private crearTipoIdentificacionComponent:CrearTipoIdentificacionComponent, 
              private router: Router, 
              private activatedRoute: ActivatedRoute, 
              private snackBar: MatSnackBar) {}

  btnTitulo:string = "Guardar";
  titulo:string = "Registrar";
  estadoEditar:Boolean = false; 
  color:string = "primary"; 
  
  tiposIdentificacion:any = [
    { 'id':'', 'nombre':''},
  ];
  
  aa:any = [
    {nombre: 'Masry'},
    {nombre: 'Shellssey'},
    {nombre: 'Igor'}
  ]

  myControl = new FormControl();
  options = this.tiposIdentificacion;
  filteredOptions;

  ngOnInit(): void {
    this.mostrarTipoIdentififcacion()
    this.mostrarSexo()
    
    const parametros = this.activatedRoute.snapshot.params;
    if (parametros.id) {
    this.titulo = "Actualizar"
    this.btnTitulo= "Actualizar"
    this.color = "accent";
    this.usuariosService
    .obtenerUsuario(parametros.id)
        .subscribe(
          res =>{
            this.usuarios = res
            this.estadoEditar = true;
            console.log(res)
          }
        )  
    }

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.tiposIdentificacion.slice())
      ); 
  }
  
  usuarios:any = {
    id: '',
    nombres : '',
    apellidos : '',
    tipoidentificacion : '',
    identificacion : '',
    sexo : '',
    direccion : '',
    telefono : '',  
  };
  
  
    sexos:any = [
      { id:'', nombre:''},
    ];



  displayFn(user): string {
    return user && user.nombre ? user.nombre : '';
  }

  private _filter(nombre: string) {
    const filterValue = nombre.toLowerCase();

    return this.tiposIdentificacion.filter(option => option.nombre.toLowerCase().indexOf(filterValue) === 0);
  }

  mostrarTipoIdentififcacion(){
    this.tipoIdentificacionService
      .obtenerTiposIdentificacion()
        .subscribe(
          res =>{
            this.tiposIdentificacion = res
            console.log(res)
          },
          err => console.log(err)
        )
  }

  mostrarSexo(){
    this.sexoService
      .obtenerSexos()
        .subscribe(
          res =>{
            this.sexos = res
            console.log(res)
          },
          err => console.log(err)
        )
  }

  agregar(){
    this.usuariosService
      .agregarUsuarios(this.usuarios)
        .subscribe(
          res =>{
            this.router.navigate(['/usuario'])
            this.crearTipoIdentificacionComponent.alertaAccion('Guardado')
            console.log(res)
            console.log(this.usuarios)
          },
          err => console.log(err)
      )
    
  }

  editar(){
    this.usuariosService
      .editarUsuarios(this.usuarios.id, this.usuarios)
        .subscribe(
          res =>{
            this.usuarios = res
            this.router.navigate(['/usuario'])
            this.crearTipoIdentificacionComponent.alertaAccion('Acualizados')
          },
          err=> console.log(err)
        )
  }
}

