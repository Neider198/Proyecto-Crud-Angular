import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListarTipoIdentificacionComponent } from './components/tipo-identificacion/listar-tipo-identificacion/listar-tipo-identificacion.component';
import { CrearTipoIdentificacionComponent } from './components/tipo-identificacion/crear-tipo-identificacion/crear-tipo-identificacion.component'
import { CrearUsuariosComponent } from './components/usuarios/crear-usuarios/crear-usuarios.component';
import { ListarUsuariosComponent } from './components/usuarios/listar-usuarios/listar-usuarios.component';
import { ListarSexoComponent } from './components/sexo/listar-sexo/listar-sexo.component';
import { CrearSexoComponent } from './components/sexo/crear-sexo/crear-sexo.component';

const routes: Routes = [
  {
    path:'',
    component: InicioComponent 
  },
  {
    path:'inicio',
    component: InicioComponent 
  },
  {
    path:'usuario',
    component: ListarUsuariosComponent 
  },
  {
    path:'usuario/agregar',
    component: CrearUsuariosComponent 
  },
  {
    path:'usuario/editar/:id',
    component: CrearUsuariosComponent 
  },
  {
    path:'tipo-identificacion',
    component: ListarTipoIdentificacionComponent 
  },
  {
    path:'tipo-identificacion/agregar',
    component: CrearTipoIdentificacionComponent 
  },
  {
    path:'tipo-identificacion/editar/:id',
    component: CrearTipoIdentificacionComponent 
  },
  {
    path:'sexo',
    component: ListarSexoComponent 
  },
  {
    path:'sexo/agregar',
    component: CrearSexoComponent 
  },
  {
    path:'sexo/editar/:id',
    component: CrearSexoComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
